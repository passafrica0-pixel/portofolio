// Corps de page « home.html » — maquette v2, liens/assets réécrits.
export const HTML = `<!-- ============ HERO ============ -->
      <section class="hero" aria-label="Introduction">
        <div class="hero__wall" aria-hidden="true">
          <div class="hero__col" data-wall-speed="-0.22">
            <img src="/assets/image-3-v3.png" alt="" loading="eager" />
            <img src="/assets/Illustration-v2.png" alt="" />
            <img src="/assets/Etude-de-cas-2eme-image.png" alt="" />
          </div>
          <div class="hero__col" data-wall-speed="0.16">
            <img src="/assets/CleanShot-2023-08-02-at-16.23.48at2x-1024x290.jpg" alt="" loading="eager" />
            <img src="/assets/SOF-edc-02-scaled.jpg" alt="" />
            <img src="/assets/V6-transparent.png" alt="" />
          </div>
          <div class="hero__col" data-wall-speed="-0.3">
            <img src="/assets/SOF-edc-03-scaled.jpg" alt="" />
            <img src="/assets/welcomeurope-etude-de-cas-2.jpg" alt="" />
          </div>
          <div class="hero__col hero__col--far" data-wall-speed="0.24">
            <img src="/assets/CleanShot-2023-08-02-at-16.24.13at2x-1024x283.jpg" alt="" />
            <img src="/assets/SOF-edc_Plan-de-travail-1-scaled.jpg" alt="" />
          </div>
        </div>

        <div class="hero__veil" aria-hidden="true"></div>
        <div class="hero__aura" aria-hidden="true"></div>

        <div class="hero__inner">
          <p class="eyebrow eyebrow--light hero__eyebrow">
            <span class="live" aria-hidden="true"></span>
            Agence web · Marseille &amp; France
          </p>
          <h1 class="hero__title" data-split>
            <span>Agence web à Marseille.</span>
            <span class="hero__title--em">Des sites qui ramènent des clients.</span>
          </h1>
          <p class="hero__lede">
            Création de site internet sur mesure, refonte et
            <a href="https://simplement.me/agence-seo-marseille/">référencement</a> :
            on conçoit des sites pensés pour la performance, pas pour la décoration.
          </p>
          <div class="hero__actions">
            <a class="btn btn--cta btn--lg" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a>
            <a class="btn btn--line btn--lg" href="tel:+33465845964" data-copy="0465845964" data-cursor="Copier le numéro">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h3l1.5 3.5L6 7a9 9 0 0 0 3 3l1.5-1.5L14 10v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1Z" fill="currentColor"/></svg>
              04 65 84 59 64
            </a>
          </div>
          <p class="hero__note">Devis sous 24h · Sans engagement</p>
        </div>

        <figure class="hero__badge" aria-label="Notes clients">
          <div class="hero__badge-row">
            <img src="/assets/580b57fcd9996e24bc43c51f-1024x346.png" alt="Google" />
            <b>4.8</b><span>55 avis</span>
          </div>
          <div class="hero__badge-row">
            <img src="/assets/logo-malt-c-1024x304.png" alt="Malt" />
            <b>4.9</b><span>33 avis</span>
          </div>
        </figure>

        <p class="wordmark" id="wordmark" aria-hidden="true"><span data-letters>Simplement</span><i>.</i></p>

      </section>

      <!-- ============ BANDEAU CONFIANCE ============ -->
      <section class="trust" id="confiance">
        <div class="chrome" aria-hidden="true">
          <span class="chrome__a" data-chrome="0.16"></span>
          <span class="chrome__b" data-chrome="-0.24"></span>
          <span class="chrome__c" data-chrome="0.34"></span>
        </div>
        <div class="shell">
          <h2 class="trust__line reveal">
            <em>+ de 100 entreprises</em> ont déjà confié leur visibilité à Simplement.
          </h2>
        </div>
        <div class="ticker" aria-label="Certifications">
          <div class="ticker__track">
            <img src="/assets/google-partner1.png" alt="Google Partner" />
            <img src="/assets/hubspot1.png" alt="HubSpot" />
            <img src="/assets/snapchat1.png" alt="Snapchat Ads" />
            <img src="/assets/Tiktok1.png" alt="TikTok Ads" />
            <img src="/assets/lenkedin1.png" alt="LinkedIn Ads" />
            <img src="/assets/google-partner1.png" alt="" aria-hidden="true" />
            <img src="/assets/hubspot1.png" alt="" aria-hidden="true" />
            <img src="/assets/snapchat1.png" alt="" aria-hidden="true" />
            <img src="/assets/Tiktok1.png" alt="" aria-hidden="true" />
            <img src="/assets/lenkedin1.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <!-- ============ CONVICTION — traversée de formes ============ -->
      <section class="stage" id="conviction" aria-labelledby="stage-title">
        <div class="stage__pin">
          <div class="stage__field" aria-hidden="true">
            <span class="sh sh--sphere" data-fly="86,118,0.45,0|18,-38,1.75,42"></span>
            <span class="sh sh--pill"   data-fly="12,126,0.6,-18|72,-42,1.5,64"></span>
            <span class="sh sh--hex"    data-fly="58,132,0.5,10|92,-30,1.35,-58"></span>
            <span class="sh sh--sphere sh--pale" data-fly="34,140,0.3,0|-8,-26,1.15,-30"></span>
            <span class="sh sh--squircle" data-fly="72,150,0.4,24|40,-44,1.6,-72"></span>
            <span class="sh sh--dot"    data-fly="24,112,0.8,0|64,-20,1.1,0"></span>
            <span class="sh sh--dot sh--blue" data-fly="80,104,0.7,0|8,-16,1,0"></span>
            <span class="sh sh--ring"   data-fly="46,124,0.55,0|78,-34,1.45,120"></span>
            <span class="sh sh--pill sh--thin" data-fly="94,136,0.5,36|26,-40,1.3,-24"></span>
          </div>

          <div class="stage__copy" data-beat="a">
            <p class="eyebrow eyebrow--light">Ce qu'on croit</p>
            <h2 id="stage-title" data-split>Un beau site ne suffit pas.</h2>
          </div>

          <div class="stage__copy stage__copy--b" data-beat="b">
            <h2>Il doit faire sonner le téléphone.</h2>
            <p class="stage__lede">
              Trouvé sur Google, clair en trois secondes, convaincant en trente.
              Le reste, c'est de la décoration.
            </p>
            <a class="btn btn--cta" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>En parler 30 minutes<i class="ico ico--out" aria-hidden="true">→</i></a>
          </div>
        </div>
        <div class="stage__runway" aria-hidden="true"></div>
      </section>

      <!-- ============ LE FLUX (démonstration) ============ -->
      <section class="flux" id="flux" aria-labelledby="flux-title">
        <div class="flux__sticky">
          <canvas class="flux__canvas" id="flux-canvas" aria-hidden="true"></canvas>
          <div class="flux__fallback" aria-hidden="true"></div>

          <div class="flux__head">
            <p class="eyebrow eyebrow--light">La mécanique</p>
            <h2 id="flux-title" data-split>Du visiteur au client.</h2>
          </div>

          <ol class="flux__stages">
            <li class="flux__stage is-on" data-stage="0">
              <h3>Être vu</h3>
              <p>SEO, Google Ads, Meta Ads. Vous apparaissez au moment où votre client cherche. Sans visiteurs, le plus beau des sites reste une boutique fermée.</p>
            </li>
            <li class="flux__stage" data-stage="1">
              <h3>Convaincre</h3>
              <p>Design sur mesure, UX rapide et lisible, message clair. C'est là qu'un visiteur devient une demande de devis, ou qu'il repart.</p>
            </li>
            <li class="flux__stage" data-stage="2">
              <h3>Transformer</h3>
              <p>Mesure, itérations, accompagnement humain, automatisations IA quand elles font gagner du temps. Le site devient un canal, pas une dépense.</p>
            </li>
          </ol>

          <div class="flux__counters" id="counters">
            <div class="count"><strong data-count="1000" data-prefix="+">0</strong><span>projets réalisés</span></div>
            <div class="count"><strong data-count="100" data-prefix="+">0</strong><span>entreprises accompagnées</span></div>
            <div class="count"><strong data-count="4.8" data-decimals="1">0</strong><span>note Google · 55 avis</span></div>
          </div>
        </div>
        <div class="flux__runway" aria-hidden="true"></div>
      </section>

      <!-- ============ EXPERTISES — bandes ============ -->
      <section class="bands" id="expertise" aria-label="Nos expertises">
        <article class="band" data-band>
          <header class="band__head">
            <h2 class="band__title" data-split><span>Création</span><span>de site</span></h2>
            <p class="band__desc">
              Vitrine, e-commerce ou refonte complète. Sur mesure, sur des technologies récentes,
              avec des modifications illimitées dans le cadre défini ensemble.
            </p>
            <a class="link-arrow" href="https://simplement.me/agence-web-marseille/">Création de site <i>→</i></a>
          </header>
          <div class="band__rail" data-rail>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Clairciel</span></div>
                <div class="frame__view"><img src="/assets/clairciel.jpg" alt="Clairciel — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Cresp</span></div>
                <div class="frame__view"><img src="/assets/cresp.jpg" alt="Cresp — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--sphere" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Gardiens des clés</span></div>
                <div class="frame__view"><img src="/assets/gardiens-des-cles.jpg" alt="Gardiens des clés — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Lyde Conseil</span></div>
                <div class="frame__view"><img src="/assets/lyde-conseil.jpg" alt="Lyde Conseil — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--pill" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Prepamental</span></div>
                <div class="frame__view"><img src="/assets/prepamental.jpg" alt="Prepamental — projet réalisé par Simplement" /></div>
              </div>
            </figure>
          </div>
        </article>

        <article class="band band--alt" data-band>
          <header class="band__head">
            <h2 class="band__title" data-split><span>Référencement</span><span>naturel</span></h2>
            <p class="band__desc">
              Audit, contenu, netlinking, technique. On travaille les positions qui rapportent des
              demandes, pas les mots-clés qui flattent le rapport mensuel.
            </p>
            <a class="link-arrow" href="https://simplement.me/agence-seo-marseille/">Campagne SEO <i>→</i></a>
          </header>
          <div class="band__rail" data-rail>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Seeqle</span></div>
                <div class="frame__view"><img src="/assets/seeqle.jpg" alt="Seeqle — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Hey HR</span></div>
                <div class="frame__view"><img src="/assets/hey-hr.jpg" alt="Hey HR — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--sphere" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Foot Énergie</span></div>
                <div class="frame__view"><img src="/assets/foot-energie_1.jpg" alt="Foot Énergie — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Modern Vape</span></div>
                <div class="frame__view"><img src="/assets/modernvapecbd.jpg" alt="Modern Vape — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--pill" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Collection The</span></div>
                <div class="frame__view"><img src="/assets/collection-the-home-page.webp" alt="Collection The — projet réalisé par Simplement" /></div>
              </div>
            </figure>
          </div>
        </article>

        <article class="band" data-band>
          <header class="band__head">
            <h2 class="band__title" data-split><span>Publicité</span><span>&amp; IA</span></h2>
            <p class="band__desc">
              Google Ads, Meta Ads, HubSpot, emailing. Et de l'automatisation IA là où elle fait
              réellement gagner du temps. Audit d'abord, promesses ensuite.
            </p>
            <a class="link-arrow" href="https://simplement.me/agence-google-ads/">Acquisition payante <i>→</i></a>
          </header>
          <div class="band__rail" data-rail>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Créations Ads</span></div>
                <div class="frame__view"><img src="/assets/Untitled-1copy_3_1800x1800.webp" alt="Créations Ads — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Visuels produits</span></div>
                <div class="frame__view"><img src="/assets/Untitled-1copy_419d4108-4a14-488f-9a02-2bf233e5d1f4_1800x1800.webp" alt="Visuels produits — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--sphere" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Déclinaisons</span></div>
                <div class="frame__view"><img src="/assets/Untitled-2copy_a92a02ca-2f84-466e-8446-7d53fe05c897_1800x1800.webp" alt="Déclinaisons — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Formats sociaux</span></div>
                <div class="frame__view"><img src="/assets/Untitled-4copy_b0ff8036-fd7e-4d69-8a21-ddd7c045e670_1800x1800.webp" alt="Formats sociaux — projet réalisé par Simplement" /></div>
              </div>
            </figure>
            <span class="orb orb--pill" aria-hidden="true"></span>
            <figure data-tilt>
              <div class="frame">
                <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Résultats mesurés</span></div>
                <div class="frame__view"><img src="/assets/image-etude-de-cas-simplementv2-copie.jpg" alt="Résultats mesurés — projet réalisé par Simplement" /></div>
              </div>
            </figure>
          </div>
        </article>
      </section>

      <!-- ============ MÉTHODE ============ -->
      <section class="method" id="methode" aria-labelledby="method-title">
        <div class="shell method__head">
          <p class="eyebrow eyebrow--light">Notre méthode</p>
          <h2 id="method-title" data-split>Trois leviers, une trajectoire.</h2>
        </div>

        <span class="drift drift--c orb orb--pill" data-drift="0.26" aria-hidden="true"></span>
        <div class="shell method__stage">
          <div class="method__rail" role="tablist" aria-label="Étapes de la méthode">
            <button class="method__tab is-on" role="tab" aria-selected="true" aria-controls="mp-1" id="mt-1" data-method="0">
              <span>01</span> Stratégie
            </button>
            <button class="method__tab" role="tab" aria-selected="false" aria-controls="mp-2" id="mt-2" data-method="1">
              <span>02</span> Design
            </button>
            <button class="method__tab" role="tab" aria-selected="false" aria-controls="mp-3" id="mt-3" data-method="2">
              <span>03</span> Acquisition
            </button>
          </div>

          <div class="method__body">
            <div class="method__media" data-tilt aria-hidden="true">
              <img class="is-on" data-method-img="0" src="/assets/image-accueil5.png" alt="" />
              <img data-method-img="1" src="/assets/ACCEUIL-5v3.png" alt="" />
              <img data-method-img="2" src="/assets/Perspective-1024x683.png" alt="" />
            </div>

            <div class="method__panels">
              <article class="method__panel is-on" role="tabpanel" id="mp-1" aria-labelledby="mt-1">
                <h3>Définir la stratégie avant la maquette</h3>
                <p>
                  Objectifs, audience, message. On clarifie ce que le site doit produire avant de
                  dessiner quoi que ce soit. C'est ce qui sépare une vitrine d'un canal d'acquisition.
                </p>
                <ul class="chips"><li>Objectifs</li><li>Audience</li><li>Messages</li><li>Notoriété</li></ul>
              </article>
              <article class="method__panel" role="tabpanel" id="mp-2" aria-labelledby="mt-2" hidden>
                <h3>Design sur mesure, modifications illimitées</h3>
                <p>
                  Site vitrine, application web ou refonte : chaque projet est conçu spécifiquement,
                  sur des technologies récentes, jusqu'à ce que le résultat corresponde à vos attentes.
                </p>
                <ul class="chips"><li>Sur-mesure</li><li>Modifs illimitées*</li><li>Tech récente</li><li>Refonte</li></ul>
              </article>
              <article class="method__panel" role="tabpanel" id="mp-3" aria-labelledby="mt-3" hidden>
                <h3>Mettre en place l'acquisition</h3>
                <p>
                  SEO, SEA, SMO. Votre site doit être vu pour servir à quelque chose : on travaille
                  les leviers de visibilité dans les règles, avec des résultats mesurés.
                </p>
                <ul class="chips"><li>SEO</li><li>SEA</li><li>SMO</li><li>Visibilité Google</li></ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ CAS CLIENTS ============ -->
      <section class="cases" id="cas" aria-labelledby="cases-title">
        <div class="shell cases__head">
          <p class="eyebrow">Études de cas</p>
          <h2 id="cases-title" data-split>Ce que ça donne, concrètement.</h2>
          <a class="link-arrow" href="/live/simplement/case-studies">Toutes les études de cas <i>→</i></a>
        </div>
        <span class="drift drift--a orb orb--sphere" data-drift="0.22" aria-hidden="true"></span>
        <div class="cases__strip">
          <a class="case" data-cursor="Voir l'étude" href="/live/simplement/case-studies/sofranel">
            <div class="case__img" data-tilt><img src="/assets/sofranel-etude-de-cas-preview.jpg" alt="Étude de cas Sofranel" /></div>
            <div class="case__meta"><h3>Sofranel</h3><p>Industrie · refonte &amp; SEO technique</p></div>
          </a>
          <a class="case" data-cursor="Voir l'étude" href="/live/simplement/case-studies/motivart">
            <div class="case__img" data-tilt><img src="/assets/motiv-art-etude-de-cas.jpg" alt="Étude de cas Motiv'Art" /></div>
            <div class="case__meta"><h3>Motiv'Art</h3><p>Artisanat · site vitrine &amp; visibilité locale</p></div>
          </a>
          <a class="case" data-cursor="Voir l'étude" href="/live/simplement/case-studies/welcomeurope">
            <div class="case__img" data-tilt><img src="/assets/welcomeurope-etude-de-cas.jpg" alt="Étude de cas Welcome Europe" /></div>
            <div class="case__meta"><h3>Welcome Europe</h3><p>Services · refonte &amp; génération de leads</p></div>
          </a>
          <a class="case" data-cursor="Voir l'étude" href="/live/simplement/case-studies/frate-mate">
            <div class="case__img" data-tilt><img src="/assets/thermos-bambou-pack-2023.webp" alt="Étude de cas Frate Mate" /></div>
            <div class="case__meta"><h3>Frate Mate</h3><p>E-commerce · conversion &amp; Ads</p></div>
          </a>
        </div>
      </section>

      <!-- ============ ÉQUIPE ============ -->
      <section class="team" id="equipe" aria-labelledby="team-title">
        <span class="drift drift--d orb orb--sphere" data-drift="-0.2" aria-hidden="true"></span>
        <div class="shell team__grid">
          <div>
            <p class="eyebrow eyebrow--light">Simplement</p>
            <h2 id="team-title">Une équipe, pas une plateforme.</h2>
            <p>
              Designers, développeurs et marketeurs dans le même bureau à Marseille. Vous savez qui
              travaille sur votre projet, et vous pouvez l'appeler.
            </p>
            <div class="team__faces">
              <img src="/assets/Team1-r0qceqwinwkceitsup6hd27otmegbrx3bglsbim69s.jpg" alt="Membre de l'équipe Simplement" />
              <img src="/assets/team2-r0qcel9hiwcmgv1zrmqpy3mx9b691lapaoovfuujb4.jpg" alt="Membre de l'équipe Simplement" />
              <img src="/assets/team3-r0qcf34f4r12lgc1vcgmrh4ojmq83u9lp533k4420w.jpg" alt="Membre de l'équipe Simplement" />
              <span>+ l'équipe au complet</span>
            </div>
            <a class="btn btn--line" href="/live/simplement/a-propos">Faire connaissance</a>
          </div>
          <div class="team__media" data-tilt>
            <img src="/assets/agence-web-marseille-2.png" alt="Projets réalisés par l'équipe Simplement" />
          </div>
        </div>
      </section>

      <!-- ============ AVIS ============ -->
      <section class="reviews" id="avis" aria-labelledby="reviews-title">
        <div class="shell reviews__head">
          <p class="eyebrow">Les avis</p>
          <h2 id="reviews-title">55 avis Google. 4,8/5.</h2>
        </div>
        <span class="drift drift--b orb orb--hex" data-drift="-0.3" aria-hidden="true"></span>
        <div class="marquee" data-marquee>
          <div class="marquee__track">
            <blockquote><p>Jonathan et son équipe gèrent notre SEO, très bons résultats et très bonne communication, je recommande.</p><cite>Juste Moi</cite></blockquote>
            <blockquote><p>Merci à Jonathan pour ce service incroyablement rapide. À partir de maintenant je passe par vous pour mon site.</p><cite>Yohann Pejon</cite></blockquote>
            <blockquote><p>L'équipe est au top, toujours là à rendre service. Merci pour tous ces conseils marketing et les avancées web sur mon site.</p><cite>Corneliu Vorosan</cite></blockquote>
            <blockquote><p>Respect du délai et du budget, plein de conseils business. Je recommande leur expertise pour les lancements de projets.</p><cite>Emy Vaillancourt</cite></blockquote>
            <blockquote><p>Un excellent travail ! Nous avons fait appel à leur service pour améliorer notre site internet, nous sommes entièrement satisfaits.</p><cite>Micro Crèche Zicrèche</cite></blockquote>
            <blockquote><p>Deux sites créés, équipe réactive, flexible et à l'écoute. Tarifs compétitifs et SAV parfait.</p><cite>IRH by Act-On Group</cite></blockquote>
          </div>
        </div>
      </section>

      <!-- ============ FAQ ============ -->
      <section class="faq" id="faq" aria-labelledby="faq-title">
        <div class="shell faq__grid">
          <div>
            <p class="eyebrow">Questions fréquentes</p>
            <h2 id="faq-title">Vous ne trouvez pas votre réponse ?</h2>
            <p>On répond plus vite de vive voix. 30 minutes suffisent pour cadrer un projet.</p>
            <a class="btn btn--cta" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a>
          </div>
          <div class="accordion">
            <details open>
              <summary>Comment choisir une agence web à Marseille ?<i aria-hidden="true"></i></summary>
              <div>Regardez trois choses : l'expertise réelle de l'équipe (développement, design et référencement), les réalisations et retours clients, et la transparence sur le budget et les modalités. Une agence certifiée Google Partner est souvent un gage de sérieux.</div>
            </details>
            <details>
              <summary>Combien coûte la création d'un site internet ?<i aria-hidden="true"></i></summary>
              <div>Le tarif dépend de la complexité, des fonctionnalités et du CMS. On envoie un devis détaillé, généralement sous 24h, pour que vous ayez une idée claire des coûts avant de vous engager.</div>
            </details>
            <details>
              <summary>Qu'est-ce qu'un site vitrine ?<i aria-hidden="true"></i></summary>
              <div>Un site qui présente votre entreprise, vos services ou vos produits : la vitrine digitale de votre activité. C'est souvent le point de départ, avant l'e-commerce ou l'application métier.</div>
            </details>
            <details>
              <summary>Travaillez-vous en dehors de Marseille ?<i aria-hidden="true"></i></summary>
              <div>Oui. L'équipe est à Marseille, mais nous accompagnons des clients partout en France en remote, avec le même suivi.</div>
            </details>
          </div>
        </div>
      </section>

      <!-- ============ CTA FINAL ============ -->
      <section class="finale" id="contact-home" aria-labelledby="finale-title">
        <div class="finale__aura" aria-hidden="true"></div>
        <div class="shell finale__inner">
          <p class="eyebrow eyebrow--light">
            <span class="live" aria-hidden="true"></span>
            Réponse rapide · Devis sous 24h
          </p>
          <h2 id="finale-title" data-split>Votre prochain client<br />commence par une conversation.</h2>
          <p class="finale__lede">
            30 minutes pour clarifier vos objectifs, votre audience et les leviers à activer.
            Vous repartez avec une proposition claire, un planning et un devis.
          </p>
          <div class="finale__actions">
            <a class="btn btn--cta btn--lg" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a>
            <a class="btn btn--line btn--lg" href="tel:+33465845964">04 65 84 59 64</a>
          </div>
          <ul class="finale__proof">
            <li><b>4.8/5</b> Google · 55 avis</li>
            <li><b>+100</b> entreprises accompagnées</li>
            <li><b>Marseille</b> &amp; remote France</li>
          </ul>
        </div>
      </section>`;
