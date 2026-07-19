"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/simplement/Reveal";
import { methodSteps } from "@/lib/simplement/data";

export function MethodWow() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const armAutoplay = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || methodSteps.length < 2) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % methodSteps.length);
    }, 5200);
  };

  useEffect(() => {
    armAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const select = (i: number) => {
    setIndex(i);
    armAutoplay();
  };

  return (
    <section className="method-wow" id="methode" aria-labelledby="methode-title">
      <div className="method-wow__bg" aria-hidden="true" />
      <div className="container method-wow__inner">
        <Reveal as="div" className="method-wow__head">
          <p className="eyebrow">Notre méthode</p>
          <h2 id="methode-title">Simplement, l’Agence Web qui fait la différence à Marseille</h2>
          <p className="method-wow__lede">
            Trois leviers, une trajectoire : de la stratégie au design, jusqu’à l’acquisition qui fait arriver les leads.
          </p>
        </Reveal>

        <div className="method-stage" id="method-stage">
          <div className="method-rail" role="tablist" aria-label="Étapes de la méthode">
            {methodSteps.map((step, i) => (
              <button
                key={step.num}
                type="button"
                className={`method-tab${index === i ? " is-on" : ""}`}
                role="tab"
                aria-selected={index === i}
                aria-controls={`method-panel-${i + 1}`}
                id={`method-tab-${i + 1}`}
                onClick={() => select(i)}
              >
                <span className="method-tab__num">{step.num}</span>
                <span className="method-tab__label">{step.label}</span>
              </button>
            ))}
          </div>

          <div className="method-canvas">
            <div className="method-media" aria-hidden="true">
              {methodSteps.map((step, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={step.num}
                  className={`method-media__img${index === i ? " is-on" : ""}`}
                  src={step.image}
                  alt=""
                  width={900}
                  height={600}
                />
              ))}
              <div className="method-media__glow" />
              <div className="method-orbs" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="method-panels">
              {methodSteps.map((step, i) => (
                <article
                  key={step.num}
                  className={`method-panel${index === i ? " is-on" : ""}`}
                  role="tabpanel"
                  id={`method-panel-${i + 1}`}
                  aria-labelledby={`method-tab-${i + 1}`}
                  hidden={index !== i}
                >
                  <p className="method-panel__kicker">{step.kicker}</p>
                  <h3>{step.title}</h3>
                  {step.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  <ul className={`method-chips${step.chipsOrbit ? " method-chips--orbit" : ""}`}>
                    {step.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
