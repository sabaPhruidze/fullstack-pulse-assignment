type Props = {
  critical: number;
  high: number;
  medium: number;
  low: number;
};

const AlertSeveritySummary = ({ critical, high, medium, low }: Props) => {
  const items = [
    { label: "Critical", value: critical },
    { label: "High", value: high },
    { label: "Medium", value: medium },
    { label: "Low", value: low },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-pulse-border p-3"
        >
          <p className="text-xs font-semibold text-pulse-soft">{item.label}</p>
          <p className="mt-2 text-lg font-bold text-pulse-text">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertSeveritySummary;
