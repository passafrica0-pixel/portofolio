import type { Metadata } from "next";
import Link from "next/link";
import { BrandStrip } from "@/components/simplement/BrandStrip";
import { CaseGrid } from "@/components/simplement/CaseGrid";
import { ContactMagnet } from "@/components/simplement/ContactMagnet";
import { Reveal } from "@/components/simplement/Reveal";

export const metadata: Metadata = {
  title: "Études de cas clients — Case Studies | Simplement",
  description:
    "Découvrez nos études de cas clients : SEO, refonte, Ads et UX. Résultats concrets pour Fraté Maté, Motivart, Welcomeurope, SOFRANEL.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="cases-hero" aria-labelledby="cases-title">
        <div className="cases-hero__bg" aria-hidden="true" />
        <div className="container cases-hero__inner">
          <p className="chip chip--dark">LES MARQUES · RÉSULTATS</p>
          <p className="brand-mark">
            Simplement<span>.</span>
          </p>
          <h1 id="cases-title">Nos études de cas clients</h1>
          <p className="lede">
            Nos expertises en référencement et en refonte généreront une hausse spectaculaire du trafic sur votre site
            web, et par conséquent vous aideront à augmenter vos ventes.
          </p>
          <div className="btn-row">
            <a className="btn btn--on-dark" href="#cases-grid">
              Voir les cas
            </a>
            <Link className="btn btn--ghost-on-dark" href="/live/simplement/rendez-vous">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section case-featured-section" aria-labelledby="featured-title">
        <div className="container">
          <Reveal as="article" className="case-featured">
            <div className="case-featured__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/welcomeurope-etude-de-cas-2.jpg"
                alt="Étude de cas Welcomeurope — optimisation UX"
                width={960}
                height={360}
              />
            </div>
            <div className="case-featured__body">
              <p className="eyebrow">Cas phare</p>
              <p className="case-featured__metric">
                <span>+300%</span>
                de leads en dix mois
              </p>
              <h2 id="featured-title">Welcomeurope — UX &amp; conversion</h2>
              <p>
                Nous avons redéfini l’expérience utilisateur de la plateforme Welcomeurope en optimisant la navigation,
                les appels à l’action et la présentation des informations. Des tests utilisateurs approfondis ont permis
                d’affiner le design en identifiant et corrigeant les points de friction, pour maximiser conversion et
                satisfaction.
              </p>
              <div className="case-tags">
                <span>UX</span>
                <span>Site</span>
                <span>Conversion</span>
              </div>
              <Link className="btn btn--primary" href="/live/simplement/case-studies/welcomeurope">
                Lire le cas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="cases-grid" aria-labelledby="grid-title">
        <div className="container">
          <CaseGrid />
        </div>
      </section>

      <ContactMagnet
        titleId="contact-cases-title"
        title="Votre prochain résultat commence ici."
        description="30 minutes pour clarifier objectifs, audience et leviers (site, SEO, Ads, IA). Pas de blabla : une proposition claire, un planning, un devis."
      />
    </>
  );
}
