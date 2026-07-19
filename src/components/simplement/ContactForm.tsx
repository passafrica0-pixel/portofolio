"use client";

import { useState, type FormEvent } from "react";
import { contactNeedOptions } from "@/lib/simplement/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 2200);
  };

  return (
    <form action="#" method="post" id="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="lastname">Nom *</label>
          <input id="lastname" name="lastname" required autoComplete="family-name" />
        </div>
        <div className="field">
          <label htmlFor="firstname">Prénom *</label>
          <input id="firstname" name="firstname" required autoComplete="given-name" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="need">Votre projet *</label>
        <select id="need" name="need" required defaultValue="">
          <option value="">Choisir…</option>
          {contactNeedOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Objectifs, délai, budget indicatif…"
        />
      </div>
      <button className="btn btn--primary" type="submit" disabled={sent}>
        {sent ? "Message envoyé ✓" : "Envoyer"}
      </button>
      <p className="form-note">
        En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre demande.
      </p>
    </form>
  );
}
