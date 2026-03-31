import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog/homeopathie",                      destination: "/specialisations", permanent: true },
      { source: "/blog/orthopedie-petit-appareillage",    destination: "/specialisations", permanent: true },
      { source: "/blog/locations-maintien-a-domicile",    destination: "/specialisations", permanent: true },
      { source: "/blog/lequipe-de-pharmacie-lamblardie",  destination: "/equipe",          permanent: true },
      { source: "/blog/contact",                          destination: "/contact",         permanent: true },
      { source: "/blog/accueil",                          destination: "/",                permanent: true },
    ];
  },
};

export default nextConfig;
