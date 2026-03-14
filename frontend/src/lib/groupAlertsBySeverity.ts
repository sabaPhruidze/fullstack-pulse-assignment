import type { AlertsData } from "../types/alerts";
import type { NewsImpact } from "../types/news";

type GroupedAlerts = Record<NewsImpact, AlertsData[]>;

const createEmptyGroups = (): GroupedAlerts => ({
  critical: [],
  high: [],
  medium: [],
  low: [],
});
export const groupAlertsBySeverity = (items: AlertsData[]) => {
  const groups = createEmptyGroups();
  items.forEach((item) => {
    groups[item.severity].push(item);
  });
  return groups;
};
