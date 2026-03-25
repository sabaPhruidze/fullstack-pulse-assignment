import SectionCard from "../../components/ui/SectionCard";
import type { Alerts } from "../../types/alerts";
import { badgeClassBySeverity } from "../../lib/badges";
import { formatTimesSTamp } from "../../lib/format";
type Props = {
  alerts: Alerts;
};

const ActiveAlertsCard = ({ alerts }: Props) => {
  const items = alerts.data.slice(0, 5);
  return (
    <SectionCard title="Active Alerts">
      <p className="text-xs font-semibold mt-1 text-slate-500 dark:text-pulse-soft">
        Latest 5
      </p>
      <div className="mt-3">
        {items.map((item, idx) => (
          <div className="py-2" key={item.id}>
            <div className="flex items-start justify-between gap-3">
              <p className=" font-bold text-sm text-slate-800 dark:text-pulse-text">
                {item.message}
              </p>
              <span
                className={`px-2 py-1 rounded-full text-sm font-semibold ${badgeClassBySeverity(item.severity)}`}
              >
                {item.severity}
              </span>
            </div>
            <p className="text-xs font-semibold mt-2 text-slate-500 dark:text-pulse-soft">
              {formatTimesSTamp(item.timestamp)}
            </p>
            <div className="text-xs font-semibold mt-2 text-slate-500 dark:text-pulse-soft">
              {idx !== items.length - 1 && (
                <hr className="mt-4 border-slate-300 dark:border-pulse-border" />
              )}
            </div>
          </div>
        ))}
        {!items.length && (
          <p className="text-sm text-pulse-soft mt-3">No Alerts avaliable</p>
        )}
      </div>
    </SectionCard>
  );
};

export default ActiveAlertsCard;
