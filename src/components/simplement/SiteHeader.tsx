"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/live/simplement/case-studies", label: "Case Studies" },
  { href: "/live/simplement/realisations", label: "Réalisations" },
  { href: "/live/simplement/a-propos", label: "À propos" },
  { href: "/live/simplement/contact", label: "Contact" },
] as const;

const expertiseGroups = [
  {
    title: "Site internet",
    items: [
      { href: "https://simplement.me/agence-web-marseille/", label: "Création site", external: true },
      { href: "https://simplement.me/refonte-site-internet/", label: "Refonte", external: true },
      { href: "https://simplement.me/maintenance-site-internet/", label: "Maintenance", external: true },
      { href: "/live/simplement/realisations", label: "Voir notre portfolio →", external: false },
    ],
  },
  {
    title: "SEO",
    items: [
      { href: "https://simplement.me/agence-seo-marseille/", label: "Campagne SEO", external: true },
      { href: "https://simplement.me/audit-referencement-naturel/", label: "Audit SEO", external: true },
      { href: "/live/simplement/case-studies", label: "Voir nos avant/après →", external: false },
    ],
  },
  {
    title: "Ads, Consulting & IA",
    items: [
      { href: "https://simplement.me/agence-google-ads/", label: "Google Ads", external: true },
      { href: "https://simplement.me/agence-meta-ads/", label: "Meta Ads", external: true },
      { href: "https://simplement.me/agence-hubspot/", label: "Hubspot", external: true },
      { href: "https://simplement.me/ai-audit/", label: "Audit IA", external: true },
    ],
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setExpertiseOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
      "a, button:not([disabled])",
    );
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}
      id="header"
    >
      <div className="site-header__inner">
        <Link className="logo" href="/live/simplement" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/simplement-logo-agence-web-min-1-1024x223.png"
            alt="Simplement"
            width={160}
            height={35}
            style={{ height: 32, width: "auto" }}
          />
        </Link>

        <nav className="nav nav--desktop" aria-label="Principale">
          <div className="nav-item">
            <button type="button" aria-haspopup="true" aria-expanded="false">
              Expertise
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="mega" role="menu">
              <div className="mega-col">
                <h5>Site internet</h5>
                <a href="https://simplement.me/agence-web-marseille/">Création site</a>
                <a href="https://simplement.me/refonte-site-internet/">Refonte</a>
                <a href="https://simplement.me/maintenance-site-internet/">Maintenance</a>
                <Link className="mega-link" href="/live/simplement/realisations">
                  Voir notre portfolio →
                </Link>
              </div>
              <div className="mega-col">
                <h5>Référencement naturel - SEO</h5>
                <a href="https://simplement.me/agence-seo-marseille/">Campagne SEO</a>
                <a href="https://simplement.me/audit-referencement-naturel/">Audit SEO</a>
                <a href="https://simplement.me/agence-seo-marseille/">SEO Netlinking</a>
                <Link className="mega-link" href="/live/simplement/case-studies">
                  Voir nos avant/après →
                </Link>
              </div>
              <div className="mega-col">
                <h5>Publicité en ligne</h5>
                <a href="https://simplement.me/agence-google-ads/">Google Ads</a>
                <a href="https://simplement.me/agence-meta-ads/">Meta Ads</a>
                <h5 style={{ marginTop: "0.85rem" }}>Conseils / Consulting</h5>
                <a href="https://simplement.me/agence-hubspot/">Hubspot</a>
                <a href="https://simplement.me/agence-emailing/">Email marketing</a>
                <h5 style={{ marginTop: "0.85rem" }}>Accompagnement IA</h5>
                <a href="https://simplement.me/ai-audit/">Audit IA</a>
              </div>
            </div>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link className="btn btn--primary nav__cta" href="/live/simplement/rendez-vous">
            Prendre rendez-vous
          </Link>
        </nav>

        <div className="nav-mobile-bar">
          <Link className="btn btn--primary nav-mobile-bar__cta" href="/live/simplement/rendez-vous" onClick={closeMenu}>
            RDV
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <div
        ref={panelRef}
        id={panelId}
        className={`nav-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <nav className="nav-drawer__nav" aria-label="Mobile">
          <div className="nav-drawer__group">
            <button
              type="button"
              className={`nav-drawer__accordion${expertiseOpen ? " is-open" : ""}`}
              aria-expanded={expertiseOpen}
              onClick={() => setExpertiseOpen((v) => !v)}
            >
              Expertise
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {expertiseOpen && (
              <div className="nav-drawer__expertise">
                {expertiseGroups.map((group) => (
                  <div key={group.title} className="nav-drawer__col">
                    <h5>{group.title}</h5>
                    {group.items.map((item) =>
                      item.external ? (
                        <a key={item.href + item.label} href={item.href} onClick={closeMenu}>
                          {item.label}
                        </a>
                      ) : (
                        <Link key={item.href + item.label} href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      ),
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-drawer__link"
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link className="btn btn--primary nav-drawer__cta" href="/live/simplement/rendez-vous" onClick={closeMenu}>
            Prendre rendez-vous
          </Link>
          <a className="nav-drawer__phone" href="tel:+33465845964" onClick={closeMenu}>
            04 65 84 59 64
          </a>
        </nav>
      </div>
    </header>
  );
}
