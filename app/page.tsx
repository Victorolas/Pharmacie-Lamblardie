import type { Metadata } from "next";
import Link from "next/link";
import CallButton from "@/components/CallButton";
import DoctolibButton from "@/components/DoctolibButton";

export const metadata: Metadata = {
  title: "Pharmacie Lamblardie — Paris 12e, Métro Daumesnil | Lun-Ven 9h-20h",
  description:
    "Pharmacie Lamblardie, 6 rue Lamblardie 75012 Paris. Orthopédie, homéopathie, location matériel médical. Ouvert Lun-Ven 9h-20h, Sam 9h30-19h30.",
};

const schemajson = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: "Pharmacie Lamblardie",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 rue Lamblardie",
    postalCode: "75012",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  telephone: "+33143438797",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:30", closes: "19:30" },
  ],
};

const specialisations = [
  {
    title: "Orthopédie & petit appareillage",
    desc: "Diplôme Universitaire. Compression veineuse, bas de contention, orthèses et petit appareillage médical.",
  },
  {
    title: "Homéopathie & médecines complémentaires",
    desc: "Diplôme Universitaire. Homéopathie, phytothérapie, aromathérapie, micronutrition.",
  },
  {
    title: "Location & maintien à domicile",
    desc: "Fauteuil roulant, lit médicalisé, déambulateur. Accompagnement personnalisé.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemajson) }}
      />

      {/* Hero */}
      <section className="bg-brand-bg px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            Pharmacie Lamblardie
          </h1>
          <p className="text-ink-muted text-lg mb-2">
            6 rue Lamblardie · Paris 12<sup>e</sup> · Métro Daumesnil
          </p>
          <p className="text-ink-muted mb-8">
            Lun–Ven 9h–20h · Sam 9h30–19h30 · Ouverte toute l'année
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton variant="hero" />
            <DoctolibButton variant="hero" />
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-ink mb-4">Votre pharmacie de quartier</h2>
          <p className="text-ink leading-relaxed">
            La Pharmacie Lamblardie est au service des habitants du quartier Daumesnil
            depuis de nombreuses années. Notre équipe — pharmaciens, préparatrices —
            assure la délivrance de vos médicaments, le suivi de vos traitements et
            vous apporte des conseils adaptés à votre situation.
          </p>
          <p className="text-ink leading-relaxed mt-4">
            Nous proposons des entretiens pharmaceutiques pour les patients sous
            anticoagulants, asthmatiques ou diabétiques. N'hésitez pas à nous solliciter.
          </p>
        </div>
      </section>

      {/* Spécialisations */}
      <section className="bg-brand-page px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">Nos spécialisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialisations.map((s) => (
              <Link
                key={s.title}
                href="/specialisations"
                className="block bg-white border border-brand-border rounded-xl p-6 hover:border-brand hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-brand text-sm font-semibold">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-ink mb-6 text-center">Nous trouver</h2>
          <div className="rounded-xl overflow-hidden border border-brand-border">
            <iframe
              title="Pharmacie Lamblardie — Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8!2d2.3966!3d48.8372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720a!2s6+Rue+Lamblardie%2C+75012+Paris!5e0!3m2!1sfr!2sfr"
              width="100%"
              className="h-[300px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Ordonnance */}
      <section className="bg-brand-bg px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-ink mb-4">Envoyez votre ordonnance à l'avance</h2>
          <p className="text-ink-muted mb-8 leading-relaxed">
            Vous renouvelez régulièrement un traitement ? Transmettez votre ordonnance
            à l'avance, nous la préparons avant votre passage.
          </p>
          <Link
            href="/ordonnance"
            className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-lg bg-brand text-white text-base font-bold hover:bg-brand-light transition-colors"
          >
            Envoyer une ordonnance
          </Link>
        </div>
      </section>
    </>
  );
}
