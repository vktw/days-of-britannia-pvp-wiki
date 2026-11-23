---
template: home.html
title: Brazilian Ultima Online shard
description: "Days of Britannia: classic Felucca UO with Arcana, tactical-AI enemies, rare mounts, and a new season every month. Free, with no shop and no donations."
hide:
  - toc
---

<!--
  Home page in 5 folds. Clips: fill data-dob-clip-webm / data-dob-clip-mp4
  (muted MP4/WebM, 5 to 8 s, < 1.5 MB, in docs/assets/clips/; on this English page use ../assets/clips/...). With both
  empty, the page shows the cover image. Seasons come from extra.dob_seasons
  in mkdocs.yml.
-->

<section class="dob-landing-hero dob-landing-hero--v2" aria-labelledby="dob-landing-title">
  <div class="dob-landing-hero__media" data-dob-clip-webm="" data-dob-clip-mp4="" aria-hidden="true"></div>
  <div data-dob-slot="season-badge"></div>
  <h1 id="dob-landing-title" class="dob-landing-hero__title">Classic Felucca UO, <em>with modern ARPG combat and progression.</em></h1>
  <p class="dob-landing-hero__lede">Master 8 schools of Arcana, face enemies with tactical AI, breed rare mount bloodlines, and compete in a new season every month.</p>
  <div class="dob-landing-cta">
    <a class="dob-landing-btn dob-landing-btn--fire" href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"></path></svg>
      <span>Download the Launcher and Play</span>
    </a>
    <a class="dob-landing-btn dob-landing-btn--ghost" href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Join Discord</a>
  </div>
  <p class="dob-landing-hero__note">Free, with no shop and no donations. Launcher for Windows; Linux and macOS previews in <a href="primeiros-passos/">Getting started</a>.</p>
</section>

<section class="dob-landing-strip" aria-label="Server status">
  <a class="dob-landing-stat" href="https://uoservers.com/server/dob-shard-days-of-britannia" target="_blank" rel="noopener noreferrer" data-dob-player-count data-dob-player-source="https://dobshard.com/api/player-status.php" data-dob-player-state="loading"><strong><i aria-hidden="true"></i><span data-dob-player-value>— online</span></strong><small>Players right now</small></a>
  <span class="dob-landing-stat"><strong>2.8.0</strong><small>Current version</small></span>
  <a class="dob-landing-stat" href="patches/"><strong>Tempestas and Mors</strong><small>Latest update</small></a>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-pillars">
  <span class="dob-landing-kicker">Why play</span>
  <h2 id="dob-landing-pillars" class="dob-landing-section__title">What makes DoB different</h2>
  <div class="dob-pillars" data-dob-tabs>
    <div class="dob-pillars__tabs" role="tablist" aria-label="Game pillars" hidden>
      <button type="button" role="tab" id="dob-pillar-tab-arcanos" aria-controls="dob-pillar-arcanos" aria-selected="true">Arcana and Masteries</button>
      <button type="button" role="tab" id="dob-pillar-tab-montarias" aria-controls="dob-pillar-montarias" aria-selected="false" tabindex="-1">Mounts and dyes</button>
      <button type="button" role="tab" id="dob-pillar-tab-ia" aria-controls="dob-pillar-ia" aria-selected="false" tabindex="-1">AI enemies</button>
      <button type="button" role="tab" id="dob-pillar-tab-economia" aria-controls="dob-pillar-economia" aria-selected="false" tabindex="-1">Economy and Kharag</button>
    </div>
    <article class="dob-pillar" id="dob-pillar-arcanos" role="tabpanel" aria-labelledby="dob-pillar-tab-arcanos">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="../assets/pillar-arcanos.webp?v=20261123.1" alt="Caster surrounded by rings of arcane energy among ruins" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">I · Power and builds</span>
        <h3>Arcana and Masteries</h3>
        <p>Your PvM is no longer one button. The Magnum Opus gathers 8 schools of Arcana (Fire, Frost, Life, Shadow, Blood, Void, Tempestas, and Mors), each with three abilities and an ultimate.</p>
        <p>PvM Mastery grows with every kill. Arcana are PvM abilities: classic PvP stays the way you know it.</p>
        <a class="dob-pillar__more" href="sistemas/arcana/">Read about Arcana in the wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-montarias" role="tabpanel" aria-labelledby="dob-pillar-tab-montarias">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="../assets/pillar-montarias.webp?v=20261123.1" alt="Spectral bear summoned beside its master" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">II · Status and collection</span>
        <h3>Mounts and dyes</h3>
        <p>Rarity everyone sees at the Britain bank. Breed rare mount bloodlines and earn exclusive season and event dyes.</p>
        <p>In DoB, prestige isn't bought: it's hunted, bred, and shown off.</p>
        <a class="dob-pillar__more" href="sistemas/pets-montarias/">Read about pets and mounts in the wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-ia" role="tabpanel" aria-labelledby="dob-pillar-tab-ia">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="../assets/card-pvm-mastery.webp?v=20260813.1" alt="Hunter faces an ancient dragon in a ruined temple" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">III · Adrenaline</span>
        <h3>Enemies with tactical AI</h3>
        <p>A new generation of enemies that won't die stuck behind a wall. The new combat intelligence breaks Wall of Stone and Energy Field, chases ranged attackers, sniffs out hidden players, and goes after whoever heals.</p>
        <p>It debuted on the Orc Warlord and is coming to new creatures, which give more gold, XP, and loot.</p>
        <a class="dob-pillar__more" href="sistemas/caca-pvm/">Read about hunting in the wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-economia" role="tabpanel" aria-labelledby="dob-pillar-tab-economia">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="../assets/hero-action-discord.webp?v=20260821.1" alt="Adventurers trading around a tavern table" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">IV · Purpose</span>
        <h3>Living economy and Kharag</h3>
        <p>Every ingot, log, and board has a purpose. Trade Commodity Deeds with Kharag for elixirs, dyes, and statuettes, and deal on the global auction.</p>
        <p>An economy built to reward hunters and crafters alike.</p>
        <a class="dob-pillar__more" href="sistemas/kharag/">Read about Kharag in the wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
  </div>
