/* Runtime Simplement v2 — porté depuis les maquettes (app.js + pages.js).
   Chaque init retourne une fonction de nettoyage : écouteurs (AbortController),
   boucles rAF (drapeau alive) et IntersectionObservers (disconnect). */

/* Simplement — maquette v2
   Scroll natif (pas de hijack : les positions sticky restent fiables),
   parallaxes et simulation pilotées par un seul rAF. Zéro dépendance. */
export function initHome() {
  "use strict";
  // --- infrastructure de nettoyage (réexécution à chaque navigation) ---
  const ac = new AbortController();
  const signal = ac.signal;
  let alive = true;
  const ios = [];
  const raf = (cb) => { if (alive) return requestAnimationFrame(cb); return 0; };
  const on = (t, ...a) => {
    if (!t) return;
    t.addEventListener(...a);
    signal.addEventListener("abort", () => t.removeEventListener(a[0], a[1], a[2]), { once: true });
  };
  const trackIO = (...a) => { const o = new IntersectionObserver(...a); ios.push(o); return o; };


  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* ------------------------------------------------- rideau + révélations */
  // Les titres découpés attendent la levée du rideau : sinon l'effet se joue
  // derrière lui et le visiteur ne voit qu'un texte déjà en place.
  const splitIO = trackIO(
    (es) => es.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      splitIO.unobserve(en.target);
    }),
    { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
  );

  const wrapWords = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        if (!n.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((tok) => {
          if (!tok.trim()) return frag.appendChild(document.createTextNode(tok));
          const outer = document.createElement("span");
          outer.className = "w";
          const inner = document.createElement("span");
          inner.textContent = tok;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR") {
        wrapWords(n);
      }
    });
  };

  const startSplits = () => {
    $$("[data-split]").forEach((el) => {
      wrapWords(el);
      $$(".w > span", el).forEach((w, i) => (w.style.transitionDelay = (i * 0.045).toFixed(3) + "s"));
      splitIO.observe(el);
    });
  };

  // Le logotype vit : chaque lettre réagit au passage du curseur.
  const letterHost = $("[data-letters]");
  let letters = [];
  if (letterHost && !REDUCED) {
    letterHost.setAttribute("aria-hidden", "true");
    letterHost.innerHTML = [...letterHost.textContent]
      .map((c) => `<span class="ltr">${c}</span>`)
      .join("");
    letters = $$(".ltr", letterHost);
  }

  // Le logotype se cale sur la largeur exacte du viewport, comme un titre de film.
  const wordmark = $(".wordmark");
  const fitWordmark = () => {
    if (!wordmark) return;
    const word = $("span", wordmark);
    const stop = $("i", wordmark);
    if (!word) return;
    const gutter = parseFloat(getComputedStyle(wordmark).paddingLeft) || 0;
    const avail = wordmark.clientWidth - gutter * 2;
    if (avail <= 0) return;

    // Un bloc en nowrap ne rapporte pas son débordement via scrollWidth :
    // on mesure la largeur réelle des glyphes.
    wordmark.style.removeProperty("--mega");
    const left = word.getBoundingClientRect().left;
    const right = (stop || word).getBoundingClientRect().right;
    const natural = right - left;
    if (natural <= 0) return;

    const size = parseFloat(getComputedStyle(wordmark).fontSize);
    wordmark.style.setProperty("--mega", (size * (avail / natural)).toFixed(2) + "px");
  };
  on(window, "resize", fitWordmark);
  if (document.fonts?.ready) document.fonts.ready.then(fitWordmark);

  const curtain = $("#curtain");
  const revealSite = () => {
    fitWordmark();
    document.body.classList.add("is-ready");
    startSplits();
  };

  let seen = false;
  try { seen = sessionStorage.getItem("smpl-curtain") === "1"; } catch {}

  if (curtain && !REDUCED && !seen) {
    try { sessionStorage.setItem("smpl-curtain", "1"); } catch {}
    const bar = $(".curtain__bar span", curtain);
    raf(() => bar && (bar.style.width = "100%"));
    const lift = () => {
      curtain.classList.add("is-done");
      setTimeout(revealSite, 240);
    };
    if (document.readyState === "complete") setTimeout(lift, 850);
    else on(window, "load", () => setTimeout(lift, 600));
  } else {
    curtain?.remove();
    revealSite();
  }

  /* -------------------------------------------------------- navigation -- */
  const dock = $("#dock");
  const burger = $("#burger");
  const drawer = $("#drawer");
  const megaItem = $("[data-mega]");
  const megaBtn = megaItem && $(".dock__link", megaItem);

  const closeMega = () => {
    if (!megaItem) return;
    megaItem.removeAttribute("data-open");
    megaBtn.setAttribute("aria-expanded", "false");
  };
  const openMega = () => {
    if (!megaItem) return;
    megaItem.setAttribute("data-open", "");
    megaBtn.setAttribute("aria-expanded", "true");
  };

  if (megaItem) {
    on(megaBtn, "click", (e) => {
      e.preventDefault();
      megaItem.hasAttribute("data-open") ? closeMega() : openMega();
    });
    on(megaItem, "mouseenter", openMega);
    on(megaItem, "mouseleave", closeMega);
    on(megaItem, "focusout", (e) => {
      if (!megaItem.contains(e.relatedTarget)) closeMega();
    });
  }

  const closeDrawer = () => {
    drawer.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  };
  on(burger, "click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    open ? closeDrawer() : (drawer.hidden = false, burger.setAttribute("aria-expanded", "true"));
  });
  $$("a", drawer).forEach((a) => on(a, "click", closeDrawer));

  on(document, "keydown", (e) => {
    if (e.key !== "Escape") return;
    closeMega();
    if (!drawer.hidden) { closeDrawer(); burger.focus(); }
  });

  /* --------------------------------------------------- zones claires ---- */
  // Le dock passe en thème clair quand il survole un acte clair.
  let lightZones = [];
  const measureZones = () => {
    lightZones = $$(".bands, .method, .cases, .reviews, .faq, .act-light").map((el) => {
      const r = el.getBoundingClientRect();
      return { top: r.top + scrollY, bottom: r.bottom + scrollY };
    });
  };

  /* ------------------------------------------------------- révélations -- */
  const io = trackIO(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
  );
  $$(".reveal, .band__head, .cases__head, .reviews__head, .method__head, .team__grid, .faq__grid, .finale__inner")
    .forEach((el) => { el.classList.add("reveal"); io.observe(el); });

  /* ------------------------------------------------------ onglets méthode */
  const tabs = $$(".method__tab");
  const panels = $$(".method__panel");
  const shots = $$("[data-method-img]");
  const setMethod = (i) => {
    tabs.forEach((t, k) => {
      t.classList.toggle("is-on", k === i);
      t.setAttribute("aria-selected", String(k === i));
    });
    panels.forEach((p, k) => {
      p.classList.toggle("is-on", k === i);
      p.hidden = k !== i;
    });
    shots.forEach((s, k) => s.classList.toggle("is-on", k === i));
  };
  tabs.forEach((t, i) => {
    on(t, "click", () => setMethod(i));
    on(t, "keydown", (e) => {
      const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const n = (i + dir + tabs.length) % tabs.length;
      tabs[n].focus();
      setMethod(n);
    });
  });

  /* ---------------------------------------------------------- compteurs -- */
  let countersDone = false;
  const runCounters = () => {
    if (countersDone) return;
    countersDone = true;
    $$("#counters strong").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const prefix = el.dataset.prefix || "";
      if (REDUCED) { el.textContent = prefix + target.toFixed(dec).replace(".", ","); return; }
      const t0 = performance.now();
      const dur = 1600;
      const tick = (now) => {
        const p = clamp((now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + (target * eased).toFixed(dec).replace(".", ",");
        if (p < 1) raf(tick);
      };
      raf(tick);
    });
  };
  const fluxSection = $("#flux");
  const countersHost = $("#counters");
  if (countersHost) {
    trackIO(
      (e) => e.forEach((en) => en.isIntersecting && runCounters()),
      { threshold: 0.25 }
    ).observe(countersHost);
  }

  /* ============================== CANVAS — du visiteur au client ========= */
  // Chaque point est un visiteur. Deux passages filtrent : la visibilité
  // amène du monde, la conversion en retient une part, l'accompagnement
  // transforme le reste en clients.
  const canvas = $("#flux-canvas");
  let sim = null;

  if (canvas && !REDUCED) {
    const ctx = canvas.getContext("2d", { alpha: true });
    let W = 0, H = 0, dpr = 1, parts = [], floats = [], focal = { x: 0, y: 0 };

    // L'entonnoir vit dans la moitié droite, hors du voile de texte.
    const SPAWN = 0.46, G1 = 0.63, G2 = 0.76, END = 0.885;
    const COL = {
      visitor: "158, 194, 255",
      lead: "58, 134, 255",
      client: "255, 255, 255",
    };

    // Demi-ouverture de l'entonnoir : large à l'entrée, étroite au client.
    const half = (x) => {
      const t = clamp((x - W * SPAWN) / (W * (END - SPAWN)));
      const e = t * t * (3 - 2 * t);
      return H * (0.34 - 0.29 * e);
    };

    const spawn = (seed = false) => {
      const x = seed ? W * (SPAWN + Math.random() * (END - SPAWN)) : W * SPAWN - Math.random() * 30;
      return {
        x,
        y: H * 0.5 + (Math.random() * 2 - 1) * half(x) * 0.9,
        vx: 1.05 + Math.random() * 1.5,
        r: 1 + Math.random() * 1.2,
        state: 0,
        life: 1,
        dying: false,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, devicePixelRatio || 1);
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      focal = { x: W * END, y: H * 0.5 };
      const want = Math.round(clamp(W / 1440, 0.4, 1.4) * 380);
      parts = Array.from({ length: want }, () => spawn(true));
      floats = [];
    };

    let progress = 0;
    let pulse = 0;

    const step = () => {
      const g1 = W * G1, g2 = W * G2;
      const stage = progress * 2.4;
      const glow = (i) => clamp(1.35 - Math.abs(stage - i), 0.3, 1);

      ctx.clearRect(0, 0, W, H);

      // Parois : la forme raconte la sélection, pas besoin de chiffres inventés.
      ctx.beginPath();
      for (let x = W * SPAWN; x <= W * END; x += 16) {
        const h = half(x);
        x === W * SPAWN ? ctx.moveTo(x, H / 2 - h) : ctx.lineTo(x, H / 2 - h);
      }
      for (let x = W * END; x >= W * SPAWN; x -= 16) ctx.lineTo(x, H / 2 + half(x));
      ctx.closePath();
      const wall = ctx.createLinearGradient(W * SPAWN, 0, W * END, 0);
      wall.addColorStop(0, "rgba(158,194,255,0)");
      wall.addColorStop(0.18, "rgba(158,194,255,0.05)");
      wall.addColorStop(1, "rgba(58,134,255,0.12)");
      ctx.fillStyle = wall;
      ctx.fill();
      const edge = ctx.createLinearGradient(W * SPAWN, 0, W * END, 0);
      edge.addColorStop(0, "rgba(158,194,255,0)");
      edge.addColorStop(0.22, "rgba(158,194,255,0.2)");
      edge.addColorStop(1, "rgba(158,194,255,0.32)");
      ctx.strokeStyle = edge;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Seuils : éclairés au rythme du récit
      [g1, g2].forEach((gx, i) => {
        const h = half(gx);
        ctx.strokeStyle = `rgba(158,194,255,${0.12 + 0.3 * glow(i)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(gx, H / 2 - h - 16);
        ctx.lineTo(gx, H / 2 + h + 16);
        ctx.stroke();
      });

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        if (!p.dying) {
          if (p.state === 2) {
            const dx = focal.x - p.x, dy = focal.y - p.y;
            const d = Math.hypot(dx, dy) || 1;
            p.x += (dx / d) * 2.4;
            p.y += (dy / d) * 2.4;
            if (d < 13) {
              pulse = 1;
              if (floats.length < 5) {
                floats.push({ x: focal.x + 14 + Math.random() * 26, y: focal.y - 22 - Math.random() * 20, life: 1 });
              }
              parts[i] = spawn();
              continue;
            }
          } else {
            p.x += p.vx;
            const h = half(p.x) * 0.9;
            const off = p.y - H / 2;
            if (Math.abs(off) > h) p.y -= off * 0.07;             // rappel dans l'entonnoir
            else p.y += Math.sin((p.x + i) * 0.012) * 0.35;
          }

          if (p.state === 0 && p.x > g1) {
            if (Math.random() < 0.26) { p.state = 1; p.r = 1.8 + Math.random(); p.vx *= 0.85; }
            else p.dying = true;
          } else if (p.state === 1 && p.x > g2) {
            if (Math.random() < 0.45) { p.state = 2; p.r = 2.4 + Math.random(); }
            else p.dying = true;
          }
        } else {
          p.x += p.vx * 0.4;
          p.y += 0.5;
          p.life -= 0.025;
        }

        if (p.life <= 0 || p.x > W + 40 || p.y > H + 30) { parts[i] = spawn(); continue; }

        const c = p.state === 2 ? COL.client : p.state === 1 ? COL.lead : COL.visitor;
        const base = p.state === 0 ? 0.5 : p.state === 1 ? 0.9 : 1;
        const alpha = base * p.life * glow(p.state);

        if (p.state === 0) {
          ctx.strokeStyle = `rgba(${c}, ${alpha})`;
          ctx.lineWidth = p.r;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(p.x - p.vx * 7, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(${c}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Foyer : le client gagné
      pulse *= 0.94;
      const rad = 34 + pulse * 30;
      const halo = ctx.createRadialGradient(focal.x, focal.y, 0, focal.x, focal.y, rad * 3.2);
      halo.addColorStop(0, `rgba(255,255,255,${0.28 + pulse * 0.3})`);
      halo.addColorStop(0.35, `rgba(58,134,255,${0.22 + pulse * 0.18})`);
      halo.addColorStop(1, "rgba(58,134,255,0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(focal.x, focal.y, rad * 3.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(255,255,255,${0.3 + pulse * 0.4})`;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.arc(focal.x, focal.y, rad, 0, Math.PI * 2);
      ctx.stroke();

      // « +1 » : chaque client gagné s'affiche, puis s'efface
      ctx.font = "700 12px Manrope, sans-serif";
      floats = floats.filter((f) => f.life > 0);
      floats.forEach((f) => {
        f.y -= 0.5;
        f.life -= 0.016;
        ctx.fillStyle = `rgba(255,255,255,${(f.life * 0.95).toFixed(3)})`;
        ctx.fillText("+1", f.x, f.y);
      });
    };

    sim = { resize, step, setProgress: (v) => (progress = v) };
    resize();
    on(window, "resize", resize);
  }

  /* ------------------------------------- étapes du flux pilotées au scroll */
  const stages = $$(".flux__stage");
  let currentStage = -1;
  const setStage = (i) => {
    if (i === currentStage) return;
    currentStage = i;
    stages.forEach((s, k) => s.classList.toggle("is-on", k === i));
  };

  /* ------------------------------------------------------- boucle rAF ---- */
  const progressBar = $("#progress i");
  const wallCols = $$("[data-wall-speed]");
  const rails = $$("[data-rail]");
  const chromes = $$("[data-chrome]");
  const drifters = $$("[data-drift]");
  const hero = $(".hero");

  let lastY = scrollY;
  let dockHidden = false;
  let ticking = false;
  let fluxVisible = false;

  if (fluxSection) {
    trackIO(
      (e) => e.forEach((en) => (fluxVisible = en.isIntersecting)),
      { threshold: 0 }
    ).observe(fluxSection);
  }

  const frame = () => {
    ticking = false;
    const y = scrollY;
    const vh = innerHeight;
    const doc = document.documentElement.scrollHeight - vh;

    // progression de lecture
    if (progressBar) progressBar.style.width = (clamp(y / (doc || 1)) * 100).toFixed(2) + "%";

    // dock : se rétracte à la descente, revient à la montée
    const goingDown = y > lastY && y > 220;
    if (goingDown !== dockHidden) {
      dockHidden = goingDown;
      dock.classList.toggle("is-hidden", goingDown);
    }
    lastY = y;

    // dock : thème selon l'acte survolé
    const probe = y + 60;
    const onLight = lightZones.some((z) => probe > z.top && probe < z.bottom);
    dock.classList.toggle("is-light", onLight);

    if (!REDUCED) {
      // mur du hero : colonnes à vitesses opposées
      if (hero && y < vh * 1.2) {
        wallCols.forEach((col) => {
          const s = parseFloat(col.dataset.wallSpeed);
          col.style.transform = `translate3d(0, ${(y * s).toFixed(1)}px, 0)`;
        });
      }


      // formes chromées : dérive lente pendant la rupture d'acte
      chromes.forEach((el) => {
        const k = parseFloat(el.dataset.chrome);
        const host = el.closest(".trust, .phero");
        const r = host.getBoundingClientRect();
        if (r.bottom < -300 || r.top > vh + 300) return;
        const p = (vh - r.top) / (vh + r.height);
        el.style.transform = `translate3d(0, ${(p * 340 * k).toFixed(1)}px, 0) rotate(${(p * 90 * k).toFixed(1)}deg)`;
      });

      // orbes des actes clairs : dérive verticale au scroll
      drifters.forEach((el) => {
        const host = el.parentElement;
        const r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = (vh - r.top) / (vh + r.height);
        el.style.transform = `translate3d(0, ${(p * 260 * parseFloat(el.dataset.drift)).toFixed(1)}px, 0)`;
      });
    }

    // conviction : les formes traversent le viewport
    if (stage && flyers.length) {
      const r = stage.getBoundingClientRect();
      if (r.bottom > -200 && r.top < vh + 200) {
        runStage(clamp(-r.top / ((stage.offsetHeight - vh) || 1)));
      }
    }

    // flux : progression dans la section collante
    if (fluxSection) {
      const r = fluxSection.getBoundingClientRect();
      const total = fluxSection.offsetHeight - vh;
      const p = clamp(-r.top / (total || 1));
      if (sim) sim.setProgress(p);
      setStage(p < 0.34 ? 0 : p < 0.67 ? 1 : 2);
    }
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; raf(frame); }
  };

  // Le canvas tourne en continu, mais seulement quand il est à l'écran.
  const loop = () => {
    if (sim && fluxVisible) sim.step();
    raf(loop);
  };
  if (sim) raf(loop);

  on(window, "scroll", onScroll, { passive: true });
  on(window, "resize", () => { measureZones(); onScroll(); });
  on(window, "load", () => { measureZones(); onScroll(); });
  measureZones();
  onScroll();

  /* ------------------------------------------------ curseur magnétique -- */
  const cursor = $("#cursor");
  const FINE = matchMedia("(pointer: fine)").matches;

  if (cursor && FINE && !REDUCED) {
    document.body.classList.add("has-cursor");
    const dot = $("b", cursor);
    const ring = $("em", cursor);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

    on(window, "mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.classList.add("is-live");
    }, { passive: true });
    on(window, "mouseleave", () => cursor.classList.remove("is-hot"));

    const HOT = "a, button, summary, .case, .band__rail figure";
    on(document, "mouseover", (e) => {
      cursor.classList.toggle("is-hot", !!e.target.closest(HOT));
    });

    const trail = () => {
      rx += (mx - rx) * 0.19;
      ry += (my - ry) * 0.19;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px) translate(-50%, -50%)`;
      raf(trail);
    };
    raf(trail);
  }

  /* ---------------------------------------------------- scroll adouci --- */
  // On interpole la position de scroll réelle plutôt que de translater la page :
  // les `position: sticky` continuent de fonctionner normalement.
  if (FINE && !REDUCED) {
    const maxY = () => document.documentElement.scrollHeight - innerHeight;
    let target = scrollY, running = false;

    const glide = () => {
      const d = target - scrollY;
      if (Math.abs(d) < 0.5) { running = false; return; }
      scrollTo(0, scrollY + d * 0.13);
      raf(glide);
    };

    on(window, "wheel", (e) => {
      if (e.ctrlKey) return;                                   // zoom navigateur
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;    // défilement horizontal
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1;
      target = clamp(target + e.deltaY * unit, 0, maxY());
      if (!running) { running = true; raf(glide); }
    }, { passive: false });

    // Barre de défilement, clavier, ancres : on se resynchronise.
    on(window, "scroll", () => { if (!running) target = scrollY; }, { passive: true });
    on(window, "resize", () => { target = scrollY; });
  }

  /* -------------------------------- traversée de formes (conviction) ---- */
  const stage = $("#conviction");
  const flyers = $$("[data-fly]").map((el) => {
    const [from, to] = el.dataset.fly.split("|").map((p) => p.split(",").map(Number));
    return { el, from, to };
  });

  const beatA = $('[data-beat="a"]');
  const beatB = $('[data-beat="b"]');
  // Fondu doux entre deux bornes — évite les coupures nettes au scroll.
  const band = (p, a, b) => clamp((p - a) / (b - a));

  const runStage = (p) => {
    // Trois temps : on affirme, les formes traversent seules, on conclut.
    if (beatA) {
      const out = band(p, 0.16, 0.34);
      beatA.style.opacity = (1 - out).toFixed(3);
      beatA.style.transform = `translateY(${(-40 * out).toFixed(1)}px)`;
    }
    if (beatB) {
      const inn = band(p, 0.66, 0.84);
      beatB.style.opacity = inn.toFixed(3);
      beatB.style.transform = `translateY(${(38 * (1 - inn)).toFixed(1)}px)`;
      // Tant qu'il n'est pas lisible, ce bloc sort aussi du parcours clavier.
      beatB.inert = inn < 0.6;
    }

    // Un poil d'anticipation en fin de course : les formes accélèrent en sortie.
    const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    flyers.forEach(({ el, from, to }) => {
      const v = from.map((a, i) => a + (to[i] - a) * e);
      el.style.transform =
        `translate3d(calc(${v[0].toFixed(2)}vw - 50%), calc(${v[1].toFixed(2)}vh - 50%), 0)` +
        ` rotate(${v[3].toFixed(1)}deg) scale(${v[2].toFixed(3)})`;
    });
  };

  /* ----------------------------------------- lettres suivant la souris --- */
  if (letters.length) {
    let lx = -9999, moved = false;
    on(window, "mousemove", (e) => { lx = e.clientX; moved = true; }, { passive: true });

    const wave = () => {
      if (moved) {
        letters.forEach((l) => {
          const r = l.getBoundingClientRect();
          const d = Math.abs(lx - (r.left + r.width / 2));
          const pull = Math.exp(-((d / 190) ** 2));           // cloche : influence locale
          l.style.transform = `translateY(${(-22 * pull).toFixed(1)}px) rotate(${(-4 * pull).toFixed(2)}deg)`;
        });
      }
      raf(wave);
    };
    raf(wave);
  }

  /* ------------------------------- étiquette de curseur + copie ---------- */
  if (cursor && FINE && !REDUCED) {
    const label = $("i", cursor);
    on(document, "mouseover", (e) => {
      const host = e.target.closest("[data-cursor]");
      cursor.classList.toggle("has-label", !!host);
      if (host) label.textContent = host.dataset.cursor;
    });

    $$("[data-copy]").forEach((el) => {
      on(el, "click", (e) => {
        e.preventDefault();                                   // `tel:` ne sert à rien sur desktop
        navigator.clipboard?.writeText(el.dataset.copy).then(() => {
          label.textContent = "Numéro copié";
          setTimeout(() => (label.textContent = el.dataset.cursor), 1800);
        }).catch(() => (label.textContent = el.dataset.copy));
      });
    });
  }

  /* ----------------------------------------- rails de projets en marche -- */
  // Le scroll ne fait plus avancer les rails : ils avancent d'eux-mêmes.
  // Le scroll et le glissé ne font que moduler leur vitesse.
  const engines = [];
  if (!REDUCED) {
    rails.forEach((rail, i) => {
      // Duplication technique pour boucler sans couture (masquée aux lecteurs d'écran).
      [...rail.children].forEach((n) => {
        const c = n.cloneNode(true);
        c.setAttribute("aria-hidden", "true");
        $$("a, button", c).forEach((x) => (x.tabIndex = -1));
        rail.appendChild(c);
      });

      const e = { rail, x: 0, half: 0, dir: i % 2 ? 1 : -1, boost: 0, delta: 0, drag: false, px: 0, items: [] };
      e.items = [...rail.children].map((el) => ({ el, left: 0, w: 0, hx: 0, hy: 0, on: false }));
      engines.push(e);

      // Le survol s'ajoute à l'orientation calculée, il ne la remplace pas.
      e.items.forEach((it) => {
        on(it.el, "pointermove", (ev) => {
          const r = it.el.getBoundingClientRect();
          it.hx = ((ev.clientX - r.left) / r.width - 0.5) * 13;
          it.hy = -((ev.clientY - r.top) / r.height - 0.5) * 9;
          it.on = true;
        });
        on(it.el, "pointerleave", () => { it.hx = it.hy = 0; it.on = false; });
      });

      on(rail, "pointerdown", (ev) => {
        e.drag = true; e.px = ev.clientX; e.boost = 0;
        rail.classList.add("is-dragging");
        rail.setPointerCapture(ev.pointerId);
      });
      on(rail, "pointermove", (ev) => {
        if (!e.drag) return;
        const d = ev.clientX - e.px;
        e.px = ev.clientX;
        e.x += d;
        e.boost = d;                       // sert d'élan au relâchement
      });
      const drop = (ev) => {
        if (!e.drag) return;
        e.drag = false;
        rail.classList.remove("is-dragging");
        try { rail.releasePointerCapture(ev.pointerId); } catch {}
      };
      on(rail, "pointerup", drop);
      on(rail, "pointercancel", drop);
    });

    const measure = () => engines.forEach((e) => {
      e.half = e.rail.scrollWidth / 2;
      e.items.forEach((it) => { it.left = it.el.offsetLeft; it.w = it.el.offsetWidth; });
    });
    on(window, "resize", measure);
    on(window, "load", measure);
    measure();

    const drive = () => {
      engines.forEach((e) => {
        if (!e.half) { e.half = e.rail.scrollWidth / 2; if (!e.half) return; }
        const before = e.x;
        if (!e.drag) {
          e.x += 0.42 * e.dir + e.boost;
          e.boost *= 0.93;
        }
        // Repli dans [-half, 0) : la boucle est invisible dans les deux sens.
        e.x = (((e.x % e.half) + e.half) % e.half) - e.half;
        e.delta += ((e.x - before) - e.delta) * 0.25;
        const skew = clamp(e.delta * 0.5, -7, 7);
        e.rail.style.transform = `translate3d(${e.x.toFixed(2)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;

        // Courbe de présentation : au centre la carte fait face, sur les bords
        // elle se détourne. L'angle suit donc la carte pendant sa traversée.
        e.items.forEach((it) => {
          if (!it.w) return;
          const sx = it.left + e.x + it.w / 2;
          const t = clamp((sx - innerWidth / 2) / (innerWidth * 0.7), -1, 1);
          it.el.style.transform =
            `perspective(1100px) rotateY(${(-t * 17 + it.hx).toFixed(2)}deg)` +
            ` rotateX(${it.hy.toFixed(2)}deg) translateZ(${it.on ? 30 : 0}px)`;
        });
      });
      raf(drive);
    };
    raf(drive);

    // Le scroll pousse les rails dans leur sens de marche.
    let prevY = scrollY;
    on(window, "scroll", () => {
      const d = scrollY - prevY;
      prevY = scrollY;
      engines.forEach((e) => (e.boost += clamp(d * 0.09, -14, 14) * e.dir));
    }, { passive: true });
  }

  /* -------------------------------- bande d'études de cas : glissé ------- */
  const strip = $(".cases__strip");
  if (strip && !REDUCED) {
    let dragging = false, px = 0, travelled = 0;
    on(strip, "pointerdown", (ev) => {
      dragging = true; px = ev.clientX; travelled = 0;
      strip.classList.add("is-dragging");
      strip.setPointerCapture(ev.pointerId);
    });
    on(strip, "pointermove", (ev) => {
      if (!dragging) return;
      const d = ev.clientX - px;
      travelled += Math.abs(d);
      strip.scrollLeft -= d;
      px = ev.clientX;
    });
    const end = (ev) => {
      if (!dragging) return;
      dragging = false;
      strip.classList.remove("is-dragging");
      try { strip.releasePointerCapture(ev.pointerId); } catch {}
    };
    on(strip, "pointerup", end);
    on(strip, "pointercancel", end);
    // Au-delà de quelques pixels, c'était un glissé : on n'ouvre pas l'étude.
    on(strip, "click", (ev) => { if (travelled > 8) ev.preventDefault(); }, true);
  }

  /* ------------------------------------------- cartes inclinables (3D) --- */
  // Repos : chaque carte d'un rail garde un léger angle, comme posée sur une
  // étagère. Survol : elle s'oriente vers le curseur.
  const tilts = $$("[data-tilt]").filter((el) => !el.closest(".band__rail"));
  if (!REDUCED && FINE) {
    tilts.forEach((el) => {
      // L'angle de repos se calcule sur la rangée, pas sur le parent direct :
      // sinon une image seule dans sa carte ne reçoit aucun angle d'étagère.
      const row = el.closest(".band__rail, .cases__strip, .method__body, .team__grid") || el.parentElement;
      const peers = row ? [...row.querySelectorAll("[data-tilt]")] : [el];
      const idx = peers.indexOf(el);
      const base = peers.length > 1 ? (idx - (peers.length - 1) / 2) * -3.4 : 0;
      const rest = () => `perspective(1100px) rotateY(${base.toFixed(2)}deg)`;
      el.style.transform = rest();

      on(el, "pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform 0.12s linear";
        el.style.transform =
          `perspective(1100px) rotateY(${(base + nx * 13).toFixed(2)}deg)` +
          ` rotateX(${(-ny * 9).toFixed(2)}deg) translateZ(26px) scale(1.02)`;
      });

      on(el, "pointerleave", () => {
        el.style.transition = "";
        el.style.transform = rest();
      });
    });
  }

  /* ----------------------------------------------------------- cookies -- */
  const cookie = $("#cookie");
  if (cookie && !localStorage.getItem("smpl-cookies")) {
    setTimeout(() => (cookie.hidden = false), 1400);
  }
  on($("#cookie-ok"), "click", () => {
    localStorage.setItem("smpl-cookies", "1");
    cookie.hidden = true;
  });

  return () => {
    alive = false;
    ac.abort();
    ios.forEach((o) => o.disconnect());
  };
}

