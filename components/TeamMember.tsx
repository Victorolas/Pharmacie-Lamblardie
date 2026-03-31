import Image from "next/image";

interface TeamMemberProps {
  prenom: string;
  nom: string;
  role: string;
  specialite: string;
  photo: string | null;
}

export default function TeamMember({ prenom, nom, role, specialite, photo }: TeamMemberProps) {
  const initiales = [prenom[0], nom[0]].filter(Boolean).join("").toUpperCase();
  const fullName = [prenom, nom].filter(Boolean).join(" ");

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-brand-border">
      {photo ? (
        <Image
          src={photo}
          alt={fullName}
          width={96}
          height={96}
          className="rounded-full object-cover"
          style={{ width: 96, height: 96 }}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-full text-white text-2xl font-bold"
          style={{ width: 96, height: 96, backgroundColor: "#3D7A6F", flexShrink: 0 }}
          aria-label={fullName}
        >
          {initiales}
        </div>
      )}
      <p className="mt-4 font-bold text-ink text-base leading-tight">{fullName}</p>
      <p className="mt-1 text-ink-muted text-sm">{role}</p>
      <p className="mt-1 text-brand text-xs">{specialite}</p>
    </div>
  );
}
