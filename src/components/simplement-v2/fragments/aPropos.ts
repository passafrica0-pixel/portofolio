// Corps de page « a-propos.html » — maquette v2, liens/assets réécrits.
export const HTML = `<section class="phero">
        <div class="phero__aura" aria-hidden="true"></div>
        <span class="sh sh--sphere sh--pale" data-chrome="0.2" style="left:auto;right:6%;top:16%;width:clamp(6rem,10vw,10rem)"></span>
        <span class="sh sh--pill" data-chrome="-0.28" style="left:auto;right:20%;top:58%;width:clamp(3rem,4.5vw,4.5rem)"></span>
        <div class="shell">
          <p class="eyebrow eyebrow--light">Marseille · Équipe</p>
          <h1 class="phero__title" data-split>Une équipe, <span class="dim">pas une plateforme.</span></h1>
          <p class="phero__lede">Chacun de nos membres apporte un savoir-faire unique pour des solutions web et marketing qui atteignent vos résultats. Pas juste une jolie vitrine.</p>
          <div class="phero__actions"><a class="btn btn--line btn--lg" href="#equipe">Rencontrer l'équipe</a> <a class="btn btn--cta btn--lg" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a></div>
        </div>
      </section>
      <div class="act-light">
        <section class="sect" aria-labelledby="story-title">
          <div class="shell story">
            <div>
              <h2 id="story-title">Une agence qui pratique ce qu'elle prêche.</h2>
              <p>
                Chez Simplement, un site sert à ramener des clients. On couple design sur mesure et acquisition
                (SEO, Ads), avec un accompagnement humain, depuis Marseille et pour toute la France.
              </p>
              <p>
                Peu de jargon, beaucoup de clarté : contact, proposition, livraison. Des preuves visibles
                (avis, certifications, cas clients) avant les promesses.
              </p>
            </div>
            <ul class="stats" id="counters" aria-label="Chiffres clés">
              <li><strong data-count="100" data-prefix="+">+100</strong><span>entreprises accompagnées</span></li>
              <li><strong data-count="1000" data-prefix="+">+1000</strong><span>projets livrés</span></li>
              <li><strong data-count="4.8" data-decimals="1">4,8</strong><span>sur Google · 55 avis</span></li>
              <li><strong data-count="4.9" data-decimals="1">4,9</strong><span>sur Malt · 33 avis</span></li>
            </ul>
          </div>
        </section>
        <section class="sect sect--soft" id="equipe" aria-labelledby="team-title">
          <span class="drift orb orb--sphere" data-drift="0.24" style="position:absolute;right:4%;top:6%" aria-hidden="true"></span>
          <div class="shell">
            <div class="sect__head">
              <p class="eyebrow">L'équipe</p>
              <h2 id="team-title">Des profils complémentaires.</h2>
              <p class="lede">Stratégie, design, tech, SEO, Ads et IA.</p>
            </div>
            <div class="people">
          <article class="person">
            <div class="person__photo" data-tilt><img src="/assets/Team1-r0qceqwinwkceitsup6hd27otmegbrx3bglsbim69s.jpg" alt="Hugo L, Consultant SEO / SEA" loading="lazy" /></div>
            <h3>Hugo L</h3><p>Consultant SEO / SEA</p>
          </article>
<article class="person">
            <div class="person__photo" data-tilt><img src="/assets/team2-r0qcel9hiwcmgv1zrmqpy3mx9b691lapaoovfuujb4.jpg" alt="Jonathan C, Directeur IA et Delivery" loading="lazy" /></div>
            <h3>Jonathan C</h3><p>Directeur IA &amp; Delivery</p>
          </article>
<article class="person">
            <div class="person__photo" data-tilt><img src="/assets/team3-r0qcf34f4r12lgc1vcgmrh4ojmq83u9lp533k4420w.jpg" alt="Edwin P, Directeur Commercial et Stratégie" loading="lazy" /></div>
            <h3>Edwin P</h3><p>Directeur Commercial &amp; Stratégie</p>
          </article>
<article class="person">
            <div class="person__photo person__photo--initials" data-tilt aria-hidden="true"><span>SP</span></div>
            <h3>Supriya P</h3><p>Webdesign UX / UI</p>
          </article>
<article class="person">
            <div class="person__photo person__photo--initials" data-tilt aria-hidden="true"><span>RM</span></div>
            <h3>Romane M</h3><p>Cheffe de projet web &amp; Responsable SEO</p>
          </article>
<article class="person">
            <div class="person__photo person__photo--initials" data-tilt aria-hidden="true"><span>GP</span></div>
            <h3>Gaetan P</h3><p>Développeur web full stack</p>
          </article>
<article class="person">
            <div class="person__photo person__photo--initials" data-tilt aria-hidden="true"><span>MD</span></div>
            <h3>Manon D</h3><p>Cheffe de projet web &amp; Responsable SEA</p>
          </article>
            </div>
          </div>
        </section>
        <section class="sect" aria-labelledby="beliefs-title">
          <div class="shell">
            <div class="sect__head"><h2 id="beliefs-title">Ce en quoi on croit.</h2></div>
            <div class="beliefs">
              <div><strong>Clarté avant jargon</strong><p>On explique les choix en langage business. Vous savez ce qu'on fait, pourquoi, et pour quel résultat.</p></div>
              <div><strong>Preuve avant promesse</strong><p>Avis, certifications, études de cas. Des livrables et des métriques.</p></div>
              <div><strong>Proximité humaine</strong><p>Une équipe joignable, réactive, ancrée à Marseille, avec un process cadré de bout en bout.</p></div>
            </div>
          </div>
        </section>
        <section class="sect sect--soft" aria-labelledby="jobs-title">
          <div class="shell">
            <div class="sect__head">
              <p class="eyebrow">Recrutement</p>
              <h2 id="jobs-title">Rejoindre l'équipe.</h2>
            </div>
            <div class="jobs">
              <a class="job" href="/live/simplement/contact"><strong>Chef(fe) de Projet Web</strong><span>CDI · Marseille</span><em>Postuler →</em></a>
              <a class="job" href="/live/simplement/contact"><strong>Candidature spontanée</strong><span>Simplement cherche toujours des personnes talentueuses.</span><em>Envoyer un CV →</em></a>
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
          <h2 id="finale-title" data-split>Parlons de votre projet.</h2>
          <p class="finale__lede">Un créneau de 30 minutes avec l'équipe, pour clarifier objectifs, audience et leviers.</p>
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
