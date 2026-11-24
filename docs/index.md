---
template: home.html
title: Shard brasileiro de Ultima Online
description: "Days of Britannia é um shard brasileiro de Ultima Online grátis: Felucca clássico com Arcanos, inimigos com IA tática, montarias raras e uma temporada nova a cada mês. Sem loja e sem doações."
hide:
  - toc
---

<!--
  Home em 5 dobras. Clipes: preencha data-dob-clip-webm / data-dob-clip-mp4
  (MP4/WebM mudos, 5 a 8 s, < 1,5 MB, em docs/assets/home/). Com os dois
  vazios, a página mostra a imagem de capa. As temporadas vêm de
  extra.dob_seasons no mkdocs.yml.
-->

<section class="dob-landing-hero dob-landing-hero--v2" aria-labelledby="dob-landing-title">
  <div class="dob-landing-hero__media" data-dob-clip-webm="assets/home/hero-loop.webm?v=20261123.2" data-dob-clip-mp4="assets/home/hero-loop.mp4?v=20261123.2" aria-hidden="true"><img src="assets/home/hero-loop-poster.webp?v=20261124.1" alt="" fetchpriority="high"></div>
  <div data-dob-slot="season-badge"></div>
  <span class="dob-landing-kicker">Shard brasileiro de Ultima Online</span>
  <h1 id="dob-landing-title" class="dob-landing-hero__title">Felucca clássico. <em>Desafio de verdade.</em></h1>
  <p class="dob-landing-hero__lede">O Ultima Online que você conhece, com combate e progressão de ARPG moderno. Domine 8 escolas de Arcanos, enfrente inimigos com IA tática, crie linhagens raras de montarias e dispute uma temporada nova a cada mês.</p>
  <div class="dob-landing-cta">
    <a class="dob-landing-btn dob-landing-btn--fire" href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"></path></svg>
      <span>Baixar Launcher e Jogar</span>
    </a>
    <a class="dob-landing-btn dob-landing-btn--ghost" href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Entrar no Discord</a>
      <a class="dob-landing-btn dob-landing-btn--ghost" href="#dob-landing-video"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z"></path></svg><span>Ver o trailer</span></a>
  </div>
  <p class="dob-landing-hero__note">Grátis, sem loja e sem doações. Launcher para Windows; Linux e macOS em preview em <a href="primeiros-passos/">Primeiros passos</a>.</p>
</section>

