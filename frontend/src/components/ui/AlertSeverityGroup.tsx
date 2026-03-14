import AlertList from "./AlertList";
import type { AlertsData } from "../../types/alerts";
import type { NewsImpact } from "../../types/news";

type Props = {
  title: string;
  severity: NewsImpact;
  items: AlertsData[];
};
const AlertSeverityGroup = ({ title, severity, items }: Props) => {
  if (!items.length) return null;
  return (
    <section className="space-y-3">
      <div className="flex-items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-pulse-text">{title}</h3>
          <p className="text-xs font-semibold text-pulse-soft capitalize">
            {severity} severity
          </p>
        </div>
        <span className="rounded-full border border-pulse-border px-2 py-1 text-xs font-bold text-pulse-text">
          {items.length}
        </span>
      </div>
      <AlertList items={items} />
    </section>
  );
};

export default AlertSeverityGroup;
