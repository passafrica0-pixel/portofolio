"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/simplement/Reveal";
import { caseFilters, cases } from "@/lib/simplement/data";

export function CaseGrid() {
  const [filter, setFilter] = useState<string>("all");

  return (
    <>
      <div className="cases-head">
        <div>
          <p className="eyebrow">Portfolio de preuves</p>
          <h2 id="grid-title">Tous les cas</h2>
        </div>
        <div className="case-filters" role="group" aria-label="Filtrer les études de cas">
          {caseFilters.map((f) => (
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

      <div className="case-grid">
        {cases.map((item, i) => {
          const show = filter === "all" || item.tags.includes(filter);
          return (
            <Reveal
              key={item.slug}
              as="article"
              className={`case-card${show ? "" : " is-hidden"}`}
              delay={i % 2 === 1 ? 1 : undefined}
            >
              <Link className="case-card__media" href={item.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt} width={640} height={240} />
              </Link>
              <div className="case-card__body">
                <div className="case-tags">
                  {item.tagLabels.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link className="case-card__link" href={item.href}>
                  Lire le cas →
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
