import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Horaires — Pharmacie Lamblardie Paris 12e",
  description:
    "Horaires, adresse et accès de la Pharmacie Lamblardie — 6 rue Lamblardie 75012 Paris. Métro Daumesnil (lignes 6 et 8).",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Contact & horaires</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Coordonnées */}
        <div className="bg-white rounded-xl border border-brand-border p-6">
          <h2 className="font-bold text-ink text-lg mb-4">Pharmacie Lamblardie</h2>
          <address className="not-italic text-ink-muted leading-relaxed space-y-2">
            <p>6 rue Lamblardie<br />75012 Paris</p>
            <p>
              <a
                href="tel:0143438797"
                className="text-brand font-semibold hover:text-brand-light transition-colors text-lg"
              >
                01 43 43 87 97
              </a>
            </p>
          </address>
          <div className="mt-4 pt-4 border-t border-brand-border">
            <p className="text-sm text-ink-muted">
              <strong className="text-ink">Accès :</strong><br />
              Métro Daumesnil (lignes 6 et 8)<br />
              Bus 29, 46, 64
            </p>
          </div>
        </div>

        {/* Horaires */}
        <div className="bg-white rounded-xl border border-brand-border p-6">
          <h2 className="font-bold text-ink text-lg mb-4">Horaires d'ouverture</h2>
          <ul className="space-y-3 text-ink">
            <li className="flex justify-between gap-4">
              <span className="text-ink-muted">Lun – Ven</span>
              <span className="font-semibold">9h00 – 20h00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-ink-muted">Samedi</span>
              <span className="font-semibold">9h30 – 19h30</span>
            </li>
          </ul>
          <p className="mt-4 pt-4 border-t border-brand-border text-sm text-brand font-semibold">
            Ouverte toute l'année sans interruption
          </p>
        </div>
      </div>

      {/* Carte */}
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
  );
}
