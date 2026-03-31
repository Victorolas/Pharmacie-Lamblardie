interface CallButtonProps {
  variant?: "header" | "hero";
}

export default function CallButton({ variant = "hero" }: CallButtonProps) {
  if (variant === "header") {
    return (
      <a
        href="tel:0143438797"
        className="inline-flex items-center justify-center min-h-[48px] px-4 rounded-lg bg-white text-brand text-sm font-bold hover:bg-brand-bg transition-colors"
      >
        APPELER
      </a>
    );
  }

  return (
    <a
      href="tel:0143438797"
      className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-lg bg-brand text-white text-lg font-bold hover:bg-brand-light transition-colors"
    >
      APPELER — 01 43 43 87 97
    </a>
  );
}