</section>

<section class="dob-landing-section dob-landing-section--glow" aria-labelledby="dob-landing-seasons">
  <span class="dob-landing-kicker">Monthly seasons</span>
  <h2 id="dob-landing-seasons" class="dob-landing-section__title">A server that reinvents itself every month</h2>
  <div data-dob-slot="seasons"></div>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-relief">
  <span class="dob-landing-kicker">For UO veterans</span>
  <h2 id="dob-landing-relief" class="dob-landing-section__title">What won't annoy you anymore</h2>
  <ul class="dob-relief">
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
      <strong>Saves that don't freeze</strong>
      <p>The save backup runs afterwards, without pausing the server. The world doesn't stop in the middle of your fight.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-7-4.4-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.6-9.3 9-9.3 9Z"/><path d="M12 10v6M9 13h6"/></svg>
      <strong>Smart resurrection</strong>
      <p>Back up with bandages or Resurrection? Your equipment is worn again and the rest goes to your backpack.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3l6 16 2.5-6.5L20 10 5 3Z"/><path d="M14 14l5 5"/></svg>
      <strong>Cursor protection</strong>
      <p>An item in hand when you die, log out, or the server restarts goes to your backpack or bank. Never to the ground.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
      <strong>Fair PvP in events</strong>
      <p>In the Free-for-All, everyone fights with the same kit, anonymous under the same cloak and the same name. The best player wins.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      <strong>Respect for your time</strong>
      <p>Hall of Echoes every Sunday, with a reserved slot, and events at set times. One or two hours a day already pay off.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M4 4l16 18"/></svg>
      <strong>Focus on the game, not your wallet</strong>
      <p>No shop and no donations. Every edge comes from Felucca, not from a credit card.</p>
    </li>
  </ul>
</section>

<section class="dob-landing-section dob-landing-section--glow" aria-labelledby="dob-landing-start">
  <span class="dob-landing-kicker">In 2 minutes</span>
  <h2 id="dob-landing-start" class="dob-landing-section__title">Start now</h2>
  <ol class="dob-landing-steps">
    <li><strong>Download the launcher</strong><p>It installs and updates the game. Windows, with Linux and macOS previews.</p><a href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">DoBLauncher.exe <span aria-hidden="true">→</span></a></li>
    <li><strong>Create your account at login</strong><p>Type a new username and password: the account is created on the spot, with no website sign-up.</p><a href="primeiros-passos/">Getting started <span aria-hidden="true">→</span></a></li>
    <li><strong>Join Discord</strong><p>Event announcements, player trading, and guilds recruiting.</p><a href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Open invite <span aria-hidden="true">→</span></a></li>
  </ol>
  <div class="dob-landing-cta dob-landing-cta--center">
    <a class="dob-landing-btn dob-landing-btn--fire" href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"></path></svg>
      <span>Download the Launcher and Play</span>
    </a>
    <a class="dob-landing-btn dob-landing-btn--ghost" href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Join Discord</a>
  </div>
  <nav class="dob-landing-footlinks" aria-label="More information">
    <a href="primeiros-passos/">Wiki</a>
    <a href="patches/">Patch notes</a>
    <a href="proximo-patch/">Next patch</a>
    <a href="combate/">Combat rules</a>
  </nav>
</section>
