"use client";

import { useEffect } from "react";

export function useDashboardRuntime() {
  useEffect(() => {

  /* ——— Toast ——— */
  const ensureToastStack = () => {
    let stack = document.querySelector(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      stack.setAttribute("aria-live", "polite");
      document.body.appendChild(stack);
    }
    return stack;
  };

  const toast = (message, type = "info") => {
    const stack = ensureToastStack();
    const el = document.createElement("div");
    el.className = `toast toast--${type}`;
    el.textContent = message;
    stack.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      el.style.transition = "opacity 0.2s, transform 0.2s";
      setTimeout(() => el.remove(), 220);
    }, 2800);
  };

  /* ——— Speech / voice ——— */
  const canSpeak = "speechSynthesis" in window;
  let speaking = false;

  const pickVoice = (preferFemale = true) => {
    const voices = speechSynthesis.getVoices();
    const fr = voices.filter((v) => /fr(-|_|$)/i.test(v.lang));
    if (!fr.length) return null;
    if (preferFemale) {
      return (
        fr.find((v) => /female|hortense|google français|thomas|amelie|marie|léa|lea/i.test(v.name)) ||
        fr[0]
      );
    }
    return fr.find((v) => /male|paul|thomas|google/i.test(v.name)) || fr[0];
  };

  const stopVoice = () => {
    if (canSpeak) speechSynthesis.cancel();
    speaking = false;
    document.querySelectorAll(".wave").forEach((w) => {
      w.classList.add("is-muted");
      w.classList.remove("is-speaking");
    });
    document.querySelectorAll(".bubble.is-speaking").forEach((b) => b.classList.remove("is-speaking"));
    const status = document.getElementById("voice-status");
    const line = document.getElementById("voice-line");
    const playBtn = document.getElementById("btn-play-call");
    const stopBtn = document.getElementById("btn-stop-call");
    if (status) status.textContent = "Voix en pause";
    if (line) line.textContent = "Cliquez « Écouter l’appel » pour entendre Nova + le client.";
    if (playBtn) playBtn.hidden = false;
    if (stopBtn) stopBtn.hidden = true;
  };

  const speak = (text, { rate = 1.05, pitch = 1, female = true, onstart, onend } = {}) =>
    new Promise((resolve) => {
      if (!canSpeak) {
        toast("Synthèse vocale indisponible sur ce navigateur.", "warn");
        resolve();
        return;
      }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      u.rate = rate;
      u.pitch = pitch;
      const voice = pickVoice(female);
      if (voice) u.voice = voice;
      u.onstart = () => {
        speaking = true;
        onstart?.();
      };
      u.onend = () => {
        speaking = false;
        onend?.();
        resolve();
      };
      u.onerror = () => {
        speaking = false;
        onend?.();
        resolve();
      };
      speechSynthesis.speak(u);
    });

  // Chrome loads voices async
  if (canSpeak) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }

  const callScript = [
    {
      who: "bot",
      text: "Bonjour Marc, je suis Nova pour le suivi de votre colis. Vous appelez pour le F R 88421, c’est bien ça ?",
      label: "Nova",
    },
    {
      who: "user",
      text: "Oui — il est bloqué à Lyon depuis mardi, c’est n’importe quoi.",
      label: "Marc",
      female: false,
      pitch: 0.85,
      rate: 1.08,
    },
    {
      who: "bot",
      text: "Je regarde le tracking. Statut Chronopost : en transit, hub Lyon. D’après notre procédure, je lance une relance aujourd’hui.",
      label: "Nova",
    },
    {
      who: "user",
      text: "Et si ça n’arrive pas demain ? Je veux un geste.",
      label: "Marc",
      female: false,
      pitch: 0.85,
    },
    {
      who: "bot",
      text: "Si le colis n’est pas mis à jour sous 24 heures, je peux proposer un avoir de 10 pour cent, dans la limite de 15 euros. Je reste avec vous.",
      label: "Nova",
    },
  ];

  const setWaveSpeaking = (on) => {
    const wave = document.getElementById("call-wave") || document.getElementById("preview-wave");
    if (!wave) return;
    wave.classList.toggle("is-speaking", on);
    wave.classList.toggle("is-muted", !on);
  };

  const playCall = async () => {
    if (!canSpeak) {
      toast("Impossible de lire la voix ici — essayez Chrome ou Edge.", "danger");
      return;
    }
    stopVoice();
    const playBtn = document.getElementById("btn-play-call");
    const stopBtn = document.getElementById("btn-stop-call");
    const status = document.getElementById("voice-status");
    const line = document.getElementById("voice-line");
    if (playBtn) playBtn.hidden = true;
    if (stopBtn) stopBtn.hidden = false;
    if (status) status.textContent = "Lecture en cours…";
    toast("Lecture de l’appel (synthèse vocale fr-FR)", "ok");

    const bubbles = [...document.querySelectorAll("#transcript .bubble")];

    for (let i = 0; i < callScript.length; i++) {
      if (window.__voiceAbort) break;
      const turn = callScript[i];
      if (line) line.textContent = `${turn.label} parle…`;
      bubbles.forEach((b, idx) => b.classList.toggle("is-speaking", idx === i));
      await speak(turn.text, {
        female: turn.female !== false,
        pitch: turn.pitch ?? (turn.who === "bot" ? 1.05 : 0.85),
        rate: turn.rate ?? 1.05,
        onstart: () => setWaveSpeaking(true),
        onend: () => setWaveSpeaking(false),
      });
      await new Promise((r) => setTimeout(r, 280));
    }

    window.__voiceAbort = false;
    bubbles.forEach((b) => b.classList.remove("is-speaking"));
    stopVoice();
    toast("Fin de l’extrait d’appel", "info");
  };

  const playPreview = async () => {
    stopVoice();
    toast("Nova lit un extrait…", "ok");
    const wave = document.getElementById("preview-wave");
    await speak(
      "Je vérifie le tracking. D’après le script livraison, une relance Chronopost part aujourd’hui.",
      {
        onstart: () => {
          wave?.classList.add("is-speaking");
          wave?.classList.remove("is-muted");
        },
        onend: () => {
          wave?.classList.remove("is-speaking");
          wave?.classList.add("is-muted");
        },
      },
    );
  };

  const ttsEditor = async () => {
    const body = document.getElementById("editor-body");
    if (!body) return;
    const text = body.innerText.replace(/\s+/g, " ").trim().slice(0, 420);
    if (!text) {
      toast("Rien à lire dans l’éditeur.", "warn");
      return;
    }
    stopVoice();
    toast("Lecture TTS du contenu sélectionné", "ok");
    await speak(text, { rate: 1 });
  };

  /* ——— Shell ——— */
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuBtn = document.getElementById("menu-btn");
  const clock = document.getElementById("clock");

  const closeSidebar = () => {
    sidebar?.classList.remove("is-open");
    backdrop?.classList.remove("is-on");
  };

  menuBtn?.addEventListener("click", () => {
    const open = sidebar?.classList.toggle("is-open");
    backdrop?.classList.toggle("is-on", Boolean(open));
  });
  backdrop?.addEventListener("click", closeSidebar);

  document.querySelectorAll(".side-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 860px)").matches) closeSidebar();
    });
  });

  const tick = () => {
    if (!clock) return;
    clock.textContent = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  tick();
  setInterval(tick, 1000);

  /* ——— Call chips ——— */
  document.querySelectorAll(".call-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".call-chip").forEach((c) => c.classList.remove("is-on"));
      chip.classList.add("is-on");
      const name = chip.querySelector("strong")?.textContent || "Appel";
      toast(`Appel sélectionné : ${name}`, "info");
    });
  });

  /* SLA heatmap */
  const sla = document.getElementById("sla-grid");
  if (sla && !sla.children.length) {
    const pattern = ["ok", "ok", "ok", "mid", "ok", "ok", "mid", "bad", "mid", "ok", "ok", "ok"];
    for (let h = 0; h < 12; h++) {
      for (let r = 0; r < 3; r++) {
        const cell = document.createElement("i");
        cell.className = pattern[(h + r * 3) % pattern.length];
        cell.title = `${8 + h}h`;
        sla.appendChild(cell);
      }
    }
  }

  /* Call timer */
  const callTimer = document.getElementById("call-timer");
  if (callTimer) {
    let seconds = 3 * 60 + 42;
    setInterval(() => {
      seconds += 1;
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      callTimer.textContent = `● ${m}:${s}`;
    }, 1000);
  }

  /* ——— Contenu docs + editor ——— */
  const docs = {
    "faq-retours": {
      title: "FAQ · Retours 30 jours",
      speak:
        "Bien sûr, notre politique de retours couvre 30 jours après réception. Pour les commandes hors U E, les frais de retour restent à la charge du client, sauf défaut produit.",
      html: `
        <p class="line"><strong>Ouverture (voix)</strong> — « Bien sûr, notre politique de retours couvre 30 jours après réception. »</p>
        <p class="line line--ai"><strong>Nouveau · international</strong> — « Pour les commandes hors UE, les frais de retour restent à la charge du client, sauf défaut produit. »</p>
        <p class="line">« Je peux vous envoyer l’étiquette par SMS — vous préférez ça ? »</p>
        <p class="line line--warn"><strong>Alerte conformité</strong> — Ne jamais promettre un remboursement sous 24h.</p>`,
    },
    "macro-excuse": {
      title: "Macro · Excuse courte",
      speak: "Je comprends la frustration — on va régler ça ensemble, étape par étape.",
      html: `
        <p class="line line--ai">« Je comprends la frustration — on va régler ça ensemble, étape par étape. »</p>
        <p class="line">Variante B : « Merci d’avoir patienté, voici ce que je peux faire immédiatement… »</p>`,
    },
    "script-cb": {
      title: "Script · Litige CB v2",
      speak: "Je vérifie le statut du paiement 3 D Secure sur votre commande.",
      html: `
        <p class="line line--warn"><strong>QA</strong> — L’ouverture saute l’excuse. Insérer la macro empathie avant le diagnostic.</p>
        <p class="line">« Je vérifie le statut du paiement 3D Secure sur votre commande… »</p>
        <p class="line line--ai">Si échec confirmé → proposer nouvel essai ou virement sous 48h.</p>`,
    },
    "delay-v3": {
      title: "Script · Delay v3",
      speak: "Je regarde le tracking. Si le hub est bloqué plus de 48 heures, je lance une relance et un avoir de 10 pour cent.",
      html: `
        <p class="line">« Je regarde le tracking en direct… »</p>
        <p class="line line--ai">Si hub bloqué &gt; 48h → relance transporteur + avoir 10% (plafond 15€).</p>
        <p class="line">Ne pas citer les promos périmées.</p>`,
    },
    geste: {
      title: "Macro · Geste ≤ 15€",
      speak: "Je peux vous proposer un geste commercial dans la limite de 15 euros.",
      html: `<p class="line line--ai">Plafond geste 15€ · jamais de remboursement total sans humain.</p>`,
    },
    colissimo: {
      title: "FAQ · Suivi Colissimo",
      speak: "Votre colis Colissimo est suivi en ligne. Je vous envoie le lien par SMS.",
      html: `<p class="line">Lien tracking + délais standards 48 à 72 heures.</p>`,
    },
    "promo-ete": {
      title: "Script · Promo été",
      speak: "Attention : cette promotion été est close. Ne plus la lire à l’oral.",
      html: `
        <p class="line line--warn"><strong>À retirer</strong> — Offre close. 14 lectures orales aujourd’hui.</p>
        <p class="line">Action : purger des prompts Nova + Atlas avant 18h.</p>`,
    },
  };

  const editorTitle = document.getElementById("editor-title");
  const editorBody = document.getElementById("editor-body");
  let activeDoc = "faq-retours";

  const openDoc = (id) => {
    const doc = docs[id];
    if (!doc || !editorTitle || !editorBody) return;
    activeDoc = id;
    editorTitle.textContent = doc.title;
    editorBody.innerHTML = doc.html;
    document.querySelectorAll(".k-card").forEach((c) => {
      c.classList.toggle("is-on", c.dataset.doc === id);
    });
  };

  document.querySelectorAll(".k-card[data-doc]").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("is-dragging")) return;
      openDoc(card.dataset.doc);
    });
  });

  /* ——— Kanban drag & drop ——— */
  const refreshCounts = () => {
    document.querySelectorAll(".kanban-col").forEach((col) => {
      const body = col.querySelector(".kanban-col__body");
      const badge = col.querySelector("[data-count]");
      if (body && badge) badge.textContent = String(body.querySelectorAll(".k-card").length);
    });
  };

  const columnLabels = {
    draft: "Draft",
    review: "En revue",
    published: "Publié",
    deprecated: "Déprécié",
  };

  let dragCard = null;

  document.querySelectorAll(".kanban-col__body").forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("is-drop-target");
      e.dataTransfer.dropEffect = "move";
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("is-drop-target"));
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("is-drop-target");
      if (!dragCard) return;
      zone.appendChild(dragCard);
      dragCard.classList.remove("is-dragging");
      const col = zone.dataset.column;
      toast(`« ${dragCard.querySelector("h3")?.textContent || "Carte"} » → ${columnLabels[col] || col}`, "ok");
      refreshCounts();
      dragCard = null;
    });
  });

  document.querySelectorAll(".k-card[draggable]").forEach((card) => {
    card.addEventListener("dragstart", (e) => {
      dragCard = card;
      card.classList.add("is-dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", card.dataset.doc || "");
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      document.querySelectorAll(".kanban-col__body").forEach((z) => z.classList.remove("is-drop-target"));
    });
  });

  /* ——— Button actions ——— */
  const moveActiveCardTo = (column) => {
    const card = document.querySelector(`.k-card[data-doc="${activeDoc}"]`);
    const zone = document.querySelector(`.kanban-col__body[data-column="${column}"]`);
    if (!card || !zone) {
      toast("Carte introuvable dans le kanban.", "warn");
      return;
    }
    zone.appendChild(card);
    refreshCounts();
    toast(`Statut mis à jour → ${columnLabels[column]}`, "ok");
  };

  const actions = {
    "play-call": () => {
      window.__voiceAbort = false;
      playCall();
    },
    "stop-voice": () => {
      window.__voiceAbort = true;
      stopVoice();
      toast("Lecture stoppée", "warn");
    },
    "play-preview": () => playPreview(),
    "tts-editor": () => ttsEditor(),
    whisper: () => toast("Mode chuchotement : message privé envoyé à Nova (simulation).", "info"),
    barge: () => {
      window.__voiceAbort = true;
      stopVoice();
      toast("Barge-in : vous êtes en conférence avec le client.", "warn");
      speak("Bonjour Marc, Léa de Relais prend la conversation avec vous.", { pitch: 1.1 });
    },
    takeover: () => {
      window.__voiceAbort = true;
      stopVoice();
      toast("Vous avez pris la main — Nova est en mute.", "ok");
      const status = document.getElementById("voice-status");
      if (status) status.textContent = "Humain en ligne";
    },
    "pause-ivr": () => toast("IVR promo mis en pause sur tous les skills.", "warn"),
    "force-escalate": () => {
      toast("Escalade forcée : appel poussé vers la file humaine.", "danger");
      const esc = document.querySelector(".queue-col__head--esc")?.parentElement?.querySelector(".queue-col__body");
      const active = document.querySelector(".call-chip.is-on");
      if (esc && active) {
        esc.prepend(active);
        toast("Chip déplacé dans Escalade", "info");
      }
    },
    "import-faq": () => toast("Import FAQ : 12 articles détectés (simulation).", "info"),
    "generate-script": () => {
      toast("Génération d’un script SAV…", "info");
      setTimeout(() => {
        const zone = document.querySelector('[data-column="draft"]');
        if (!zone) return;
        const card = document.createElement("article");
        card.className = "k-card";
        card.draggable = true;
        card.dataset.doc = `gen-${Date.now()}`;
        card.innerHTML = `<h3>Script · Généré à l’instant</h3><p>Brouillon IA — à relire avant revue.</p><div class="k-card__foot"><span class="badge badge--content">Draft</span></div>`;
        zone.prepend(card);
        card.addEventListener("dragstart", (e) => {
          dragCard = card;
          card.classList.add("is-dragging");
          e.dataTransfer.effectAllowed = "move";
        });
        card.addEventListener("dragend", () => card.classList.remove("is-dragging"));
        card.addEventListener("click", () => toast("Ouvrez un contenu existant pour l’éditeur détaillé.", "info"));
        refreshCounts();
        toast("Nouveau script ajouté dans Draft", "ok");
      }, 600);
    },
    "publish-selection": () => {
      const selected = document.querySelector(".k-card.is-on");
      if (!selected) {
        toast("Sélectionnez une carte d’abord.", "warn");
        return;
      }
      activeDoc = selected.dataset.doc;
      moveActiveCardTo("published");
    },
    "approve-doc": () => {
      moveActiveCardTo("review");
      toast("Contenu approuvé pour revue finale.", "ok");
    },
    "reject-doc": () => {
      moveActiveCardTo("draft");
      toast("Renvoyé en draft avec commentaire QA.", "warn");
    },
    "publish-doc": () => {
      moveActiveCardTo("published");
      toast("Injecté dans les prompts agents (simulation).", "ok");
      speak("Contenu publié. Les agents peuvent maintenant le lire à voix haute.", { rate: 1 });
    },
    "compare-v1": () => toast("Diff v1 ↔ courant : +1 paragraphe international, −2 formulations risquées.", "info"),
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const fn = actions[action];
    if (fn) fn();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSidebar();
      if (speaking) {
        window.__voiceAbort = true;
        stopVoice();
      }
    }
  });

  window.addEventListener("beforeunload", () => stopVoice());

    return () => {
      window.__voiceAbort = true;
      if ("speechSynthesis" in window) speechSynthesis.cancel();
    };
  }, []);
}
