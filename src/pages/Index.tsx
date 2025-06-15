
import Header from "@/components/Header";
import KpiCard from "@/components/KpiCard";
import TechnicianList from "@/components/TechnicianList";
import ErrorTable from "@/components/ErrorTable";
// Icons
import { ListCheck, Users, Settings, Check } from "lucide-react";

// * Données factices en attendant la connexion API *

const dummyStats = [
  {
    title: "Total erreurs",
    value: 233,
    icon: <ListCheck size={26} />,
    color: "emerald",
  },
  {
    title: "En traitement",
    value: 18,
    icon: <Settings size={26} />,
    color: "sky",
  },
  {
    title: "Résolues",
    value: 205,
    icon: <Check size={26} />,
    color: "forest",
  },
  {
    title: "Techniciens actifs",
    value: 5,
    icon: <Users size={26} />,
    color: "earth",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      <main className="max-w-7xl mx-auto">
        {/* KPIs principaux */}
        <div className="dashboard-grid mb-10">
          {dummyStats.map((stat, idx) => (
            <KpiCard
              key={idx}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Listes des erreurs */}
        <h2 className="section-title mt-7 mb-2">Dernières erreurs détectées</h2>
        <span className="section-subtitle mb-5">
          Consultez, filtrez et assignez les erreurs logicielles remontées par les clients.
        </span>
        <ErrorTable />

        {/* Listes des techniciens */}
        <TechnicianList />

        {/* Section partenariat retirée */}
      </main>
      <footer className="text-xs text-gray-400 text-center my-8">
        ONG BASIA &copy; {new Date().getFullYear()} &ndash; L'art de préserver la nature
      </footer>
    </div>
  );
};

export default Index;

