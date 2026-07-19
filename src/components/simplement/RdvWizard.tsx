"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | "done";

const dayLabels: Record<string, string> = {
  lun: "lundi 20 juillet",
  mar: "mardi 21 juillet",
  mer: "mercredi 22 juillet",
  jeu: "jeudi 23 juillet",
  ven: "vendredi 24 juillet",
};

const slotDays = [
  { id: "lun", label: "Lun", day: "20" },
  { id: "mar", label: "Mar", day: "21" },
  { id: "mer", label: "Mer", day: "22" },
  { id: "jeu", label: "Jeu", day: "23" },
  { id: "ven", label: "Ven", day: "24" },
];

const slotTimes = ["09:30", "10:30", "11:30", "14:00", "15:00", "16:30"];

const needOptions = [
  { value: "creation", title: "Création de site", desc: "Nouveau site vitrine ou e-commerce" },
  { value: "refonte", title: "Refonte", desc: "Moderniser et convertir davantage" },
  { value: "seo", title: "SEO", desc: "Visibilité Google & trafic qualifié" },
  { value: "ads", title: "Ads", desc: "Google Ads / Meta Ads" },
  { value: "ia", title: "Accompagnement IA", desc: "Audit & automatisation utile" },
  { value: "autre", title: "Autre / conseil", desc: "HubSpot, Shopify, maintenance…" },
];

export function RdvWizard() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDay, setSelectedDay] = useState("lun");
  const [need, setNeed] = useState("");
  const [slot, setSlot] = useState("");
  const [mode, setMode] = useState("visio");
  const [successMsg, setSuccessMsg] = useState(
    "Merci — vous recevrez un email de confirmation avec le lien ou le rappel d’appel.",
  );

  const needLabel = needOptions.find((o) => o.value === need)?.title || "—";
  const modeLabel =
    mode === "visio" ? "Visio (lien envoyé par email)" : "Téléphone";
  const recap = `${needLabel} · ${dayLabels[selectedDay] || selectedDay} à ${slot || "—"} · ${modeLabel}`;

  const goNext = () => {
    if (step === 1) {
      if (!need) return;
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!slot) return;
      setStep(3);
    }
  };

  const goBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleDayChange = (dayId: string) => {
    setSelectedDay(dayId);
    setSlot("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSuccessMsg(`Merci — ${recap}. Vous recevrez un email de confirmation (simulation maquette).`);
    setStep("done");
  };

  return (
    <div className="rdv-book" id="rdv-wizard">
      <div className="rdv-progress" aria-label="Étapes de réservation">
        {[1, 2, 3].map((n) => {
          const done = step !== "done" && n < step;
          const on = step !== "done" && n === step;
          return (
            <button
              key={n}
              type="button"
              className={`rdv-progress__step${on ? " is-on" : ""}${done ? " is-done" : ""}`}
              data-goto={n}
              aria-current={on ? "step" : undefined}
              disabled={step === "done" || (typeof step === "number" && n > step)}
              onClick={() => {
                if (typeof step === "number" && n <= step) setStep(n as Step);
              }}
            >
              <span>{n}</span> {n === 1 ? "Besoin" : n === 2 ? "Créneau" : "Coordonnées"}
            </button>
          );
        })}
      </div>

      <form id="rdv-form" action="#" method="post" noValidate onSubmit={handleSubmit}>
        <div className={`rdv-panel${step === 1 ? " is-on" : ""}`} data-step="1" hidden={step !== 1}>
          <h3>Quel est votre besoin ?</h3>
          <p className="muted">Sélectionnez le sujet principal de l’échange.</p>
          <div className="need-grid" role="radiogroup" aria-label="Type de besoin">
            {needOptions.map((opt) => (
              <label key={opt.value} className="need-option">
                <input
                  type="radio"
                  name="need"
                  value={opt.value}
                  required
                  checked={need === opt.value}
                  onChange={() => setNeed(opt.value)}
                />
                <span>
                  <strong>{opt.title}</strong>
                  <em>{opt.desc}</em>
                </span>
              </label>
            ))}
          </div>
          <div className="rdv-actions">
            <button type="button" className="btn btn--primary" data-next onClick={goNext}>
              Continuer
            </button>
          </div>
        </div>

        <div className={`rdv-panel${step === 2 ? " is-on" : ""}`} data-step="2" hidden={step !== 2}>
          <h3>Choisissez un créneau</h3>
          <p className="muted">
            Semaine du <span id="rdv-week-label">20 juil. 2026</span> · heure de Paris
          </p>

          <div className="slot-days" role="tablist" aria-label="Jours disponibles">
            {slotDays.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`slot-day${selectedDay === d.id ? " is-on" : ""}`}
                role="tab"
                aria-selected={selectedDay === d.id}
                onClick={() => handleDayChange(d.id)}
              >
                <span>{d.label}</span>
                <strong>{d.day}</strong>
              </button>
            ))}
          </div>

          <div className="slot-times" role="radiogroup" aria-label="Heures disponibles" id="slot-times">
            {slotTimes.map((time) => (
              <label key={time} className="slot-time">
                <input
                  type="radio"
                  name="slot"
                  value={time}
                  required
                  checked={slot === time}
                  onChange={() => setSlot(time)}
                />
                <span>{time}</span>
              </label>
            ))}
          </div>

          <div className="field" style={{ marginTop: "1.25rem" }}>
            <label htmlFor="mode">Mode d’échange *</label>
            <select id="mode" name="mode" required value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="visio">Visio (lien envoyé par email)</option>
              <option value="tel">Téléphone</option>
            </select>
          </div>

          <div className="rdv-actions">
            <button type="button" className="btn btn--ghost" data-back onClick={goBack}>
              Retour
            </button>
            <button type="button" className="btn btn--primary" data-next onClick={goNext}>
              Continuer
            </button>
          </div>
        </div>

        <div className={`rdv-panel${step === 3 ? " is-on" : ""}`} data-step="3" hidden={step !== 3}>
          <h3>Vos coordonnées</h3>
          <p className="muted">
            Récap : <strong id="rdv-recap">{recap}</strong>
          </p>
          <div className="field-row">
            <div className="field">
              <label htmlFor="rdv-name">Nom / entreprise *</label>
              <input id="rdv-name" name="name" required autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="rdv-email">Email *</label>
              <input id="rdv-email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="rdv-phone">Téléphone *</label>
            <input id="rdv-phone" name="phone" type="tel" required autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="rdv-context">Contexte (optionnel)</label>
            <textarea
              id="rdv-context"
              name="context"
              placeholder="Site actuel, objectifs, délai souhaité…"
            />
          </div>
          <div className="rdv-actions">
            <button type="button" className="btn btn--ghost" data-back onClick={goBack}>
              Retour
            </button>
            <button type="submit" className="btn btn--primary">
              Confirmer le rendez-vous
            </button>
          </div>
          <p className="form-note">Maquette : la confirmation est simulée — aucun envoi réel.</p>
        </div>

        <div
          className={`rdv-panel rdv-panel--done${step === "done" ? " is-on" : ""}`}
          data-step="done"
          hidden={step !== "done"}
        >
          <div className="rdv-success">
            <p className="chip">Confirmé</p>
            <h3>Rendez-vous enregistré</h3>
            <p className="muted" id="rdv-success-msg">
              {successMsg}
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/live/simplement">
                Retour à l’accueil
              </Link>
              <Link className="btn btn--ghost" href="/live/simplement/case-studies">
                Voir nos cas clients
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
