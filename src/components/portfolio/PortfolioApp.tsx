"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import {
  dossierProjects,
  liveDemos,
  profile,
  projects,
} from "@/lib/portfolio/projects";
import { brandLogos, motifMarkup } from "@/lib/portfolio/brands";
import type { Project } from "@/lib/portfolio/types";

function ProjectList({
  items,
  activeId,
  onSelect,
}: {
  items: Project[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="project-list">
      {items.map((p, i) => (
        <li key={p.id}>
          <button
            type="button"
            data-id={p.id}
            className={activeId === p.id ? "is-active" : undefined}
            onClick={() => onSelect(p.id)}
          >
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="proj-main">
              <span className="proj-title">{p.title}</span>
              {p.live ? <span className="live-pill">Live</span> : null}
            </span>
            <span className="meta">{p.live ? "" : p.badge}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function PortfolioApp() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState("00");
  const [navCurrent, setNavCurrent] = useState("hero");

  const active = useMemo(
    () => projects.find((p) => p.id === activeId) ?? null,
    [activeId],
  );

  const openProject = useCallback((id: string) => {
    setActiveId(id);
    setOpen(true);
    document.body.classList.add("is-stage-open");
  }, []);

  const closeProject = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("is-stage-open");
    window.setTimeout(() => setActiveId(null), 450);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeProject]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = document.getElementById("visual-frame");

    const onScroll = () => {
      if (document.body.classList.contains("is-stage-open")) return;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = window.scrollY / max;
      setScrollPct(String(Math.round(progress * 100)).padStart(2, "0"));
      if (frame && !reduced) {
        frame.style.setProperty("--scroll-y", `${Math.min(progress, 1) * 28}px`);
        frame.style.setProperty("--scroll-s", String(1 - Math.min(progress, 1) * 0.04));
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!frame || reduced || document.body.classList.contains("is-stage-open")) return;
      frame.style.setProperty("--px", `${(e.clientX / window.innerWidth - 0.5) * 18}px`);
      frame.style.setProperty("--py", `${(e.clientY / window.innerHeight - 0.5) * 12}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    const sections = ["hero", "work", "stack"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setNavCurrent(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const theme = active?.theme;

  return (
    <>
      <div className="page-bg" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#hero">
          {profile.shortName}
          <span>.</span>
        </a>
        <nav aria-label="Principal">
          <ul className="nav-links">
            <li>
              <a href="#work" aria-current={navCurrent === "work" ? "true" : "false"}>
                Réalisations
              </a>
            </li>
            <li>
              <a href="#stack" aria-current={navCurrent === "stack" ? "true" : "false"}>
                Stack
              </a>
            </li>
          </ul>
        </nav>
        <div className="scroll-hint" aria-hidden="true">
          {scrollPct}
        </div>
      </header>

      <aside className="visual-stage" aria-hidden="true">
        <div className="visual-stage__glow" />
        <div className="visual-stage__frame" id="visual-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="visual-stage__img"
            src="/assets/coder-hero.png"
            alt=""
            width={900}
            height={900}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </aside>

      <main className="ui">
        <section className="section" id="hero" aria-labelledby="hero-title">
          <p className="hero-role">{profile.role}</p>
          <h1 className="hero-name" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero-tag">{profile.tagline}</p>
          <p className="hero-pitch">{profile.pitch}</p>
          <div className="cta-row">
            <a className="cta" href="#live">
              Voir les démos
            </a>
            <a className="cta cta--ghost" href="#dossier">
              Dossier technique
            </a>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <p className="section-label">Portfolio</p>
          <h2 id="work-title">Réalisations</h2>
          <p className="lead">
            Cliquez un projet : la scène bascule sur son univers (marque, stack,
            valeur). Deux démos Next.js s’ouvrent sur le même serveur.
          </p>

          <div className="work-block" id="live">
            <h3 className="work-heading">
              <span className="work-dot work-dot--live" aria-hidden="true" />
              Démos en ligne
            </h3>
            <p className="work-note">
              Relais et Simplement sont des apps React/Next — même process.
            </p>
            <ProjectList items={liveDemos} activeId={activeId} onSelect={openProject} />
          </div>

          <div className="work-block" id="dossier">
            <h3 className="work-heading">
              <span className="work-dot" aria-hidden="true" />
              Dossier de compétences
            </h3>
            <p className="work-note">
              Sept projets clients. Chaque sélection ouvre une scène dédiée.
            </p>
            <ProjectList
              items={dossierProjects}
              activeId={activeId}
              onSelect={openProject}
            />
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-title">
          <p className="section-label">Méthode &amp; outils</p>
          <h2 id="stack-title">Stack</h2>
          <p className="lead">
            Du besoin métier à la mise en exploitation. Prompting et assistants IA
            pour accélérer cadrage, code et itérations — sans remplacer l’architecture.
          </p>
          <ul className="stack-tags">
            {profile.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </main>

      <div
        id="project-stage"
        className="project-stage"
        data-open={open ? "true" : "false"}
        hidden={!open && !activeId}
        role="dialog"
        aria-modal="true"
        aria-labelledby="stage-title"
        style={
          theme
            ? ({
                "--stage-bg": theme.bg,
                "--stage-bg2": theme.bg2,
                "--stage-ink": theme.ink,
                "--stage-accent": theme.accent,
              } as CSSProperties)
            : undefined
        }
      >
        <div className="stage-bg" aria-hidden="true">
          <div className="stage-glow" />
          <div
            className="stage-logo"
            dangerouslySetInnerHTML={{
              __html: theme ? brandLogos[theme.brand] || "" : "",
            }}
          />
          <p className="stage-tagline">{theme?.tagline}</p>
          <div
            className="stage-motif"
            dangerouslySetInnerHTML={{
              __html: theme
                ? motifMarkup[theme.motif] || motifMarkup.layers
                : "",
            }}
          />
        </div>

        <aside className="stage-card">
          <button type="button" className="stage-close" onClick={closeProject}>
            ← Retour
          </button>
          {active ? (
            <>
              <p className="stage-badge" data-live={active.live ? "true" : "false"}>
                {active.badge}
              </p>
              <h2 id="stage-title">{active.title}</h2>
              <p className="stage-role">{active.role}</p>
              <p className="stage-summary">{active.summary}</p>
              <p className="stage-value">{active.value}</p>
              <p className="stage-stack-label">Stack</p>
              <ul className="stage-stack">
                {active.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {active.live && active.href ? (
                <a className="stage-cta" href={active.href}>
                  Ouvrir la démo
                </a>
              ) : null}
            </>
          ) : null}
        </aside>
      </div>
    </>
  );
}
