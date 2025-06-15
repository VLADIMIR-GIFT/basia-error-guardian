
import React from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string; // ex: "emerald", "sky"
}

const colorStyles: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-900",
  sky: "bg-sky text-white",
  earth: "bg-earth text-deepblue",
  forest: "bg-emerald-900 text-emerald-100",
};

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, color = "emerald" }) => (
  <div className={`kpi-card p-6 animate-fade-in ${colorStyles[color] || ""}`}>
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="text-xl">{icon}</div>}
      <div className="uppercase text-xs tracking-wider opacity-70 font-medium">{title}</div>
    </div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default KpiCard;
