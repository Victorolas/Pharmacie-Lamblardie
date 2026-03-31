"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ID = "FORMSPREE_ID"; // Remplacer par votre ID Formspree

const inputClass =
  "w-full min-h-[48px] px-4 py-3 rounded-lg border border-brand-border bg-white text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-colors text-base";
const labelClass = "block text-sm font-semibold text-ink-muted mb-1";

export default function OrdonnanceForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-bg border border-brand-border rounded-xl p-8 text-center">
        <p className="text-brand font-bold text-lg mb-2">Demande envoyée ✓</p>
        <p className="text-ink-muted">
          Votre demande a bien été transmise. Nous vous contacterons par téléphone
          dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className={labelClass}>Nom *</label>
          <input id="nom" name="nom" type="text" required className={inputClass} placeholder="Dupont" />
        </div>
        <div>
          <label htmlFor="prenom" className={labelClass}>Prénom *</label>
          <input id="prenom" name="prenom" type="text" required className={inputClass} placeholder="Marie" />
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className={labelClass}>Téléphone *</label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          required
          className={inputClass}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="medicaments" className={labelClass}>Nom du ou des médicaments *</label>
        <textarea
          id="medicaments"
          name="medicaments"
          required
          rows={3}
          className={`${inputClass} min-h-[96px] resize-none`}
          placeholder="Ex : Doliprane 1000mg × 2 boîtes, Ventoline…"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message (optionnel)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={`${inputClass} min-h-[96px] resize-none`}
          placeholder="Informations complémentaires…"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Une erreur est survenue. Veuillez réessayer ou nous appeler au 01 43 43 87 97.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full min-h-[48px] rounded-lg bg-brand text-white font-bold text-base hover:bg-brand-light transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