/* Simplement — maquette v2 · comportements des pages intérieures
   (filtres, assistant de rendez-vous, formulaire). Zéro dépendance. */
export function initPages() {
  "use strict";
  // --- infrastructure de nettoyage (réexécution à chaque navigation) ---
  const ac = new AbortController();
  const signal = ac.signal;
  let alive = true;
  const ios = [];
  const raf = (cb) => { if (alive) return requestAnimationFrame(cb); return 0; };
  const on = (t, ...a) => {
    if (!t) return;
    t.addEventListener(...a);
    signal.addEventListener("abort", () => t.removeEventListener(a[0], a[1], a[2]), { once: true });
  };
  const trackIO = (...a) => { const o = new IntersectionObserver(...a); ios.push(o); return o; };


  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ------------------------------------------------------------ filtres -- */
  $$("[data-filter-group]").forEach((group) => {
    const buttons = $$(".filter", group);
    const items = $$("[data-tags]", document);
    buttons.forEach((btn) => {
      on(btn, "click", () => {
        buttons.forEach((b) => {
          b.classList.toggle("is-on", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        const f = btn.dataset.filter;
        items.forEach((it) => {
          const show = f === "all" || it.dataset.tags.split(" ").includes(f);
          it.classList.toggle("is-out", !show);
        });
      });
    });
  });

  /* ----------------------------------- rail des réalisations (scrollspy) - */
  const wnav = $(".wnav");
  if (wnav) {
    const links = $$("a", wnav);
    const spy = trackIO(
      (es) => es.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = "#" + en.target.id;
        links.forEach((l) => l.classList.toggle("is-on", l.getAttribute("href") === id));
      }),
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    $$(".plate[id]").forEach((pl) => spy.observe(pl));
  }

  /* -------------------------------------------------- formulaire contact - */
  const form = $("#contact-form");
  if (form) {
    on(form, "submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      const ok = document.createElement("div");
      ok.className = "form-ok";
      ok.innerHTML = "<strong>Message envoyé</strong><span>Maquette : l'envoi est simulé. En production, vous recevriez une réponse sous 24h.</span>";
      form.after(ok);
      ok.focus?.();
    });
  }

  /* -------------------------------------------- assistant de rendez-vous - */
  const wizard = $("#wizard");
  if (wizard) {
    const panels = $$(".wpanel", wizard);
    const progress = $$(".wizard-progress button", wizard);
    const state = { need: "", day: "", slot: "", mode: "" };

    const goto = (n) => {
      panels.forEach((p) => (p.hidden = +p.dataset.step !== n));
      progress.forEach((b, i) => {
        b.classList.toggle("is-on", i + 1 === n);
        b.disabled = i + 1 > n;
        b.setAttribute("aria-current", i + 1 === n ? "step" : "false");
      });
      const recap = $("#recap", wizard);
      if (recap && n === 3) {
        recap.innerHTML =
          `Récap : <b>${state.need || "—"}</b> · <b>${state.day || "—"} ${state.slot || ""}</b> · <b>${state.mode || "—"}</b>`;
      }
      wizard.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };

    progress.forEach((b, i) => on(b, "click", () => !b.disabled && goto(i + 1)));

    $$("[data-next]", wizard).forEach((b) =>
      on(b, "click", () => {
        const cur = +b.closest(".wpanel").dataset.step;
        if (cur === 1) {
          const sel = $('input[name="need"]:checked', wizard);
          if (!sel) { $('input[name="need"]', wizard).focus(); return; }
          state.need = sel.closest(".need").querySelector("strong").textContent;
        }
        if (cur === 2) {
          const mode = $('input[name="mode"]:checked', wizard);
          if (!state.slot || !mode) return;
          state.mode = mode.parentElement.textContent.trim();
        }
        goto(cur + 1);
      })
    );
    $$("[data-back]", wizard).forEach((b) =>
      on(b, "click", () => goto(+b.closest(".wpanel").dataset.step - 1))
    );

    $$(".day", wizard).forEach((d) =>
      on(d, "click", () => {
        $$(".day", wizard).forEach((x) => { x.classList.toggle("is-on", x === d); x.setAttribute("aria-selected", String(x === d)); });
        state.day = d.textContent.trim().replace(/\s+/g, " ");
      })
    );
    $$(".slot", wizard).forEach((sl) =>
      on(sl, "click", () => {
        $$(".slot", wizard).forEach((x) => { x.classList.toggle("is-on", x === sl); x.setAttribute("aria-pressed", String(x === sl)); });
        state.slot = sl.textContent.trim();
      })
    );

    on($("#wizard-form", wizard), "submit", (e) => {
      e.preventDefault();
      const f = e.target;
      if (!f.reportValidity()) return;
      panels.forEach((p) => (p.hidden = true));
      $("#wizard-done", wizard).hidden = false;
      progress.forEach((b) => { b.classList.remove("is-on"); b.disabled = true; });
    });
  }

  return () => {
    alive = false;
    ac.abort();
    ios.forEach((o) => o.disconnect());
  };
}
