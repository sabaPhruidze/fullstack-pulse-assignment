import type { NewsCategory, NewsImpact } from "../types/news";
import type { AlertsData } from "../types/alerts";

const neutralBadge =
  "border border-slate-300 bg-slate-100 text-slate-800 dark:border-pulse-border dark:bg-pulse-border/40 dark:text-pulse-soft";
const mediumBadge =
  "border border-yellow-300 bg-yellow-50 text-yellow-700 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-300";
const highBadge =
  "border border-orange-300 bg-orange-50 text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300";
const criticalBadge =
  "border border-red-300 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300";

export const badgeClassByCategory = (category: NewsCategory) => {
  switch (category) {
    case "market":
      return "border border-blue-300 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20";
    case "crypto":
      return "border border-purple-300 bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20";
    case "technology":
      return "border border-cyan-300 bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20";
    case "macro":
      return "border border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20";
    case "earnings":
      return "border border-green-300 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20";
    case "regulatory":
      return "border border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300";
    default:
      return neutralBadge;
  }
};
export const badgeClassByImpact = (impact: NewsImpact) => {
  switch (impact) {
    case "low":
      return neutralBadge;
    case "medium":
      return mediumBadge;
    case "high":
      return highBadge;
    case "critical":
      return criticalBadge;
    default:
      return neutralBadge;
  }
};

export const badgeClassBySeverity = (severity: AlertsData["severity"]) => {
  switch (severity) {
    case "low":
      return neutralBadge;
    case "medium":
      return mediumBadge;
    case "high":
      return highBadge;
    case "critical":
      return criticalBadge;
    default:
      return neutralBadge;
  }
};
