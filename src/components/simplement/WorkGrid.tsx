"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/simplement/Reveal";
import { workFilters, works } from "@/lib/simplement/data";

export function WorkGrid() {
  const [filter, setFilter] = useState<string>("all");

  return (
    <>
      <div className="cases-head">
        <div>
          <h2 id="portfolio-title">Derniers projets livrés</h2>
          <p className="muted" style={{ margin: "0.35rem 0 0", maxWidth: "36rem" }}>
            De la création de site vitrine ou e-commerce à la gestion de publicité en ligne.
          </p>
        </div>
        <div className="case-filters" role="group" aria-label="Filtrer les réalisations">
          {workFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`case-filter${filter === f.id ? " is-on" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {works.map((item, i) => {
          const show = filter === "all" || item.categories.includes(filter);
          return (
            <Reveal
              key={item.slug}
              as="article"
              className={`work-card${show ? "" : " is-hidden"}`}
              delay={i % 2 === 1 ? 1 : undefined}
            >
              <Link className="work-card__media" href={item.href} aria-label={item.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt} width={800} height={560} />
              </Link>
              <div className="work-card__body">
                <div className="case-tags">
                  {item.tagLabels.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
