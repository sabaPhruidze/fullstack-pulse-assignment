import type { NewsImpact } from "../../types/news";

type Props = {
  counts: Record<NewsImpact, number>;
  active: Record<NewsImpact, boolean>;
  onToggle: (severity: NewsImpact) => void;
};

const AlertSeveritySummary = ({ counts, active, onToggle }: Props) => {
  const items: { label: string; value: NewsImpact }[] = [
    { label: "Critical", value: "critical" },
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onToggle(value)}
          className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${
            active[value]
              ? "border-pulse-text bg-pulse-surface text-pulse-text"
              : "border-pulse-border text-pulse-soft"
          }`}
        >
          <span>{label}</span>
          <span>{counts[value]}</span>
        </button>
      ))}
    </div>
  );
};

export default AlertSeveritySummary;
