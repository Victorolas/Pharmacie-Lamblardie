import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orthopédie, Homéopathie, Maintien à domicile — Pharmacie Lamblardie",
  description:
    "Spécialisations de la Pharmacie Lamblardie : orthopédie et petit appareillage (DU), homéopathie (DU), location de matériel médical pour maintien à domicile.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-brand-bg text-brand text-sm font-semibold px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

export default function SpecialisationsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-3">Nos spécialisations</h1>
      <p className="text-ink-muted mb-12 leading-relaxed">
        La pharmacie dispose de compétences spécialisées, avec des diplômes
        universitaires en orthopédie et en homéopathie.
      </p>

      {/* Section 1 */}
      <section className="mb-12">
        <Badge>Diplôme Universitaire</Badge>
        <h2 className="text-xl font-bold text-ink mb-4">Orthopédie & petit appareillage</h2>
        <p className="text-ink leading-relaxed mb-3">
          Notre pharmacien titulaire est diplômé en orthopédie pratique et petit
          appareillage. Il vous reçoit directement au comptoir pour tout ce qui
          concerne la compression veineuse, les bas de contention, les orthèses
          et le petit appareillage médical.
        </p>
        <p className="text-ink leading-relaxed">
          En cas d'insuffisance veineuse ou d'œdèmes des membres inférieurs,
          nous vous recommandons de passer de préférence le matin.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <Badge>Diplôme Universitaire — Bruno Bénichou</Badge>
        <h2 className="text-xl font-bold text-ink mb-4">Homéopathie & médecines complémentaires</h2>
        <p className="text-ink leading-relaxed mb-3">
          L'un de nos pharmaciens assistants, Bruno Bénichou, est titulaire du
          Diplôme Universitaire d'homéopathie. Il vous accompagne dans le choix
          d'une approche complémentaire à votre traitement habituel : homéopathie,
          phytothérapie, aromathérapie, micronutrition.
        </p>
        <p className="text-ink leading-relaxed">
          Toutes les spécialités Boiron sont disponibles en officine.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <Badge>Location & achat</Badge>
        <h2 className="text-xl font-bold text-ink mb-4">Location & maintien à domicile</h2>
        <p className="text-ink leading-relaxed mb-3">
          La Pharmacie Lamblardie met à votre disposition un large choix de
          matériel médical pour faciliter votre vie à domicile ou organiser un
          retour après hospitalisation : fauteuil roulant, lit médicalisé,
          déambulateur, dispositifs de compression.
        </p>
        <p className="text-ink leading-relaxed">
          Nous vous accompagnons dans le choix du matériel adapté à votre
          situation et aux prescriptions de votre médecin.
        </p>
      </section>
    </div>
  );
}
