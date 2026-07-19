"use client";

import { useEffect, useRef } from "react";
import { talkLines } from "@/lib/simplement/data";

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function HeroTalk() {
  const talkRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const talk = talkRef.current;
    const typing = typingRef.current;
    if (!talk) return;

    const lines = [...talk.querySelectorAll<HTMLElement>("[data-line]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;

    const playTalk = async () => {
      if (!lines.length || cancelled) return;
      lines.forEach((el) => el.classList.remove("is-on"));

      if (reduce) {
        lines.forEach((el) => el.classList.add("is-on"));
        return;
      }

      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const isUs = lines[i].classList.contains("talk__bubble--us");
        if (typing && isUs) {
          typing.classList.add("is-on");
          await wait(650);
          typing.classList.remove("is-on");
        } else {
          await wait(380);
        }
        lines[i].classList.add("is-on");
        await wait(1700);
      }
      await wait(2200);
      playTalk();
    };

    playTalk();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="talk" ref={talkRef} aria-live="polite">
      {talkLines.map((line, i) => (
        <div
          key={i}
          className={`talk__bubble talk__bubble--${line.side}`}
          data-line
        >
          {line.text}
          <small>{line.speaker}</small>
        </div>
      ))}
      <div className="talk__typing" ref={typingRef} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
