import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/simplement/ContactForm";
import { Reveal } from "@/components/simplement/Reveal";
import { contactQuotes } from "@/lib/simplement/data";

export const metadata: Metadata = {
  title: "Contact — Simplement | Agence web Marseille",
  description: "Contactez Simplement, agence web à Marseille. Devis sous 24h. 04 65 84 59 64 · contact@simplement.me",
};

export default function ContactPage() {
  return (
    <>
      <section className="cases-hero" aria-labelledby="contact-title">
        <div className="cases-hero__bg" aria-hidden="true" />
        <div className="container cases-hero__inner">
          <p className="chip chip--dark">DEVIS SOUS 24H</p>
          <p className="brand-mark">
            Simplement<span>.</span>
          </p>
          <h1 id="contact-title">Contactez-nous</h1>
          <p className="lede">
            Une question, un projet, un audit ? Écrivez-nous — ou réservez directement un créneau de 30 minutes.
          </p>
          <div className="btn-row">
            <Link className="btn btn--on-dark" href="/live/simplement/rendez-vous">
              Prendre rendez-vous
            </Link>
            <a className="btn btn--ghost-on-dark" href="tel:+33465845964">
              04 65 84 59 64
            </a>
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingBlock: "clamp(2rem, 4vw, 3rem)" }}>
        <div className="container trust-row" aria-label="Engagements">
          <div className="trust-item">
            <strong>Conseils d’experts</strong>
            <p>Des professionnels du digital, des recommandations sur mesure.</p>
          </div>
          <div className="trust-item">
            <strong>Sans engagement</strong>
            <p>Liberté totale pour décider après l’échange.</p>
          </div>
          <div className="trust-item">
            <strong>Design satisfait ou remboursé</strong>
            <p>Avancez l’esprit tranquille sur la création.</p>
          </div>
        </div>
      </section>

      <section className="section" id="formulaire" aria-labelledby="form-title">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <h2 id="form-title" className="h-title">
              Simplement vous accompagne
            </h2>
            <p className="muted">
              Création, refonte, SEO, Ads, HubSpot, Shopify ou accompagnement IA. Réponse rapide — devis souvent sous
              24h.
            </p>

            <div className="contact-channels">
              <a className="channel" href="tel:+33465845964">
                <span className="channel__label">Téléphone</span>
                <strong>04 65 84 59 64</strong>
              </a>
              <a className="channel" href="mailto:contact@simplement.me">
                <span className="channel__label">Email</span>
                <strong>contact@simplement.me</strong>
              </a>
              <div className="channel channel--static">
                <span className="channel__label">Agence</span>
                <strong>Marseille · Remote France</strong>
              </div>
            </div>

            <div className="rating-widgets rating-widgets--light">
              <a
                className="rating-pill rating-pill--light"
                href="https://www.google.com/search?q=Simplement+agence+web+Marseille"
                rel="noopener"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/580b57fcd9996e24bc43c51f-1024x346.png" alt="Google" />
                <span>
                  <strong>4.8</strong> · 55 avis
                </span>
              </a>
              <a className="rating-pill rating-pill--light" href="https://www.malt.fr/" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo-malt-c-1024x304.png" alt="Malt" />
                <span>
                  <strong>4.9</strong> · 33 avis
                </span>
              </a>
            </div>

            <Link className="rdv-nudge" href="/live/simplement/rendez-vous">
              <span>Préférez un créneau précis ?</span>
              <strong>Réserver un rendez-vous →</strong>
            </Link>
          </aside>

          <div className="contact-panel">
            <h2 className="h-title">Envoyer un message</h2>
            <p className="muted" style={{ marginTop: 0, marginBottom: "var(--space-lg)" }}>
              Décrivez votre besoin — on vous répond avec une proposition claire.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="avis-title">
        <div className="container">
          <h2 id="avis-title">Les avis</h2>
          <p className="lede">Ce que nos clients disent de leur expérience avec nous.</p>
          <div className="quote-row">
            {contactQuotes.map((quote, i) => (
              <Reveal key={quote.author + (quote.context || "")} as="blockquote" className="quote-tile" delay={i === 1 ? 1 : i === 2 ? 2 : undefined}>
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
    </>
  );
}
