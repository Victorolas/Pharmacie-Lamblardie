interface DoctolibButtonProps {
  variant?: "header" | "hero" | "footer";
}

export default function DoctolibButton({ variant = "hero" }: DoctolibButtonProps) {
  const href = "https://www.doctolib.fr/pharmacie/paris/pharmacie-lamblardie";

  if (variant === "header") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center min-h-[48px] px-4 rounded-lg border border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors"
      >
        Doctolib
      </a>
    );
  }

  if (variant === "footer") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-lg border border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors"
      >
        Prendre rendez-vous sur Doctolib
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-lg border-2 border-brand text-brand text-base font-semibold hover:bg-brand-bg transition-colors"
    >
      Prendre rendez-vous sur Doctolib
    </a>
  );
}
