import DoctolibButton from "./DoctolibButton";

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-bold text-lg mb-2">Pharmacie Lamblardie</p>
          <address className="not-italic text-sm text-white/80 leading-relaxed">
            6 rue Lamblardie<br />
            75012 Paris
          </address>
          <a
            href="tel:0143438797"
            className="mt-3 inline-block text-white font-semibold hover:text-brand-bg transition-colors"
          >
            01 43 43 87 97
          </a>
        </div>
        <div>
          <p className="font-bold mb-2">Horaires</p>
          <ul className="text-sm text-white/80 leading-relaxed space-y-1">
            <li>Lun – Ven : 9h00 – 20h00</li>
            <li>Samedi : 9h30 – 19h30</li>
            <li className="text-white/60 italic">Ouverte toute l'année</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <DoctolibButton variant="footer" />
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/50 py-4 px-4">
        © {new Date().getFullYear()} Pharmacie Lamblardie — 6 rue Lamblardie, 75012 Paris
      </div>
    </footer>
  );
}
