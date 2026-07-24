"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initHome, initPages } from "./runtime.js";

/**
 * Rejoue les comportements des maquettes v2 (rideau, curseur, entonnoir,
 * rails, onglets, assistant RDV…) à chaque navigation. Chaque init interroge
 * le DOM et se protège par présence d'éléments, donc les deux tournent partout ;
 * leurs fonctions de nettoyage démontent écouteurs, boucles et observers avant
 * le rendu de la page suivante.
 */
export function SimplementRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    // Laisse React peindre le DOM de la nouvelle route avant de câbler.
    const disposers: Array<() => void> = [];
    const id = requestAnimationFrame(() => {
      disposers.push(initHome());
      disposers.push(initPages());
    });
    return () => {
      cancelAnimationFrame(id);
      disposers.forEach((d) => d && d());
    };
  }, [pathname]);

  return null;
}
