
interface ErrorRow {
  id: number;
  logiciel: string;
  client: string;
  etat: "Téléchargé" | "Assigné" | "En Traitement" | "Résolu";
  date: string;
}

const dummyErrors: ErrorRow[] = [
  { id: 1, logiciel: "BASIA Stock", client: "INX", etat: "Assigné", date: "2025-06-10 11:32" },
  { id: 2, logiciel: "BASIA Santé", client: "BioLab", etat: "Téléchargé", date: "2025-06-13 09:21" },
  { id: 3, logiciel: "BASIA Compta", client: "EcoPhi", etat: "En Traitement", date: "2025-06-14 17:08" },
  { id: 4, logiciel: "BASIA Santé", client: "INX", etat: "Résolu", date: "2025-06-12 20:07" },
];

const etatColors: Record<ErrorRow["etat"], string> = {
  Téléchargé: "bg-sky text-white",
  Assigné: "bg-emerald-500 text-white",
  "En Traitement": "bg-yellow-200 text-yellow-800",
  Résolu: "bg-emerald-100 text-emerald-900",
};

const ErrorTable = () => (
  <div className="rounded-xl shadow bg-white my-8 overflow-x-auto animate-fade-in">
    <table className="min-w-full">
      <thead>
        <tr className="text-left">
          <th className="px-5 py-3 font-semibold text-deepblue">Logiciel</th>
          <th className="px-5 py-3 font-semibold text-deepblue">Client</th>
          <th className="px-5 py-3 font-semibold text-deepblue">Etat</th>
          <th className="px-5 py-3 font-semibold text-deepblue">Date</th>
        </tr>
      </thead>
      <tbody>
        {dummyErrors.map((err) => (
          <tr key={err.id} className="hover:bg-emerald-50 transition border-b last:border-none">
            <td className="px-5 py-3">{err.logiciel}</td>
            <td className="px-5 py-3">{err.client}</td>
            <td className="px-5 py-3">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${etatColors[err.etat]}`}>{err.etat}</span>
            </td>
            <td className="px-5 py-3">{err.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ErrorTable;
