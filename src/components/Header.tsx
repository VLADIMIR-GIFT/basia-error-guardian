
import { Mail } from "lucide-react";

const Header = () => (
  <header className="flex justify-between items-center py-6 px-3 md:px-10 bg-white/70 rounded-2xl shadow animate-fade-in mb-8">
    <div className="flex items-center gap-3">
      <img
        src="https://lovable.dev/opengraph-image-p98pqg.png"
        alt="BASIA"
        className="h-12 w-12 rounded-full shadow border-2 border-emerald-500"
      />
      <div>
        <h1 className="text-2xl font-bold tracking-tight leading-none text-[hsl(var(--color-forest))]">
          BASIA Erreurs & Corrections
        </h1>
        <p className="leading-tight text-sm text-gray-500">
          L'art de préserver la nature – Dashboard pour techniciens et admins
        </p>
      </div>
    </div>
    <a
      href="mailto:contact@basia.org"
      className="inline-flex gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white shadow hover:bg-emerald-900 transition focus:outline-emerald-700"
    >
      <Mail size={20} /> Contact
    </a>
  </header>
);

export default Header;