<section class="dob-landing-strip" aria-label="Status do servidor">
  <a class="dob-landing-stat" href="https://uoservers.com/server/dob-shard-days-of-britannia" target="_blank" rel="noopener noreferrer" data-dob-player-count data-dob-player-source="https://dobshard.com/api/player-status.php" data-dob-player-state="loading"><strong><i aria-hidden="true"></i><span data-dob-player-value>— online</span></strong><small>Jogadores agora</small></a>
  <span class="dob-landing-stat"><strong>2.8.0</strong><small>Versão atual</small></span>
  <a class="dob-landing-stat" href="patches/"><strong>Tempestas e Mors</strong><small>Última atualização</small></a>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-pillars">
  <span class="dob-landing-kicker">Por que jogar</span>
  <h2 id="dob-landing-pillars" class="dob-landing-section__title">O que faz o DoB diferente</h2>
  <div class="dob-pillars" data-dob-tabs>
    <div class="dob-pillars__tabs" role="tablist" aria-label="Pilares do jogo" hidden>
      <button type="button" role="tab" id="dob-pillar-tab-arcanos" aria-controls="dob-pillar-arcanos" aria-selected="true">Arcanos e Maestrias</button>
      <button type="button" role="tab" id="dob-pillar-tab-montarias" aria-controls="dob-pillar-montarias" aria-selected="false" tabindex="-1">Montarias e tintas</button>
      <button type="button" role="tab" id="dob-pillar-tab-ia" aria-controls="dob-pillar-ia" aria-selected="false" tabindex="-1">Inimigos com IA</button>
      <button type="button" role="tab" id="dob-pillar-tab-economia" aria-controls="dob-pillar-economia" aria-selected="false" tabindex="-1">Economia e Kharag</button>
    </div>
    <article class="dob-pillar" id="dob-pillar-arcanos" role="tabpanel" aria-labelledby="dob-pillar-tab-arcanos">
      <div class="dob-pillar__media" data-dob-clip-webm="assets/home/arcanos.webm?v=20261123.2" data-dob-clip-mp4="assets/home/arcanos.mp4?v=20261123.2">
        <img src="assets/home/arcanos.webp?v=20261123.2" alt="Ceifador do Arcano Finis (Mors) abate um grupo de criaturas, com os números de dano na tela" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">I · Poder e build</span>
        <h3>Arcanos e Maestrias</h3>
        <p>Seu PvM deixa de ser apertar um botão. O Magnum Opus reúne 8 escolas de Arcanos (Fogo, Gelo, Vida, Sombra, Sangue, Vazio, Tempestas e Mors), cada uma com três habilidades e uma suprema.</p>
        <p>A Maestria PvM evolui a cada abate. Os Arcanos são habilidades de PvM: o PvP clássico continua do jeito que você conhece.</p>
        <a class="dob-pillar__more" href="sistemas/arcana/">Ver Arcanos na wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-montarias" role="tabpanel" aria-labelledby="dob-pillar-tab-montarias">
      <div class="dob-pillar__media" data-dob-clip-webm="assets/home/montarias.webm?v=20261123.2" data-dob-clip-mp4="assets/home/montarias.mp4?v=20261123.2">
        <img src="assets/home/montarias.webp?v=20261123.2" alt="Montarias raras com tintas exclusivas em frente ao banco de Britain" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">II · Status e coleção</span>
        <h3>Montarias e tintas</h3>
        <p>Raridade que todo mundo enxerga no banco de Britain. Cruze linhagens raras de montarias e conquiste tintas exclusivas de temporada e de eventos.</p>
        <p>No DoB, prestígio não se compra: se caça, se cria e se exibe.</p>
        <a class="dob-pillar__more" href="sistemas/pets-montarias/">Ver pets e montarias na wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-ia" role="tabpanel" aria-labelledby="dob-pillar-tab-ia">
      <div class="dob-pillar__media" data-dob-clip-webm="assets/home/ia-boss.webm?v=20261123.4" data-dob-clip-mp4="assets/home/ia-boss.mp4?v=20261123.4">
        <img src="assets/home/ia-boss.webp?v=20261123.4" alt="Um mago prende o Orc Warlord num X de Wall of Stone, e ele quebra a pedra e parte para cima do mago" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">III · Adrenalina</span>
        <h3>Inimigos com IA tática</h3>
        <p>Prendeu a criatura num X de Wall of Stone? As criaturas avançadas derrubam a parede e vêm atrás de você. A IA aprimorada também persegue quem ataca de longe, fareja quem se esconde e vai atrás de quem cura.</p>
        <p>No começo da progressão, o PvM continua clássico. A IA aprimorada fica com as criaturas avançadas, como o Orc Warlord, que rendem mais ouro, XP e loot.</p>
        <a class="dob-pillar__more" href="sistemas/caca-pvm/">Ver caçadas na wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
    <article class="dob-pillar" id="dob-pillar-economia" role="tabpanel" aria-labelledby="dob-pillar-tab-economia">
      <div class="dob-pillar__media" data-dob-clip-webm="" data-dob-clip-mp4="">
        <img src="assets/home/economia.webp?v=20261123.3" alt="Janela do Kharag, o Coração da Terra, com os pontos por lingote e por madeira, no Safe Haven de Nujel'm" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">IV · Propósito</span>
        <h3>Economia viva e Kharag</h3>
        <p>Cada lingote, tora e tábua tem destino. Troque Commodity Deeds com o Kharag por elixires, tintas e estatuetas, e negocie no leilão global.</p>
        <p>Uma economia pensada para valorizar tanto quem caça quanto quem cria.</p>
        <a class="dob-pillar__more" href="sistemas/kharag/">Ver o Kharag na wiki <span aria-hidden="true">→</span></a>
      </div>
    </article>
  </div>
</section>

