/* Chrome partagé v2 (rideau, curseur, dock, drawer, footer, cookie).
   Extrait des maquettes, liens réécrits vers les routes Next. */
export const CHROME_TOP = `<div class="curtain" id="curtain">
      <p class="curtain__mark">Simplement<i>.</i></p>
      <div class="curtain__bar" aria-hidden="true"><span></span></div>
    </div>
    <div class="cursor" id="cursor" aria-hidden="true"><b></b><em></em><i></i></div>

    <a class="skip" href="#main">Aller au contenu</a>
    <div class="progress" id="progress" aria-hidden="true"><i></i></div>

    <!-- ============ NAV ============ -->
    <header class="dock" id="dock">
      <a class="dock__logo" href="/live/simplement" aria-label="Simplement — accueil">
        <img src="/assets/simplement-logo-agence-web-min-1-1024x223.png" alt="Simplement" width="150" height="33" />
      </a>

      <nav class="dock__nav" aria-label="Principale">
        <div class="dock__item" data-mega>
          <button type="button" class="dock__link" aria-haspopup="true" aria-expanded="false">
            Expertise
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>
          </button>
          <div class="mega" role="menu">
            <div class="mega__col">
              <h5>Site internet</h5>
              <a href="https://simplement.me/agence-web-marseille/">Création de site</a>
              <a href="https://simplement.me/refonte-site-internet/">Refonte</a>
              <a href="https://simplement.me/maintenance-site-internet/">Maintenance</a>
              <a class="mega__more" href="/live/simplement/realisations">Voir le portfolio <i>→</i></a>
            </div>
            <div class="mega__col">
              <h5>Référencement — SEO</h5>
              <a href="https://simplement.me/agence-seo-marseille/">Campagne SEO</a>
              <a href="https://simplement.me/audit-referencement-naturel/">Audit SEO</a>
              <a href="https://simplement.me/agence-seo-marseille/">Netlinking</a>
              <a class="mega__more" href="https://simplement.me/etude-de-cas-seo/">Nos avant/après <i>→</i></a>
            </div>
            <div class="mega__col">
              <h5>Publicité en ligne</h5>
              <a href="https://simplement.me/agence-google-ads/">Google Ads</a>
              <a href="https://simplement.me/agence-meta-ads/">Meta Ads</a>
              <h5 class="mega__h5--gap">Conseil</h5>
              <a href="https://simplement.me/agence-hubspot/">HubSpot</a>
              <a href="https://simplement.me/agence-emailing/">Email marketing</a>
            </div>
            <div class="mega__col mega__col--feature">
              <h5>Accompagnement IA</h5>
              <a href="https://simplement.me/ai-audit/">Audit IA</a>
              <a href="#">Automatisation IA</a>
              <p class="mega__pitch">L'IA quand elle fait gagner du temps. Pas pour la brochure.</p>
            </div>
          </div>
        </div>
        <a class="dock__link" href="/live/simplement/case-studies">Case Studies</a>
        <a class="dock__link" href="/live/simplement/realisations">Réalisations</a>
        <a class="dock__link" href="/live/simplement/a-propos">À propos</a>
        <a class="dock__link" href="/live/simplement/contact">Contact</a>
      </nav>

      <a class="btn btn--cta dock__cta" href="/live/simplement/rendez-vous">Prendre rendez-vous</a>

      <button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="drawer">
        <span></span><span></span>
        <em class="sr-only">Menu</em>
      </button>
    </header>

    <div class="drawer" id="drawer" hidden>
      <nav aria-label="Mobile">
        <a href="/live/simplement/realisations">Réalisations</a>
        <a href="/live/simplement/case-studies">Case Studies</a>
        <a href="/live/simplement/a-propos">À propos</a>
        <a href="/live/simplement/contact">Contact</a>
        <a class="btn btn--cta" href="/live/simplement/rendez-vous" data-elastic><i class="ico ico--in" aria-hidden="true">→</i>Prendre rendez-vous<i class="ico ico--out" aria-hidden="true">→</i></a>
        <a class="drawer__tel" href="tel:+33465845964">04 65 84 59 64</a>
      </nav>
    </div>`;

export const CHROME_BOTTOM = `<!-- ============ FOOTER ============ -->
    <footer class="foot">
      <div class="shell foot__grid">
        <div class="foot__brand">
          <img src="/assets/simplement-logo-agence-web-min-1-1024x223.png" alt="Simplement" width="150" height="33" />
          <p>Agence web à Marseille — des sites pensés pour générer des leads.</p>
          <a class="foot__tel" href="tel:+33465845964">04 65 84 59 64</a>
        </div>
        <div>
          <h3>Site internet</h3>
          <ul>
            <li><a href="https://simplement.me/agence-web-marseille/">Création de site</a></li>
            <li><a href="https://simplement.me/refonte-site-internet/">Refonte</a></li>
            <li><a href="https://simplement.me/maintenance-site-internet/">Maintenance</a></li>
          </ul>
        </div>
        <div>
          <h3>Acquisition</h3>
          <ul>
            <li><a href="https://simplement.me/agence-seo-marseille/">Conseils SEO</a></li>
            <li><a href="https://simplement.me/audit-referencement-naturel/">Audit SEO</a></li>
            <li><a href="https://simplement.me/agence-google-ads/">Google Ads</a></li>
            <li><a href="https://simplement.me/agence-facebook-ads/">Meta Ads</a></li>
          </ul>
        </div>
        <div>
          <h3>Conseil</h3>
          <ul>
            <li><a href="https://simplement.me/agence-hubspot/">HubSpot</a></li>
            <li><a href="https://simplement.me/agence-emailing/">Email marketing</a></li>
            <li><a href="https://simplement.me/agence-shopify/">Shopify</a></li>
            <li><a href="https://simplement.me/ai-audit/">Audit IA</a></li>
          </ul>
        </div>
        <div>
          <h3>En savoir plus</h3>
          <ul>
            <li><a href="/live/simplement/a-propos">À propos</a></li>
            <li><a href="/live/simplement/realisations">Réalisations</a></li>
            <li><a href="/live/simplement/case-studies">Études de cas</a></li>
            <li><a href="https://simplement.me/blog/">Blog</a></li>
            <li><a href="/live/simplement/rendez-vous">Prendre rendez-vous</a></li>
          </ul>
        </div>
      </div>
      <div class="shell foot__bottom">
        <nav aria-label="Mentions légales">
          <a href="https://simplement.me/conditions-generales-de-ventes/">CGV</a>
          <a href="https://simplement.me/mentions-legales-simplement/">Mentions légales</a>
          <a href="https://simplement.me/gestion-donnees-personnelles-rgpd/">Confidentialité</a>
        </nav>
        <div>
          <a href="https://www.facebook.com/AgenceSimplement" rel="noopener" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/company/simplement-agence-web-marseille" rel="noopener" target="_blank">LinkedIn</a>
        </div>
        <p>© 2026 Simplement. Tous droits réservés.</p>
      </div>
    </footer>

    <aside class="cookie" id="cookie" role="dialog" aria-label="Cookies" hidden>
      <p><b>Cookies à volonté</b>. On mesure l'usage du site pour l'améliorer.</p>
      <div>
        <button type="button" class="btn btn--cta" id="cookie-ok">Miaam les cookies !</button>
        <a class="btn btn--line" href="https://simplement.me/gestion-donnees-personnelles-rgpd/">En savoir plus</a>
      </div>
    </aside>`;
