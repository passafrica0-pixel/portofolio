import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/simplement/Accordion";
import { ContactMagnet } from "@/components/simplement/ContactMagnet";
import { HeroTalk } from "@/components/simplement/HeroTalk";
import { JourneySteps } from "@/components/simplement/JourneySteps";
import { MethodWow } from "@/components/simplement/MethodWow";
import { Reveal } from "@/components/simplement/Reveal";
import { StackQuotes } from "@/components/simplement/StackQuotes";
import {
  chooseAgencyAccordion,
  faqAccordion,
  homeTeamPhotos,
  reviews,
} from "@/lib/simplement/data";

export const metadata: Metadata = {
  title: "Agence Web Marseille – Sites pensés pour générer des leads | Simplement",
  description:
    "Découvrez notre agence web à Marseille, spécialiste en création de site internet performant. Solutions sur-mesure pour un site web et un référencement optimisé.",
};

export default function HomePage() {
  const reviewLoop = [...reviews, ...reviews];

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/agence-web-marseille-2.png" alt="" width={1600} height={900} />
          <div className="hero__veil" />
        </div>
        <div className="hero__inner">
          <div>
            <p className="chip chip--dark">Devis sous 24h</p>
            <p className="brand-mark">
              Simplement<span>.</span>
            </p>
            <h1>Agence web marseille : Création de site internet sur mesure</h1>
            <p className="lede">
              Découvrez notre agence web à Marseille, spécialiste en création de site internet performant. En tant
              qu’agence web Marseille reconnue, nous vous proposons des solutions sur-mesure pour un site web et un{" "}
              <a href="https://simplement.me/agence-seo-marseille/" style={{ color: "#9ec2ff" }}>
                référencement
              </a>{" "}
              optimisé. Faites le choix d’une agence dédiée à la réussite de votre projet digital.
            </p>
            <div className="rating-widgets">
              <a
                className="rating-pill"
                href="https://www.google.com/search?q=Simplement+agence+web+Marseille"
                rel="noopener"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/580b57fcd9996e24bc43c51f-1024x346.png" alt="Google" />
                <span>
                  <strong>4.8</strong> · 55 avis
                </span>
              </a>
              <a className="rating-pill" href="https://www.malt.fr/" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo-malt-c-1024x304.png" alt="Malt" />
                <span>
                  <strong>4.9</strong> · 33 avis
                </span>
              </a>
            </div>
            <div className="btn-row">
              <Link className="btn btn--on-dark" href="/live/simplement/rendez-vous">
                Prendre rendez-vous
              </Link>
              <a className="btn btn--ghost-on-dark" href="tel:+33465845964">
                04 65 84 59 64
              </a>
            </div>
          </div>
          <HeroTalk />
        </div>
      </section>

      <section className="section" style={{ paddingBlock: 0 }}>
        <div className="container why-band">
          <Reveal as="h2">+ de 100 entreprises ont déjà choisi Simplement</Reveal>
          <Reveal delay={1} as="p">
            <a href="#pourquoi">Découvrez pourquoi →</a>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="incontournables">
        <div className="container">
          <p className="eyebrow">Les critères de réussite d’un projet web</p>
          <h2>Les incontournables d’un site performant</h2>
          <p className="lede">
            Fort de notre expérience auprès de centaines de clients, voici les éléments essentiels que doit posséder
            votre site pour générer des résultats concrets et rentables.
          </p>
          <StackQuotes />
          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link className="btn btn--primary" href="/live/simplement/rendez-vous">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <section className="team" id="equipe">
        <div className="team__media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/Perspective-1024x683.png" alt="" width={1200} height={800} />
          <div className="team__veil" />
        </div>
        <div className="container team__content">
          <p className="eyebrow">Simplement</p>
          <h2>Une équipe passionnée et à votre écoute</h2>
          <div className="team-photos">
            {homeTeamPhotos.map((photo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={photo.src} src={photo.src} alt={photo.alt} width={72} height={72} />
            ))}
          </div>
          <p>
            Derrière chaque projet réussi, il y a une équipe soudée et dynamique. Notre force réside dans la diversité
            de nos talents : designers créatifs, développeurs rigoureux, marketeurs stratégiques, et bien plus encore.
          </p>
          <p>
            Notre équipe associe stratégie, créativité et technique pour donner vie à vos projets, avec des experts en
            gestion, marketing, design et développement.
          </p>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn--on-dark" href="/live/simplement/rendez-vous">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="pourquoi">
        <div className="container">
          <p className="eyebrow">Pourquoi notre agence web ?</p>
          <h2>Ce qui fait la différence</h2>
          <div className="metrics">
            <Reveal as="article" className="metric">
              <div className="label">Expérience</div>
              <strong>+1000</strong>
              <p>
                Projets réalisés. Notre expertise repose sur une solide expérience dans la création de solutions
                digitales pour des entreprises de tous secteurs.
              </p>
              <a href="https://simplement.me/realisations/">Notre portfolio →</a>
            </Reveal>
            <Reveal as="article" className="metric" delay={1}>
              <div className="label">Conseils inclus</div>
              <strong>Sur mesure</strong>
              <p>
                Accompagnement : nous vous guidons avec des recommandations claires et adaptées à vos objectifs. Chaque
                détail est pensé pour optimiser les performances.
              </p>
              <a href="https://simplement.me/realisations/">Notre portfolio →</a>
            </Reveal>
            <Reveal as="article" className="metric" delay={2}>
              <div className="label">Modifications illimitées</div>
              <strong>Satisfaction</strong>
              <p>
                Nous proposons des modifications illimitées dans le cadre défini ensemble, afin de garantir un résultat
                parfaitement aligné avec vos attentes.
              </p>
              <a href="https://simplement.me/realisations/">Notre portfolio →</a>
            </Reveal>
          </div>
          <div className="certs-logos" aria-label="Certifications">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/google-partner1.png" alt="Certification Google Partner" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/snapchat1.png" alt="Certification Snapchat Ads" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hubspot1.png" alt="Certification HubSpot" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/Tiktok1.png" alt="Certification TikTok Ads" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/lenkedin1.png" alt="Certification LinkedIn Ads" height={42} />
          </div>
        </div>
      </section>

      <section className="section section--soft" id="process">
        <div className="container">
          <p className="eyebrow">Comment ça marche ?</p>
          <h2>Quatre étapes claires</h2>
          <JourneySteps />
          <div className="btn-row" style={{ marginTop: "2.5rem" }}>
            <Link className="btn btn--primary" href="/live/simplement/rendez-vous">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <MethodWow />

      <section className="section section--soft" id="choisir">
        <div className="container">
          <p className="eyebrow">Guide</p>
          <h2>Comment choisir la meilleure agence web à Marseille ?</h2>
          <Accordion items={chooseAgencyAccordion} defaultOpen={0} />
        </div>
      </section>

      <section className="section" id="avis">
        <div className="container">
          <p className="eyebrow">Les avis</p>
          <h2>Découvrez ce que nos clients disent de nous !</h2>
        </div>
        <div className="reviews-stage">
          <div className="reviews-track">
            {reviewLoop.map((rev, i) => (
              <article key={`${rev.author}-${i}`} className="rev">
                <div className="stars">★★★★★</div>
                <blockquote>{rev.text}</blockquote>
                <cite>{rev.author}</cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="faq">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Vous ne trouvez pas la réponse que vous cherchez ?</h2>
            <Link className="btn btn--primary" href="/live/simplement/rendez-vous" style={{ marginTop: "1rem" }}>
              Prendre rendez-vous
            </Link>
          </div>
          <Accordion items={faqAccordion} defaultOpen={0} />
        </div>
      </section>

      <ContactMagnet
        titleId="contact-home-title"
        title="Votre prochain lead commence par une conversation."
        description="30 minutes pour clarifier objectifs, audience et leviers (site, SEO, Ads, IA). Pas de blabla : une proposition claire, un planning, un devis."
      />
    </>
  );
}
