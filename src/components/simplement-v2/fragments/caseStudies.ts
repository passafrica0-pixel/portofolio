// Corps de page « case-studies.html » — maquette v2, liens/assets réécrits.
export const HTML = `<section class="phero">
        <div class="phero__aura" aria-hidden="true"></div>
        <span class="sh sh--sphere sh--pale" data-chrome="0.2" style="left:auto;right:6%;top:16%;width:clamp(6rem,10vw,10rem)"></span>
        <span class="sh sh--pill" data-chrome="-0.28" style="left:auto;right:20%;top:58%;width:clamp(3rem,4.5vw,4.5rem)"></span>
        <div class="shell">
          <p class="eyebrow eyebrow--light">Les marques · Résultats</p>
          <h1 class="phero__title" data-split>Études <span class="dim">de cas.</span></h1>
          <p class="phero__lede">Refonte, référencement, acquisition : ce que ça change, chiffres à l'appui. Quatre histoires racontées du brief au résultat.</p>
          <div class="phero__actions"><a class="btn btn--line btn--lg" href="#liste">Voir les cas</a> <a class="btn btn--cta btn--lg" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a></div>
        </div>
      </section>
      <section class="logo-strip" aria-label="Ils nous font confiance">
        <div class="ticker">
          <div class="ticker__track">
            <img src="/assets/we.png" alt="Welcomeurope" />
            <img src="/assets/wtc.png" alt="World Trade Center Marseille Provence" />
            <img src="/assets/decathlon.png" alt="Decathlon" />
            <img src="/assets/2png.png" alt="Client Simplement" />
            <img src="/assets/Frame-copie.png" alt="Client Simplement" />
            <img src="/assets/we.png" alt="" aria-hidden="true" />
            <img src="/assets/wtc.png" alt="" aria-hidden="true" />
            <img src="/assets/decathlon.png" alt="" aria-hidden="true" />
            <img src="/assets/2png.png" alt="" aria-hidden="true" />
            <img src="/assets/Frame-copie.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>
      <div class="act-light">
        <section class="sect" aria-labelledby="featured-title">
          <span class="drift orb orb--sphere" data-drift="0.22" style="position:absolute;right:4%;top:10%" aria-hidden="true"></span>
          <div class="shell featured">
            <div data-tilt><div class="frame"><div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Welcomeurope</span></div><div class="frame__view"><img src="/assets/welcomeurope-etude-de-cas-2.jpg" alt="Étude de cas Welcomeurope — optimisation UX" loading="lazy" /></div></div></div>
            <div>
              <p class="eyebrow">Cas phare</p>
              <p class="featured__metric"><b data-count="300" data-prefix="+">+300</b><span>% de leads en dix mois</span></p>
              <h2 id="featured-title">Welcomeurope, UX &amp; conversion</h2>
              <p>
                Nous avons redéfini l'expérience utilisateur de la plateforme : navigation, appels à l'action,
                présentation de l'information. Des tests utilisateurs ont permis d'identifier puis de corriger
                les points de friction, pour maximiser conversion et satisfaction.
              </p>
              <a class="link-arrow" href="/live/simplement/case-studies/welcomeurope">Lire le cas <i>→</i></a>
            </div>
          </div>
        </section>
        <section class="sect sect--soft" id="liste" aria-labelledby="grid-title">
          <div class="shell">
            <div class="sect__head sect__head--split">
              <div>
                <p class="eyebrow">Portfolio de preuves</p>
                <h2 id="grid-title">Tous les cas.</h2>
              </div>
              <div class="filters" data-filter-group role="group" aria-label="Filtrer les études de cas">
                <button type="button" class="filter is-on" data-filter="all" aria-pressed="true">Tous</button>
                <button type="button" class="filter" data-filter="seo" aria-pressed="false">SEO</button>
                <button type="button" class="filter" data-filter="site" aria-pressed="false">Site</button>
                <button type="button" class="filter" data-filter="ads" aria-pressed="false">Ads</button>
              </div>
            </div>
            <div class="works">
          <a class="work" href="/live/simplement/case-studies/frate-mate" data-tags="seo site" data-cursor="Lire l'étude">
            <div data-tilt><div class="frame"><div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Fraté Maté</span></div><div class="frame__view"><img src="/assets/image-etude-de-cas-simplementv2-copie.jpg" alt="Étude de cas Fraté Maté" loading="lazy" /></div></div></div>
            <div class="work__body">
              <div class="work__tags"><span>SEO</span><span>E-commerce</span></div>
              <h3>Fraté Maté</h3>
              <p>Structure de site repensée, quick wins SEO et partenariats d'affiliation pour viser le top 3 du maté en France face aux grands acteurs du thé.</p>
            </div>
          </a>
<a class="work" href="/live/simplement/case-studies/motivart" data-tags="site ads" data-cursor="Lire l'étude">
            <div data-tilt><div class="frame"><div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Motivart</span></div><div class="frame__view"><img src="/assets/motiv-art-etude-de-cas.jpg" alt="Étude de cas Motivart" loading="lazy" /></div></div></div>
            <div class="work__body">
              <div class="work__tags"><span>Site</span><span>Ads</span></div>
              <h3>Motivart</h3>
              <p>Avatars clients redessinés par enquêtes, storytelling des collections, refonte orientée conversion et optimisation Ads / e-mail.</p>
            </div>
          </a>
<a class="work" href="/live/simplement/case-studies/welcomeurope" data-tags="site" data-cursor="Lire l'étude">
            <div data-tilt><div class="frame"><div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Welcomeurope</span></div><div class="frame__view"><img src="/assets/welcomeurope-etude-de-cas.jpg" alt="Étude de cas Welcomeurope" loading="lazy" /></div></div></div>
            <div class="work__body">
              <div class="work__tags"><span>UX</span><span>Refonte</span></div>
              <h3>Welcomeurope</h3>
              <p>Refonte complète de l'expérience : navigation, appels à l'action et présentation de l'information, affinés par tests utilisateurs.</p>
            </div>
          </a>
<a class="work" href="/live/simplement/case-studies/sofranel" data-tags="site" data-cursor="Lire l'étude">
            <div data-tilt><div class="frame"><div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i><span>Sofranel</span></div><div class="frame__view"><img src="/assets/sofranel-etude-de-cas-preview.jpg" alt="Étude de cas Sofranel" loading="lazy" /></div></div></div>
            <div class="work__body">
              <div class="work__tags"><span>Site</span><span>B2B</span></div>
              <h3>Sofranel</h3>
              <p>Une plateforme moderne qui traduit 65 ans d'expertise en contrôle non destructif et met en avant les technologies différenciantes.</p>
            </div>
          </a>
            </div>
          </div>
        </section>
      </div>
      <section class="finale" id="contact-home" aria-labelledby="finale-title">
        <div class="finale__aura" aria-hidden="true"></div>
        <div class="shell finale__inner">
          <p class="eyebrow eyebrow--light">
            <span class="live" aria-hidden="true"></span>
            Réponse rapide · Devis sous 24h
          </p>
          <h2 id="finale-title" data-split>Votre prochain résultat<br />commence ici.</h2>
          <p class="finale__lede">30 minutes pour clarifier objectifs, audience et leviers. Vous repartez avec une proposition claire, un planning et un devis.</p>
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
