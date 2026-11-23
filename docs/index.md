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
  <div class="dob-landing-hero__media" data-dob-clip-webm="assets/home/hero-loop.webm?v=20261123.2" data-dob-clip-mp4="assets/home/hero-loop.mp4?v=20261123.2" aria-hidden="true"></div>
  <div data-dob-slot="season-badge"></div>
  <span class="dob-landing-kicker">Shard brasileiro de Ultima Online</span>
  <h1 id="dob-landing-title" class="dob-landing-hero__title">O Ultima Online clássico de Felucca, <em>com combate e progressão de ARPG moderno.</em></h1>
  <p class="dob-landing-hero__lede">Domine 8 escolas de Arcanos, enfrente inimigos com IA tática, crie linhagens raras de montarias e dispute uma temporada nova a cada mês.</p>
  <div class="dob-landing-cta">
    <a class="dob-landing-btn dob-landing-btn--fire" href="https://downloads.dobshard.com/launcher/latest/DoBLauncher.exe">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"></path></svg>
      <span>Baixar Launcher e Jogar</span>
    </a>
    <a class="dob-landing-btn dob-landing-btn--ghost" href="https://discord.gg/e2VDbg2NYw" target="_blank" rel="noopener noreferrer">Entrar no Discord</a>
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
      <div class="dob-pillar__media" data-dob-clip-webm="assets/home/ia-boss.webm?v=20261123.2" data-dob-clip-mp4="assets/home/ia-boss.mp4?v=20261123.2">
        <img src="assets/home/ia-boss.webp?v=20261123.2" alt="O Orc Warlord derruba um Wall of Stone para alcançar o mago escondido atrás dele" loading="lazy">
      </div>
      <div class="dob-pillar__body">
        <span class="dob-pillar__num">III · Adrenalina</span>
        <h3>Inimigos com IA tática</h3>
        <p>Uma nova geração de inimigos que não morre travada atrás de parede. A nova inteligência de combate derruba Wall of Stone e Energy Field, persegue quem ataca de longe, fareja quem se esconde e vai atrás de quem cura.</p>
        <p>Estreou no Orc Warlord e chega às criaturas novas, que rendem mais ouro, XP e loot.</p>
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
  <span class="dob-landing-kicker">Para quem já jogou UO</span>
  <h2 id="dob-landing-relief" class="dob-landing-section__title">O que não vai mais te irritar</h2>
  <ul class="dob-relief">
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>
      <strong>Save que não congela</strong>
      <p>O backup do save é feito depois, sem pausar o servidor. O mundo não para no meio da sua luta.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s-7-4.4-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.6-9.3 9-9.3 9Z"/><path d="M12 10v6M9 13h6"/></svg>
      <strong>Ressurreição inteligente</strong>
      <p>Levantou com bandagem ou Resurrection? O equipamento volta a ser vestido e o resto vai para a mochila.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3l6 16 2.5-6.5L20 10 5 3Z"/><path d="M14 14l5 5"/></svg>
      <strong>Proteção de cursor</strong>
      <p>Item na mão ao morrer, deslogar ou no restart vai para a mochila ou o banco. Nunca para o chão.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
      <strong>PvP justo nos eventos</strong>
      <p>No Free-for-All, todos lutam com o mesmo kit, anônimos sob o mesmo manto e o mesmo nome. Ganha quem joga melhor.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
      <strong>Respeito ao seu tempo</strong>
      <p>Hall of Echoes todo domingo, com horário reservado, e eventos com hora marcada. Uma ou duas horas por dia já rendem.</p>
    </li>
    <li>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M4 4l16 18"/></svg>
      <strong>Foco no jogo, não na carteira</strong>
      <p>Sem loja e sem doações. Toda vantagem sai de Felucca, não do cartão de crédito.</p>
    </li>
  </ul>
</section>

<section class="dob-landing-section" aria-labelledby="dob-landing-video">
  <span class="dob-landing-kicker">Comunidade</span>
  <h2 id="dob-landing-video" class="dob-landing-section__title">DoB em vídeo</h2>
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
