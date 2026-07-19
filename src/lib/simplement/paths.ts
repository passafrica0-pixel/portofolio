/** Préfixe des routes Simplement dans l’app unifiée. */
export const SIMPLEMENT_BASE = "/live/simplement";

/** Lien interne Simplement (`/` → home démo). */
export function sp(path: string = "/"): string {
  if (!path || path === "/") return SIMPLEMENT_BASE;
  if (path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  return `${SIMPLEMENT_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
