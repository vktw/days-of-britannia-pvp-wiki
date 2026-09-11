<?php

declare(strict_types=1);

const DOB_STATUS_CACHE_TTL = 3600;
const DOB_STATUS_RETRY_TTL = 60;
const DOB_STATUS_TIMEOUT = 5.0;
const DOB_STATUS_MAX_RESPONSE_BYTES = 2048;

$allowedOrigins = [
    'https://dobshard.com',
    'https://www.dobshard.com',
    'http://127.0.0.1:8000',
    'http://localhost:8000',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Robots-Tag: noindex');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respond(['state' => 'unknown', 'playerCount' => null], 405);
}

$privateRoot = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'private';
$configPath = $privateRoot . DIRECTORY_SEPARATOR . 'dob-player-status.php';
$cachePath = $privateRoot . DIRECTORY_SEPARATOR . 'dob-player-status-cache.json';
$lockPath = $privateRoot . DIRECTORY_SEPARATOR . 'dob-player-status.lock';

if (!is_file($configPath)) {
    respond(['state' => 'unknown', 'playerCount' => null], 503);
}

try {
    $config = require $configPath;
} catch (Throwable) {
    respond(['state' => 'unknown', 'playerCount' => null], 503);
}

$host = is_array($config) ? ($config['host'] ?? null) : null;
$port = is_array($config) ? ($config['port'] ?? null) : null;

if (!is_string($host) || $host === '' || filter_var($host, FILTER_VALIDATE_DOMAIN, FILTER_FLAG_HOSTNAME) === false ||
    !is_int($port) || $port < 1 || $port > 65535) {
    respond(['state' => 'unknown', 'playerCount' => null], 503);
}

$lock = @fopen($lockPath, 'c');
if (is_resource($lock)) {
    @flock($lock, LOCK_EX);
}

$now = time();
$cached = readCache($cachePath);

if ($cached !== null && isFresh($cached, $now)) {
    $response = $cached;
    $statusCode = 200;
} else {
    $response = queryServer($host, $port);
    $ttl = $response['state'] === 'unknown' ? DOB_STATUS_RETRY_TTL : DOB_STATUS_CACHE_TTL;
    $response['checkedAt'] = gmdate('c', $now);
    $response['expiresAt'] = gmdate('c', $now + $ttl);
    $statusCode = $response['state'] === 'unknown' ? 503 : 200;
    @file_put_contents($cachePath, json_encode($response, JSON_UNESCAPED_SLASHES), LOCK_EX);
}

if (is_resource($lock)) {
    @flock($lock, LOCK_UN);
    fclose($lock);
}

respond($response, $statusCode);

function readCache(string $path): ?array
{
    if (!is_file($path)) {
        return null;
    }

    $contents = @file_get_contents($path);
    $cache = is_string($contents) ? json_decode($contents, true) : null;

    return is_array($cache) ? $cache : null;
}

function isFresh(array $cache, int $now): bool
{
    $expiresAt = isset($cache['expiresAt']) ? strtotime((string) $cache['expiresAt']) : false;
    if ($expiresAt === false || $expiresAt <= $now) {
        return false;
    }

    if (($cache['state'] ?? null) === 'offline') {
        return true;
    }

    return ($cache['state'] ?? null) === 'online' &&
        isset($cache['playerCount']) &&
        is_int($cache['playerCount']) &&
        $cache['playerCount'] >= 0;
}

function queryServer(string $host, int $port): array
{
    $errno = 0;
    $error = '';
    $socket = @fsockopen($host, $port, $errno, $error, DOB_STATUS_TIMEOUT);

    if (!is_resource($socket)) {
        return ['state' => 'offline', 'playerCount' => null];
    }

    stream_set_timeout($socket, (int) DOB_STATUS_TIMEOUT);

    try {
        $seed = random_bytes(4);
        if ($seed === "\0\0\0\0") {
            $seed = "\0\0\0\1";
        }

        // UO seed + variable-length F1 packet + UO Gateway extended-status command FF.
        $request = $seed . "\xF1\x00\x04\xFF";
        $written = @fwrite($socket, $request);

        if ($written !== strlen($request)) {
            return ['state' => 'unknown', 'playerCount' => null];
        }

        $response = '';
        $deadline = microtime(true) + DOB_STATUS_TIMEOUT;

        while (strlen($response) < DOB_STATUS_MAX_RESPONSE_BYTES && microtime(true) < $deadline) {
            $chunk = @fread($socket, DOB_STATUS_MAX_RESPONSE_BYTES - strlen($response));

            if ($chunk === false) {
                break;
            }

            if ($chunk !== '') {
                $response .= $chunk;
                if (str_contains($chunk, "\0")) {
                    break;
                }
                continue;
            }

            $metadata = stream_get_meta_data($socket);
            if (($metadata['timed_out'] ?? false) || feof($socket)) {
                break;
            }

            usleep(10000);
        }
    } finally {
        fclose($socket);
    }

    if (preg_match('/\bClients=(\d+)\b/i', $response, $matches) === 1) {
        return ['state' => 'online', 'playerCount' => (int) $matches[1]];
    }

    return ['state' => 'unknown', 'playerCount' => null];
}

function respond(array $payload, int $statusCode): never
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}
