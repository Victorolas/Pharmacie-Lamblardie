import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pharmacie Lamblardie — Paris 12e, Métro Daumesnil | Lun-Ven 9h-20h",
  description:
    "Pharmacie Lamblardie, 6 rue Lamblardie 75012 Paris. Orthopédie, homéopathie, location matériel médical. Ouvert Lun-Ven 9h-20h, Sam 9h30-19h30.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col bg-brand-page text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
