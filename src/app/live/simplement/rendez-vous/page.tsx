import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/simplement/Reveal";
import { RdvWizard } from "@/components/simplement/RdvWizard";
import { rdvQuotes } from "@/lib/simplement/data";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Simplement | Agence web Marseille",
  description:
    "Réservez 30 minutes avec Simplement. Cadrage clair, proposition et devis souvent sous 24h. Agence web Marseille.",
};

export default function RendezVousPage() {
  return (
    <>
      <section className="cases-hero rdv-hero" aria-labelledby="rdv-title">
        <div className="cases-hero__bg" aria-hidden="true" />
        <div className="container cases-hero__inner">
          <p className="chip chip--dark">
            <span
              className="pulse"
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#5bff9a",
                marginRight: "0.45rem",
                verticalAlign: "middle",
              }}
            />
            30 MIN · VISIO OU TÉLÉPHONE
          </p>
          <p className="brand-mark">
            Simplement<span>.</span>
          </p>
          <h1 id="rdv-title">Prendre rendez-vous</h1>
          <p className="lede">
            Un créneau pour clarifier objectifs, audience et leviers. Pas de blabla : une proposition claire, un
            planning, un devis — souvent sous 24h.
          </p>
        </div>
      </section>

      <section className="section" id="booking" aria-labelledby="booking-title">
        <div className="container rdv-layout">
          <Reveal as="div" className="rdv-expect">
            <h2 id="booking-title" className="h-title">
              Ce qui se passe ensuite
            </h2>
            <ol className="rdv-steps">
              <li>
                <strong>Vous choisissez un créneau</strong>
                <span>Visio ou téléphone, 30 minutes.</span>
              </li>
              <li>
                <strong>On prépare le cadrage</strong>
                <span>Besoin, secteur, contraintes — pour arriver prêts.</span>
              </li>
              <li>
                <strong>Vous repartez avec une suite claire</strong>
                <span>Proposition, planning et devis sous 24h en général.</span>
              </li>
            </ol>
            <div className="rdv-expect__alt">
              <p className="muted" style={{ margin: "0 0 0.75rem" }}>
                Vous préférez écrire ou appeler ?
              </p>
              <div className="btn-row">
                <Link className="btn btn--ghost" href="/live/simplement/contact">
                  Formulaire contact
                </Link>
                <a className="btn btn--ghost" href="tel:+33465845964">
                  04 65 84 59 64
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={1}>
            <RdvWizard />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="proof-rdv-title">
        <div className="container">
          <h2 id="proof-rdv-title">Ils ont commencé par un appel</h2>
          <div className="quote-row">
            {rdvQuotes.map((quote, i) => (
              <Reveal key={quote.text} as="blockquote" className="quote-tile" delay={i === 1 ? 1 : undefined}>
                <p>{quote.text}</p>
                <footer>
                  <strong>{quote.author}</strong>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
