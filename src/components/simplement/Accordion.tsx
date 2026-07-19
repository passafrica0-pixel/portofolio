"use client";

import { useCallback, useRef } from "react";

type Item = {
  summary: string;
  body: string;
};

type Props = {
  items: Item[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = 0 }: Props) {
  const accRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const t = e.currentTarget;
    if (!t.open || !accRef.current) return;
    accRef.current.querySelectorAll("details").forEach((d) => {
      if (d !== t) d.open = false;
    });
  }, []);

  return (
    <div className="accordion" ref={accRef}>
      {items.map((item, i) => (
        <details
          key={item.summary}
          className="acc-item"
          open={i === defaultOpen}
          onToggle={handleToggle}
        >
          <summary>{item.summary}</summary>
          <div className="acc-body">{item.body}</div>
        </details>
      ))}
    </div>
  );
}
