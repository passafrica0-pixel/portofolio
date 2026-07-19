import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Link className="logo" href="/live/simplement">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/simplement-logo-agence-web-min-1-1024x223.png"
              alt="Simplement"
              width={150}
              height={33}
              style={{ height: 30, width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p>Agence web Marseille — sites pensés pour générer des leads.</p>
        </div>
        <div>
          <h3>Site internet</h3>
          <ul>
            <li>
              <a href="https://simplement.me/agence-web-marseille/">Création site</a>
            </li>
            <li>
              <a href="https://simplement.me/refonte-site-internet/">Refonte</a>
            </li>
            <li>
              <a href="https://simplement.me/maintenance-site-internet/">Maintenance</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Publicité en ligne</h3>
          <ul>
            <li>
              <a href="https://simplement.me/agence-google-ads/">Conseils Google Ads</a>
            </li>
            <li>
              <a href="https://simplement.me/agence-facebook-ads/">Conseils Facebook Ads</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Référencement naturel - SEO</h3>
          <ul>
            <li>
              <a href="https://simplement.me/agence-seo-marseille/">Conseils SEO</a>
            </li>
            <li>
              <a href="https://simplement.me/audit-referencement-naturel/">SEO Audit</a>
            </li>
          </ul>
          <h3 style={{ marginTop: "1.25rem" }}>Conseils / Consulting</h3>
          <ul>
            <li>
              <a href="https://simplement.me/agence-hubspot/">Hubspot</a>
            </li>
            <li>
              <a href="https://simplement.me/agence-emailing/">Email marketing</a>
            </li>
            <li>
              <a href="https://simplement.me/agence-shopify/">Shopify</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>En savoir plus</h3>
          <ul>
            <li>
              <Link href="/live/simplement/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/live/simplement/realisations">Réalisations</Link>
            </li>
            <li>
              <Link href="/live/simplement/case-studies">Études de cas</Link>
            </li>
            <li>
              <a href="https://simplement.me/blog/">Blog</a>
            </li>
            <li>
              <Link href="/live/simplement/contact">Contactez-nous</Link>
            </li>
            <li>
              <Link href="/live/simplement/rendez-vous">Prendre rendez-vous</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <nav aria-label="Mentions légales">
          <a href="https://simplement.me/conditions-generales-de-ventes/">CGV</a>
          <a href="https://simplement.me/mentions-legales-simplement/">Mentions légales</a>
          <a href="https://simplement.me/gestion-donnees-personnelles-rgpd/">
            Politique de confidentialité
          </a>
        </nav>
        <div className="footer-social">
          <a href="https://www.facebook.com/AgenceSimplement" rel="noopener" target="_blank">
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/simplement-agence-web-marseille"
            rel="noopener"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <p style={{ margin: 0 }}>© 2026 Tous droits réservés.</p>
      </div>
    </footer>
  );
}