<section class="dob-landing-section dob-landing-section--glow" aria-labelledby="dob-landing-seasons">
  <span class="dob-landing-kicker">Temporadas mensais</span>
  <h2 id="dob-landing-seasons" class="dob-landing-section__title">Um servidor que se reinventa a cada mês</h2>
  <div data-dob-slot="seasons"></div>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-relief">
  <span class="dob-landing-kicker">Quality of life</span>
  <h2 id="dob-landing-relief" class="dob-landing-section__title">Conforto que faz diferença no dia a dia</h2>
  <ul class="dob-relief">
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M8 11h8"/></svg>
      <strong>Arsenal da casa</strong>
      <p>O Armory guarda armas, armaduras, poções e reagentes com 5 loadouts. Depois de morrer, o loadout veste de novo as peças iguais que estiverem guardadas.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-7-4.4-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.6-9.3 9-9.3 9Z"/><path d="M12 10v6M9 13h6"/></svg>
      <strong>Ressurreição inteligente</strong>
      <p>Levantou com bandagem ou Resurrection? O equipamento volta a ser vestido e o resto vai para a mochila.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><path d="m10 7 3 3m0-3-3 3"/></svg>
      <strong>Treasure Map Book</strong>
      <p>Até 100 mapas do tesouro num livro só, separados por nível e prazo. A Bússola aponta o caminho até o baú.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.6-.7-.7-2.6 2.9-2.3Z"/></svg>
      <strong>Kit de reparo</strong>
      <p>Conserta o equipamento, a mochila ou tudo de uma vez, sem falhar. Nada de correr atrás de ferreiro.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3l6 16 2.5-6.5L20 10 5 3Z"/><path d="M14 14l5 5"/></svg>
      <strong>Proteção de cursor</strong>
      <p>Item na mão ao morrer, deslogar ou no restart vai para a mochila ou o banco. Nunca para o chão.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><circle cx="12.5" cy="10" r="2.5"/></svg>
      <strong>Runic Atlas</strong>
      <p>Vendido pelo Mage: 48 runas e até 100 cargas num livro só, recarregado com scrolls de Recall como o Runebook.</p>
    </li>
  </ul>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-video">
  <span class="dob-landing-kicker">Trailer e comunidade</span>
  <h2 id="dob-landing-video" class="dob-landing-section__title">Veja o DoB em ação</h2>
  <figure class="dob-trailer">
    <video controls preload="none" playsinline poster="assets/home/trailer-poster.webp?v=20261124.1" aria-label="Trailer do Days of Britannia">
      <source src="assets/home/trailer.mp4?v=20261124.1" type="video/mp4">
    </video>
    <figcaption>Trailer do Days of Britannia · 44 s · Música: “Starting Over”, de Tricks &amp; Traps (domínio público, CC0)</figcaption>
  </figure>
  <div class="dob-landing-video" data-dob-youtube hidden>
    <button type="button" class="dob-landing-video__frame" data-dob-youtube-frame>
      <img data-dob-youtube-thumb alt="" loading="lazy">
      <span class="dob-landing-video__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    </button>
    <div class="dob-landing-video__body">
      <strong><a class="dob-landing-video__title" data-dob-youtube-title href="https://www.youtube.com/@DaysOfBritannia" target="_blank" rel="noopener noreferrer"></a></strong>
      <small>Vídeo aleatório do canal · <time data-dob-youtube-date></time></small>
      <span class="dob-landing-video__actions">
        <a class="dob-landing-btn dob-landing-btn--ghost dob-landing-btn--small" href="https://www.youtube.com/@DaysOfBritannia" target="_blank" rel="noopener noreferrer">Ver canal</a>
      </span>
    </div>
  </div>
</section>

<section class="dob-landing-section dob-landing-section--glow" aria-labelledby="dob-landing-start">
  <span class="dob-landing-kicker">Em 2 minutos</span>
  <h2 id="dob-landing-start" class="dob-landing-section__title">Comece agora</h2>
  <ol class="dob-landing-steps">
    <li><strong>Baixe o launcher</strong><p>Ele instala e atualiza o jogo. Windows, com Linux e macOS em preview.</p><a href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">DoBLauncher.exe <span aria-hidden="true">→</span></a></li>
    <li><strong>Crie a conta no login</strong><p>Digite um usuário e uma senha novos: a conta é criada na hora, sem cadastro em site.</p><a href="primeiros-passos/">Primeiros passos <span aria-hidden="true">→</span></a></li>
    <li><strong>Entre no Discord</strong><p>Avisos de eventos, comércio entre jogadores e guildas recrutando.</p><a href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Abrir convite <span aria-hidden="true">→</span></a></li>
  </ol>
  <div class="dob-landing-cta dob-landing-cta--center">
    <a class="dob-landing-btn dob-landing-btn--fire" href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"></path></svg>
      <span>Baixar Launcher e Jogar</span>
    </a>
    <a class="dob-landing-btn dob-landing-btn--ghost" href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Entrar no Discord</a>
  </div>
  <nav class="dob-landing-footlinks" aria-label="Mais informações">
    <a href="primeiros-passos/">Wiki</a>
    <a href="patches/">Patch notes</a>
    <a href="proximo-patch/">Próximo patch</a>
    <a href="combate/">Regras de combate</a>
  </nav>
</section>
