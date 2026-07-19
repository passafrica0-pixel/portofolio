import Link from "next/link";

type Proof = { strong: string; rest?: string };

type Props = {
  titleId?: string;
  title: string;
  chip?: string;
  description: string;
  proofs?: Proof[];
  primaryHref?: string;
  primaryTitle?: string;
  primaryDesc?: string;
  primaryCta?: string;
  secondary?:
    | { type: "phone" }
    | { type: "link"; href: string; eyebrow: string; title: string; desc: string; cta: string };
};

export function ContactMagnet({
  titleId = "contact-magnet-title",
  title,
  chip = "Réponse rapide · Devis sous 24h",
  description,
  proofs = [
    { strong: "4.8/5", rest: " Google · 55 avis" },
    { strong: "+100", rest: " entreprises accompagnées" },
    { strong: "Marseille", rest: " & remote France" },
  ],
  primaryHref = "/live/simplement/rendez-vous",
  primaryTitle = "Prendre rendez-vous",
  primaryDesc = "Choisissez un créneau — on prépare le cadrage avant l’appel.",
  primaryCta = "Réserver maintenant →",
  secondary = { type: "phone" },
}: Props) {
  return (
    <section className="contact-magnet" aria-labelledby={titleId}>
      <div className="contact-magnet__glow" aria-hidden="true" />
      <div className="container contact-magnet__grid">
        <div className="contact-magnet__copy">
          <p className="chip chip--dark contact-magnet__live">
            <span className="pulse" aria-hidden="true" />
            {chip}
          </p>
          <h2 id={titleId}>{title}</h2>
          <p>{description}</p>
          <ul className="contact-magnet__proof">
            {proofs.map((p) => (
              <li key={p.strong + (p.rest || "")}>
                <strong>{p.strong}</strong>
                {p.rest}
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-magnet__actions">
          <Link className="contact-card contact-card--primary" href={primaryHref}>
            <span className="contact-card__eyebrow">Le plus simple</span>
            <strong>{primaryTitle}</strong>
            <span className="contact-card__desc">{primaryDesc}</span>
            <span className="contact-card__cta">{primaryCta}</span>
          </Link>
          {secondary.type === "phone" ? (
            <a className="contact-card" href="tel:+33465845964">
              <span className="contact-card__eyebrow">Vous préférez parler</span>
              <strong>04 65 84 59 64</strong>
              <span className="contact-card__desc">Un échange direct avec l’équipe Simplement.</span>
              <span className="contact-card__cta contact-card__cta--call">
                <span className="call-ring" aria-hidden="true" />
                Appeler maintenant
              </span>
            </a>
          ) : (
            <Link className="contact-card" href={secondary.href}>
              <span className="contact-card__eyebrow">{secondary.eyebrow}</span>
              <strong>{secondary.title}</strong>
              <span className="contact-card__desc">{secondary.desc}</span>
              <span className="contact-card__cta">{secondary.cta}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
