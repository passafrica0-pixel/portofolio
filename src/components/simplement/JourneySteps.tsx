"use client";

import { useEffect, useState } from "react";
import { journeySteps } from "@/lib/simplement/data";

export function JourneySteps() {
  const [hot, setHot] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = setInterval(() => {
      setHot((i) => (i + 1) % journeySteps.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="journey" id="journey">
      {journeySteps.map((step, i) => (
        <article key={step.num} className={`j-step${hot === i ? " is-hot" : ""}`}>
          <div className="dot">{step.num}</div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  );
}
