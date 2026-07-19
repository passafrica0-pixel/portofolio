import type { Metadata } from "next";
import Link from "next/link";
import { BrandStrip } from "@/components/simplement/BrandStrip";
import { ContactMagnet } from "@/components/simplement/ContactMagnet";
import { Reveal } from "@/components/simplement/Reveal";
import { WorkGrid } from "@/components/simplement/WorkGrid";
import { worksQuotes } from "@/lib/simplement/data";

export const metadata: Metadata = {
  title: "Nos réalisations — Portfolio sites web | Simplement",
  description:
    "Découvrez les derniers projets réalisés par Simplement : sites vitrine, e-commerce, SEO et publicité. Portfolio agence web Marseille.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="cases-hero" aria-labelledby="works-title">
        <div className="cases-hero__bg" aria-hidden="true" />
        <div className="container cases-hero__inner">
          <p className="chip chip--dark">PORTFOLIO · +1000 PROJETS</p>
          <p className="brand-mark">
            Simplement<span>.</span>
          </p>
          <h1 id="works-title">Nos réalisations</h1>
          <p className="lede">
            Sites vitrine, e-commerce et plateformes pensés pour convertir. Découvrez une sélection de projets livrés
            pour des marques à Marseille et partout en France.
          </p>
          <div className="btn-row">
            <a className="btn btn--on-dark" href="#portfolio">
              Voir le portfolio
            </a>
            <Link className="btn btn--ghost-on-dark" href="/live/simplement/rendez-vous">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="container">
          <WorkGrid />
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="works-quotes-title">
        <div className="container">
          <h2 id="works-quotes-title">Ce que disent nos clients</h2>
          <p className="lede">Des projets livrés — et un suivi qui continue après la mise en ligne.</p>
          <div className="quote-row">
            {worksQuotes.map((quote, i) => (
              <Reveal key={quote.author} as="blockquote" className="quote-tile" delay={i === 1 ? 1 : i === 2 ? 2 : undefined}>
                <p>{quote.text}</p>
                <footer>
                  <strong>{quote.author}</strong>
                  {quote.context ? ` · ${quote.context}` : ""}
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactMagnet
        titleId="contact-works-title"
        chip="Votre projet · Prochaine réalisation"
        title="Un site qui ressemble à votre ambition."
        description="30 minutes pour cadrer objectifs, audience et leviers. On repart avec une proposition claire — souvent sous 24h."
        proofs={[
          { strong: "4.8/5", rest: " Google · 55 avis" },
          { strong: "+1000", rest: " projets livrés" },
          { strong: "Marseille", rest: " & remote France" },
        ]}
        secondary={{
          type: "link",
          href: "/live/simplement/case-studies",
          eyebrow: "Preuves chiffrées",
          title: "Voir les case studies",
          desc: "SEO, UX, Ads : les résultats avant / après.",
          cta: "Lire les cas →",
        }}
      />
    </>
  );
}
