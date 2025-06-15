
interface Technician {
  id: number;
  nom: string;
  expertise: string[];
  dispo: boolean;
  nbTaches: number;
}

const dummyTechnicians: Technician[] = [
  { id: 1, nom: "Marie Pelletier", expertise: ["BASIA Stock", "BASIA Santé"], dispo: true, nbTaches: 3 },
  { id: 2, nom: "Samir Benali", expertise: ["BASIA Compta"], dispo: false, nbTaches: 5 },
  { id: 3, nom: "Valérie André", expertise: ["BASIA Santé"], dispo: true, nbTaches: 2 },
];

const TechnicianList = () => (
  <div className="rounded-xl overflow-hidden shadow bg-white animate-fade-in mt-8">
    <div className="px-6 py-3 bg-emerald-100 font-semibold text-emerald-900">Techniciens BASIA</div>
    <ul>
      {dummyTechnicians.map((tech) => (
        <li key={tech.id} className="flex items-center justify-between px-6 py-4 border-b last:border-none hover:bg-emerald-50 transition">
          <div>
            <div className="font-medium">{tech.nom}</div>
            <div className="text-xs text-emerald-800 opacity-80">
              Expertise : {tech.expertise.join(", ")}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${tech.dispo ? "bg-emerald-200 text-emerald-900" : "bg-gray-300 text-gray-600"}`}
            >
              {tech.dispo ? "Disponible" : "Occupé"}
            </span>
            <span className="text-deepblue text-xs">
              {tech.nbTaches} tâche{tech.nbTaches > 1 ? "s" : ""}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TechnicianList;
