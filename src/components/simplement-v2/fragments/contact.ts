// Corps de page « contact.html » — maquette v2, liens/assets réécrits.
export const HTML = `<section class="phero">
        <div class="phero__aura" aria-hidden="true"></div>
        <span class="sh sh--sphere sh--pale" data-chrome="0.2" style="left:auto;right:6%;top:16%;width:clamp(6rem,10vw,10rem)"></span>
        <span class="sh sh--pill" data-chrome="-0.28" style="left:auto;right:20%;top:58%;width:clamp(3rem,4.5vw,4.5rem)"></span>
        <div class="shell">
          <p class="eyebrow eyebrow--light">Devis sous 24h</p>
          <h1 class="phero__title" data-split>Parlons de <span class="dim">votre projet.</span></h1>
          <p class="phero__lede">Une question, un projet, un audit ? Écrivez-nous, ou réservez directement un créneau de 30 minutes.</p>
          <div class="phero__actions"><a class="btn btn--cta btn--lg" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a> <a class="btn btn--line btn--lg" href="tel:+33465845964" data-copy="0465845964" data-cursor="Copier le numéro">04 65 84 59 64</a></div>
        </div>
      </section>
      <div class="act-light">
        <section class="sect" aria-label="Engagements">
          <div class="shell trio">
            <div><strong>Conseils d'experts</strong><p>Des professionnels du digital, des recommandations sur mesure.</p></div>
            <div><strong>Sans engagement</strong><p>Liberté totale pour décider après l'échange.</p></div>
            <div><strong>Design satisfait ou remboursé</strong><p>Avancez l'esprit tranquille sur la création.</p></div>
          </div>
        </section>
        <section class="sect sect--soft" id="formulaire" aria-labelledby="form-title">
          <div class="shell contact-grid">
            <aside>
              <h2 id="form-title">Simplement vous accompagne</h2>
              <p style="color:var(--text-muted)">Création, refonte, SEO, Ads, HubSpot, Shopify ou accompagnement IA. Réponse rapide, devis souvent sous 24h.</p>
              <div class="channels">
                <a class="channel" href="tel:+33465845964" data-copy="0465845964" data-cursor="Copier le numéro"><span>Téléphone</span><strong>04 65 84 59 64</strong></a>
                <a class="channel" href="mailto:contact@simplement.me" data-cursor="Écrire un e-mail"><span>Email</span><strong>contact@simplement.me</strong></a>
                <div class="channel"><span>Agence</span><strong>Marseille · Remote France</strong></div>
              </div>
              <a class="link-arrow" href="/live/simplement/rendez-vous">Préférez un créneau précis ? Réserver <i>→</i></a>
            </aside>
            <div class="panel">
              <h2>Envoyer un message</h2>
              <p>Décrivez votre besoin, on vous répond avec une proposition claire.</p>
              <form action="#" method="post" id="contact-form">
                <div class="f-row">
                  <div class="f"><label for="lastname">Nom *</label><input id="lastname" name="lastname" required autocomplete="family-name" /></div>
                  <div class="f"><label for="firstname">Prénom *</label><input id="firstname" name="firstname" required autocomplete="given-name" /></div>
                </div>
                <div class="f-row">
                  <div class="f"><label for="email">E-mail *</label><input id="email" name="email" type="email" required autocomplete="email" /></div>
                  <div class="f"><label for="phone">Téléphone</label><input id="phone" name="phone" type="tel" autocomplete="tel" /></div>
                </div>
                <div class="f"><label for="need">Votre projet *</label>
                  <select id="need" name="need" required>
                    <option value="">Choisir…</option><option>Création de site</option><option>Refonte</option>
                    <option>Maintenance</option><option>SEO</option><option>Google Ads / Meta Ads</option>
                    <option>HubSpot / email marketing</option><option>Shopify</option><option>Accompagnement IA</option><option>Autre</option>
                  </select>
                </div>
                <div class="f"><label for="message">Message *</label><textarea id="message" name="message" required placeholder="Objectifs, délai, budget indicatif…"></textarea></div>
                <button class="btn btn--cta" type="submit">Envoyer</button>
                <p class="form-note">En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de votre demande.</p>
              </form>
            </div>
          </div>
        </section>
        <section class="sect" aria-label="Avis clients">
          <div class="shell">
            <blockquote class="bigquote">
              « Jonathan et son équipe gèrent notre SEO. Très bons résultats et très bonne communication,
              je recommande. »
              <cite>Juste Moi · avis Google</cite>
            </blockquote>
          </div>
        </section>
      </div>`;
