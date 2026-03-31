import type { Metadata } from "next";
import TeamMember from "@/components/TeamMember";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Notre équipe — Pharmacie Lamblardie Paris 12e",
  description:
    "Rencontrez l'équipe de la Pharmacie Lamblardie : pharmaciens titulaire et assistants, préparatrices, tous à votre service dans le quartier Daumesnil.",
};

export default function EquipePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-4">Notre équipe</h1>
      <p className="text-ink-muted leading-relaxed mb-10 max-w-2xl">
        La Pharmacie Lamblardie est composée de sept personnes à votre service
        au quotidien. Vous retrouvez toujours les mêmes visages derrière le comptoir.
        L'ensemble du personnel est formé en continu : allopathie, phytothérapie,
        homéopathie, aromathérapie, orthopédie et maintien à domicile.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <TeamMember key={i} {...member} />
        ))}
      </div>
    </div>
  );
}
