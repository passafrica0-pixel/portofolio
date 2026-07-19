import type { Metadata } from "next";
import Link from "next/link";
import { ContactMagnet } from "@/components/simplement/ContactMagnet";
import { Reveal } from "@/components/simplement/Reveal";
import { team } from "@/lib/simplement/data";

export const metadata: Metadata = {
  title: "À propos — L’équipe Simplement | Agence web Marseille",
  description:
    "Découvrez l’équipe Simplement à Marseille : web, SEO, Ads et IA. Des experts passionnés pour transformer votre site en machine à leads.",
};

export default function AProposPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/Perspective-1024x683.png" alt="" width={1200} height={800} />
          <div className="about-hero__veil" />
        </div>
        <div className="container about-hero__inner">
          <p className="chip chip--dark">MARSEILLE · ÉQUIPE</p>
          <p className="brand-mark">
            Simplement<span>.</span>
          </p>
          <h1 id="about-title">À propos</h1>
          <p className="lede">
            Chacun de nos membres apporte un savoir-faire unique pour offrir des solutions web et marketing qui vous
            aident à atteindre vos résultats — pas juste une jolie vitrine.
          </p>
          <div className="btn-row">
            <a className="btn btn--on-dark" href="#equipe">
              Rencontrer l’équipe
            </a>
            <Link className="btn btn--ghost-on-dark" href="/live/simplement/rendez-vous">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container about-story">
          <Reveal as="div" className="about-story__copy">
            <h2 id="story-title">Une agence qui pratique ce qu’elle prêche.</h2>
            <p>
              Chez Simplement, un site sert à ramener des clients. On couple design sur mesure et acquisition (SEO,
              Ads), avec un accompagnement humain — depuis Marseille, pour toute la France.
            </p>
            <p>
              Peu de jargon, beaucoup de clarté : contact → proposition → livraison. Des preuves visibles (avis,
              certifications, cas clients) avant les promesses creuses.
            </p>
          </Reveal>
          <Reveal as="div" delay={1}>
            <ul className="about-stats" aria-label="Chiffres clés">
              <li>
                <strong>+100</strong>
                <span>entreprises accompagnées</span>
              </li>
              <li>
                <strong>+1000</strong>
                <span>projets livrés</span>
              </li>
              <li>
                <strong>4.8/5</strong>
                <span>sur Google · 55 avis</span>
              </li>
              <li>
                <strong>4.9/5</strong>
                <span>sur Malt · 33 avis</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" id="equipe" aria-labelledby="team-title">
        <div className="container">
          <h2 id="team-title">L’équipe</h2>
          <p className="lede">Des profils complémentaires — stratégie, design, tech, SEO, Ads et IA.</p>

          <div className="team-grid">
            {team.map((person, i) => (
              <Reveal
                key={person.name}
                as="article"
                className="team-person"
                delay={i % 3 === 1 ? 1 : i % 3 === 2 ? 2 : undefined}
              >
                <div
                  className={`team-person__photo${person.initials ? " team-person__photo--initials" : ""}`}
                  aria-hidden={person.initials ? true : undefined}
                >
                  {person.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={person.photo} alt={person.photoAlt || person.name} width={400} height={400} />
                  ) : (
                    <span>{person.initials}</span>
                  )}
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="beliefs-title">
        <div className="container">
          <h2 id="beliefs-title">Ce en quoi on croit</h2>
          <div className="belief-list">
            <Reveal as="div" className="belief">
              <strong>Clarté avant jargon</strong>
              <p>
                On explique les choix en langage business. Vous savez ce qu’on fait, pourquoi, et pour quel résultat.
              </p>
            </Reveal>
            <Reveal as="div" className="belief" delay={1}>
              <strong>Preuve avant promesse</strong>
              <p>Avis, certifications, études de cas. Pas de blabla : des livrables et des métriques.</p>
            </Reveal>
            <Reveal as="div" className="belief" delay={2}>
              <strong>Proximité humaine</strong>
              <p>Une équipe joignable, réactive, ancrée à Marseille — et un process cadré de bout en bout.</p>
            </Reveal>
          </div>
          <div className="certs-logos" style={{ marginTop: "2.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/google-partner1.png" alt="Google Partner" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hubspot1.png" alt="HubSpot" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/lenkedin1.png" alt="LinkedIn" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/snapchat1.png" alt="Snapchat" height={42} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/Tiktok1.png" alt="TikTok" height={42} />
          </div>
        </div>
      </section>

      <section className="section section--soft" id="recrutement" aria-labelledby="jobs-title">
        <div className="container join-layout">
          <Reveal as="div">
            <h2 id="jobs-title">Rejoindre l’équipe</h2>
            <p className="lede" style={{ marginBottom: 0 }}>
              Rejoignez l’aventure et découvrez notre vision du design web et du marketing en ligne.
            </p>
          </Reveal>
          <Reveal as="div" className="job-panel" delay={1}>
            <div className="job-row">
              <div>
                <h3>Chef(fe) de Projet Web</h3>
                <p className="muted" style={{ margin: "0.25rem 0 0" }}>
                  CDI · Marseille
                </p>
              </div>
              <a
                className="btn btn--secondary"
                href="mailto:contact@simplement.me?subject=Candidature%20Chef%20de%20Projet%20Web"
              >
                Postuler
              </a>
            </div>
            <div className="job-row job-row--soft">
              <div>
                <h3>Candidature spontanée</h3>
                <p className="muted" style={{ margin: "0.25rem 0 0" }}>
                  Simplement est toujours à la recherche de personnes talentueuses.
                </p>
              </div>
              <a
                className="btn btn--ghost"
                href="mailto:contact@simplement.me?subject=Candidature%20spontanée"
              >
                Envoyer un CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactMagnet
        titleId="contact-about-title"
        chip="Échange humain · Devis sous 24h"
        title="Parlons de votre projet."
        description="Un créneau de 30 minutes avec l’équipe — pour clarifier objectifs, audience et leviers."
        proofs={[
          { strong: "04 65 84 59 64" },
          { strong: "contact@simplement.me" },
          { strong: "Marseille" },
        ]}
      />
    </>
  );
}
