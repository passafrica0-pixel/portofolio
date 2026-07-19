import Link from "next/link";
import { ContactMagnet } from "@/components/simplement/ContactMagnet";
import {
  caseDetails,
  type CaseDetail,
} from "@/lib/simplement/case-details";
import { SIMPLEMENT_BASE } from "@/lib/simplement/paths";

export function CaseDetailView({ detail }: { detail: CaseDetail }) {
  const others = caseDetails.filter((c) => c.slug !== detail.slug).slice(0, 3);

  return (
    <>
      <section className="case-detail-hero">
        <div className="case-detail-hero__bg" aria-hidden="true" />
        <div className="container case-detail-hero__inner">
          <Link className="case-detail-hero__back" href={`${SIMPLEMENT_BASE}/case-studies`}>
            ← Toutes les études de cas
          </Link>
          <div className="case-tags">
            {detail.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h1>{detail.title}</h1>
          <p className="lede">{detail.lede}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="case-brief">
            <article className="case-brief__card">
              <h2>L’histoire</h2>
              <p>{detail.story}</p>
            </article>
            <article className="case-brief__card">
              <h2>L’objectif</h2>
              <p>{detail.objective}</p>
            </article>
            <article className="case-brief__card">
              <h2>Challenge</h2>
              <ul>
                {detail.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          </div>

          {detail.metric ? (
            <div className="case-metric-band">
              <strong>{detail.metric.value}</strong>
              <span>{detail.metric.label}</span>
            </div>
          ) : null}
        </div>
      </section>

      {detail.beforeAfter ? (
        <section className="section section--soft">
          <div className="container">
            <p className="eyebrow">Preuve SEO</p>
            <h2>Avant / Après</h2>
            <div className="case-aa" style={{ marginTop: "1.25rem" }}>
              <div className="case-aa__panel">
                <div className="case-aa__label">Avant</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={detail.beforeAfter.before}
                  alt={detail.beforeAfter.beforeAlt}
                  width={1024}
                  height={290}
                />
              </div>
              <div className="case-aa__panel">
                <div className="case-aa__label">Après</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={detail.beforeAfter.after}
                  alt={detail.beforeAfter.afterAlt}
                  width={1024}
                  height={283}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {detail.galleryWide?.length || detail.gallery?.length ? (
        <section className={`section${detail.beforeAfter ? "" : " section--soft"}`}>
          <div className="container">
            {detail.galleryEyebrow ? (
              <p className="eyebrow">{detail.galleryEyebrow}</p>
            ) : null}
            {detail.galleryTitle ? <h2>{detail.galleryTitle}</h2> : null}
            {detail.galleryWide?.length ? (
              <div
                className="case-gallery case-gallery--wide"
                style={{ marginTop: "1.25rem" }}
              >
                {detail.galleryWide.map((img) => (
                  <figure key={img.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} width={1600} height={900} />
                  </figure>
                ))}
              </div>
            ) : null}
            {detail.gallery?.length ? (
              <div
                className={detail.galleryClass || "case-gallery"}
                style={{ marginTop: detail.galleryWide?.length ? "0.85rem" : "1.25rem" }}
              >
                {detail.gallery.map((img) => (
                  <figure key={img.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width || 960}
                      height={img.height || 640}
                    />
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gap: "2rem", maxWidth: "52rem" }}
        >
          <div>
            <p className="eyebrow">Méthode</p>
            <h2>Solutions apportées par Simplement</h2>
            {detail.methodIntro ? (
              <p className="muted" style={{ margin: "0.65rem 0 0" }}>
                {detail.methodIntro}
              </p>
            ) : null}
          </div>
          <div className="case-steps">
            {detail.steps.map((step) => (
              <article className="case-step" key={step.title}>
                <span className="case-step__num" aria-hidden="true" />
                <div>
                  <h3>{step.title}</h3>
                  {step.body ? <p>{step.body}</p> : null}
                  {step.bullets?.length ? (
                    <ul>
                      {step.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Continuer</p>
          <h2>Autres études de cas</h2>
          <div className="case-nav-more" style={{ marginTop: "1.25rem" }}>
            {others.map((c) => (
              <Link key={c.slug} href={`${SIMPLEMENT_BASE}/case-studies/${c.slug}`}>
                <strong>{c.navLabel}</strong>
                <span>{c.navHint}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactMagnet
        titleId={`cta-${detail.slug}`}
        title={detail.ctaTitle}
        description={detail.ctaDescription}
      />
    </>
  );
}
