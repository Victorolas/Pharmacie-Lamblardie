import Link from "next/link";
import CallButton from "./CallButton";
import DoctolibButton from "./DoctolibButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Barre principale */}
      <div className="bg-brand px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-white text-lg font-bold leading-tight flex-1 min-w-0"
          >
            Pharmacie Lamblardie
          </Link>
          <div className="flex items-center gap-2 flex-shrink-0">
            <CallButton variant="header" />
            <DoctolibButton variant="header" />
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="bg-brand-page border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex overflow-x-auto gap-1 py-2 text-sm font-medium">
            {[
              { href: "/",               label: "Accueil" },
              { href: "/equipe",         label: "Équipe" },
              { href: "/specialisations",label: "Spécialisations" },
              { href: "/ordonnance",     label: "Ordonnance" },
              { href: "/contact",        label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href} className="flex-shrink-0">
                <Link
                  href={href}
                  className="inline-block px-3 py-2 rounded-lg text-ink hover:bg-brand-bg hover:text-brand transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
