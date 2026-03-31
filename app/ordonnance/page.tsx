import type { Metadata } from "next";
import OrdonnanceForm from "./OrdonnanceForm";

export const metadata: Metadata = {
  title: "Envoyer une ordonnance — Pharmacie Lamblardie Paris 12e",
  description:
    "Transmettez votre ordonnance à l'avance à la Pharmacie Lamblardie. Nous préparons votre commande avant votre passage.",
};

export default function OrdonnancePage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-3">Envoyer une ordonnance</h1>
      <p className="text-ink-muted leading-relaxed mb-8">
        Vous renouvelez régulièrement un traitement ? Vous pouvez nous transmettre
        votre ordonnance à l'avance par ce formulaire. Nous préparerons votre
        commande avant votre passage en officine.
        <br className="hidden sm:block" />
        <span className="block mt-2">
          Un membre de notre équipe vous contactera par téléphone pour confirmer
          la disponibilité des médicaments.
        </span>
      </p>
      <OrdonnanceForm />
    </div>
  );
}
