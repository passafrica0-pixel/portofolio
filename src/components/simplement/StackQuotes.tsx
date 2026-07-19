"use client";

import { useState, type MouseEvent } from "react";
import { Reveal } from "@/components/simplement/Reveal";
import { stackQuotes } from "@/lib/simplement/data";

export function StackQuotes() {
  const [active, setActive] = useState(0);

  const handleEnter = (e: MouseEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest(".q-card");
    if (!card) return;
    const cards = [...e.currentTarget.querySelectorAll(".q-card")];
    const idx = cards.indexOf(card);
    if (idx >= 0) setActive(idx);
  };

  return (
    <div className="stack-quotes" onMouseOver={handleEnter}>
      {stackQuotes.map((quote, i) => (
        <Reveal
          key={quote.num}
          as="article"
          className={`q-card${active === i ? " is-active" : ""}`}
          delay={i === 1 ? 1 : i === 2 ? 2 : undefined}
        >
          <span className="num">{quote.num}</span>
          <div>
            <h3>{quote.title}</h3>
            <span className="pull">{quote.pull}</span>
            <p>{quote.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
