"use client";

import { useEffect, useState } from "react";

const KEY = "simplement_cookies_ok";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <aside className="cookie is-on" id="cookie" role="dialog" aria-label="Cookies">
      <h3>Cookies à volonté</h3>
      <p>
        Nous utilisons nos propres cookies et ceux de tiers pour nous permettre de comprendre comment le
        site est utilisé.
      </p>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            localStorage.setItem(KEY, "1");
            setOpen(false);
          }}
        >
          Miaam les cookies !
        </button>
        <a className="btn btn--ghost" href="https://simplement.me/gestion-donnees-personnelles-rgpd/">
          En savoir plus
        </a>
      </div>
    </aside>
  );
}
