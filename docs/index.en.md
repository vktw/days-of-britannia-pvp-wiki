---
template: home.html
title: Brazilian Ultima Online shard
description: "Days of Britannia is a free Brazilian Ultima Online shard: classic Felucca with Arcana, tactical-AI enemies, rare mounts, and a new season every month. No shop and no donations."
hide:
  - toc
---

<!--
  Home page in 5 folds. Clips: fill data-dob-clip-webm / data-dob-clip-mp4
  (muted MP4/WebM, 5 to 8 s, < 1.5 MB, in docs/assets/home/; on this English page use ../assets/home/...). With both
  empty, the page shows the cover image. Seasons come from extra.dob_seasons
  in mkdocs.yml.
-->

<section class="dob-landing-hero dob-landing-hero--v2" aria-labelledby="dob-landing-title">
  <div class="dob-landing-hero__media" data-dob-clip-webm="../assets/home/hero-loop.webm?v=20261123.2" data-dob-clip-mp4="../assets/home/hero-loop.mp4?v=20261123.2" aria-hidden="true"></div>
  <div data-dob-slot="season-badge"></div>
  <span class="dob-landing-kicker">Brazilian Ultima Online shard</span>
  <h1 id="dob-landing-title" class="dob-landing-hero__title">Classic Felucca Ultima Online, <em>with modern ARPG combat and progression.</em></h1>
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
      <div class="dob-pillar__media" data-dob-clip-webm="../assets/home/arcanos.webm?v=20261123.2" data-dob-clip-mp4="../assets/home/arcanos.mp4?v=20261123.2">
        <img src="../assets/home/arcanos.webp?v=20261123.2" alt="The Finis (Mors) Arcana reaper cuts down a pack of creatures, damage numbers on screen" loading="lazy">
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
      <div class="dob-pillar__media" data-dob-clip-webm="../assets/home/montarias.webm?v=20261123.2" data-dob-clip-mp4="../assets/home/montarias.mp4?v=20261123.2">
        <img src="../assets/home/montarias.webp?v=20261123.2" alt="Rare mounts with exclusive dyes in front of the Britain bank" loading="lazy">
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
      <div class="dob-pillar__media" data-dob-clip-webm="../assets/home/ia-boss.webm?v=20261123.4" data-dob-clip-mp4="../assets/home/ia-boss.mp4?v=20261123.4">
        <img src="../assets/home/ia-boss.webp?v=20261123.4" alt="A mage traps the Orc Warlord in an X of Wall of Stone, and it smashes the stone and charges the mage" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">III · Adrenaline</span>
        <h3>Enemies with tactical AI</h3>
        <p>Trapped a creature in an X of Wall of Stone? Advanced creatures smash the wall and come for you. The enhanced AI also chases ranged attackers, sniffs out hidden players, and goes after whoever heals.</p>
        <p>Early progression keeps classic PvM. The enhanced AI belongs to advanced creatures, like the Orc Warlord, which give more gold, XP, and loot.</p>
        <a class="dob-pillar__more" href="sistemas/caca-pvm/">Read about hunting in the wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-economia" role="tabpanel" aria-labelledby="dob-pillar-tab-economia">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="../assets/home/economia.webp?v=20261123.3" alt="Kharag, the Heart of the Earth, window showing points per ingot and per wood, in the Nujel'm Safe Haven" loading="lazy">
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
  <span class="dob-landing-kicker">Quality of life</span>
  <h2 id="dob-landing-relief" class="dob-landing-section__title">Comfort that makes a difference every day</h2>
  <ul class="dob-relief">
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M8 11h8"/></svg>
      <strong>House armory</strong>
      <p>The Armory stores weapons, armor, potions, and reagents with 5 loadouts. After a death, the loadout puts matching stored pieces back on.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-7-4.4-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.6-9.3 9-9.3 9Z"/><path d="M12 10v6M9 13h6"/></svg>
      <strong>Smart resurrection</strong>
      <p>Back up with bandages or Resurrection? Your equipment is worn again and the rest goes to your backpack.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><path d="m10 7 3 3m0-3-3 3"/></svg>
      <strong>Treasure Map Book</strong>
      <p>Up to 100 treasure maps in a single book, sorted by level and time left. The Compass points the way to the chest.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.6-.7-.7-2.6 2.9-2.3Z"/></svg>
      <strong>Repair kit</strong>
      <p>Repairs your equipment, your backpack, or everything at once, and never fails. No more hunting for a blacksmith.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3l6 16 2.5-6.5L20 10 5 3Z"/><path d="M14 14l5 5"/></svg>
      <strong>Cursor protection</strong>
      <p>An item in hand when you die, log out, or the server restarts goes to your backpack or bank. Never to the ground.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><circle cx="12.5" cy="10" r="2.5"/></svg>
      <strong>Runic Atlas</strong>
      <p>Sold by the Mage: 48 runes and up to 100 charges in a single book, recharged with Recall scrolls like a Runebook.</p>
    </li>
  </ul>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-video">
  <span class="dob-landing-kicker">Community</span>
  <h2 id="dob-landing-video" class="dob-landing-section__title">DoB on video</h2>
  <div class="dob-landing-video" data-dob-youtube hidden>
    <button type="button" class="dob-landing-video__frame" data-dob-youtube-frame>
      <img data-dob-youtube-thumb alt="" loading="lazy">
      <span class="dob-landing-video__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    </button>
    <div class="dob-landing-video__body">
      <strong><a class="dob-landing-video__title" data-dob-youtube-title href="https://www.youtube.com/@DaysOfBritannia" target="_blank" rel="noopener noreferrer"></a></strong>
      <small>Random video from the channel · <time data-dob-youtube-date></time></small>
      <span class="dob-landing-video__actions">
        <a class="dob-landing-btn dob-landing-btn--ghost dob-landing-btn--small" href="https://www.youtube.com/@DaysOfBritannia" target="_blank" rel="noopener noreferrer">Visit channel</a>
      </span>
    </div>
  </div>
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
