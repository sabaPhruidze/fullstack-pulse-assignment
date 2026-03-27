import type { NewsImpact } from "../types/news";

type AlertSeverityStyle = {
  surface: string;
  text: string;
};

export const alertSeverityStyles: Record<NewsImpact, AlertSeverityStyle> = {
  critical: {
    surface:
      "border-red-300 bg-red-50 dark:border-red-500/40 dark:bg-red-500/10",
    text: "text-red-700 dark:text-red-300",
  },
  high: {
    surface:
      "border-orange-300 bg-orange-50 dark:border-orange-500/40 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-300",
  },
  medium: {
    surface:
      "border-yellow-300 bg-yellow-50 dark:border-yellow-500/40 dark:bg-yellow-500/10",
    text: "text-yellow-700 dark:text-yellow-300",
  },
  low: {
    surface:
      "border-blue-300 bg-blue-50 dark:border-blue-500/40 dark:bg-blue-500/10",
    text: "text-blue-700 dark:text-blue-300",
  },
};
