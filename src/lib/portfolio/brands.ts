/** Marques / motifs SVG pour les scènes projet (représentations stylisées). */

export const brandLogos: Record<string, string> = {
  odoo: `
    <svg viewBox="0 0 240 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="28" cy="32" r="18" fill="#875A7B"/>
      <circle cx="28" cy="32" r="8" fill="#fff"/>
      <text x="56" y="42" font-family="system-ui,sans-serif" font-size="36" font-weight="700" fill="currentColor">Odoo</text>
    </svg>`,
  laravel: `
    <svg viewBox="0 0 240 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 44 L28 12 L44 44 Z" fill="#FF2D20"/>
      <path d="M36 44 L52 12 L68 44 Z" fill="#FF2D20" opacity=".75"/>
      <text x="80" y="42" font-family="system-ui,sans-serif" font-size="32" font-weight="700" fill="currentColor">Laravel</text>
    </svg>`,
  nestjs: `
    <svg viewBox="0 0 260 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M32 10c-10 6-16 16-16 28 0 12 8 22 20 26 12-4 20-14 20-26 0-12-6-22-16-28l-4 8c6 4 10 12 10 20 0 8-5 15-12 18-7-3-12-10-12-18 0-8 4-16 10-20l-4-8z" fill="#E0234E"/>
      <text x="64" y="42" font-family="system-ui,sans-serif" font-size="30" font-weight="700" fill="currentColor">NestJS</text>
    </svg>`,
  nextjs: `
    <svg viewBox="0 0 240 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="28" cy="32" r="20" fill="currentColor"/>
      <path d="M22 22h6l12 18V22h6v28h-6L28 32v18h-6V22z" fill="#fff"/>
      <text x="60" y="42" font-family="system-ui,sans-serif" font-size="30" font-weight="700" fill="currentColor">Next.js</text>
    </svg>`,
  flutter: `
    <svg viewBox="0 0 260 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 36 L36 12 H52 L28 36 L52 60 H36 L12 36Z" fill="#54C5F8"/>
      <path d="M36 36 L52 52 H36 L28 44 L36 36Z" fill="#01579B"/>
      <text x="64" y="42" font-family="system-ui,sans-serif" font-size="30" font-weight="700" fill="currentColor">Flutter</text>
    </svg>`,
  php: `
    <svg viewBox="0 0 200 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="100" cy="32" rx="90" ry="24" fill="#777BB4"/>
      <text x="58" y="40" font-family="system-ui,sans-serif" font-size="28" font-weight="800" fill="#fff">PHP</text>
    </svg>`,
  simply: `
    <svg viewBox="0 0 280 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="14" width="36" height="36" rx="10" fill="#3A86FF"/>
      <text x="56" y="42" font-family="system-ui,sans-serif" font-size="28" font-weight="700" fill="currentColor">Simplement</text>
    </svg>`,
  relais: `
    <svg viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="28" cy="32" r="16" stroke="#F07838" stroke-width="4"/>
      <circle cx="28" cy="32" r="6" fill="#F07838"/>
      <path d="M48 32h20" stroke="#F07838" stroke-width="3"/>
      <text x="76" y="42" font-family="system-ui,sans-serif" font-size="30" font-weight="700" fill="currentColor">Relais</text>
    </svg>`,
  kafka: `
    <svg viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="20" r="6" fill="#231F20"/>
      <circle cx="24" cy="44" r="6" fill="#231F20"/>
      <circle cx="48" cy="32" r="8" fill="#231F20"/>
      <path d="M30 22l12 8M30 42l12-8" stroke="#231F20" stroke-width="3"/>
      <text x="68" y="42" font-family="system-ui,sans-serif" font-size="30" font-weight="700" fill="currentColor">Kafka</text>
    </svg>`,
};

/** Motifs décoratifs animés (HTML/CSS classes) */
export const motifMarkup: Record<string, string> = {
  modules: `
    <div class="motif motif--modules">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
      <span></span>
    </div>`,
  hex: `
    <div class="motif motif--hex">
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </div>`,
  nodes: `
    <div class="motif motif--nodes">
      <svg viewBox="0 0 400 300" aria-hidden="true">
        <g stroke="currentColor" stroke-width="1.5" fill="none" opacity=".45">
          <path d="M40 60 L160 40 L280 90 L360 50"/>
          <path d="M80 200 L180 120 L300 180 L360 220"/>
          <path d="M160 40 L180 120 L280 90 L300 180"/>
        </g>
        <g fill="currentColor">
          <circle cx="40" cy="60" r="7"/><circle cx="160" cy="40" r="7"/>
          <circle cx="280" cy="90" r="7"/><circle cx="360" cy="50" r="7"/>
          <circle cx="80" cy="200" r="7"/><circle cx="180" cy="120" r="7"/>
          <circle cx="300" cy="180" r="7"/><circle cx="360" cy="220" r="7"/>
        </g>
      </svg>
    </div>`,
  map: `
    <div class="motif motif--map">
      <span class="pin"></span><span class="pin"></span><span class="pin"></span>
      <span class="ring"></span>
    </div>`,
  waves: `
    <div class="motif motif--waves">
      <span></span><span></span><span></span><span></span>
    </div>`,
  layers: `
    <div class="motif motif--layers">
      <span></span><span></span><span></span>
    </div>`,
  canvas: `
    <div class="motif motif--canvas">
      <span></span><span></span><span></span>
    </div>`,
  ops: `
    <div class="motif motif--ops">
      <span class="bar"></span><span class="bar"></span><span class="bar"></span>
      <span class="pulse"></span>
    </div>`,
};
