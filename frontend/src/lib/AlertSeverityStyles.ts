import type { NewsImpact } from "../types/news";

type AlertSeverityStyle = {
  surface: string;
  text: string;
};

export const alertSeverityStyles: Record<NewsImpact, AlertSeverityStyle> = {
  critical: {
    surface: "border-red-500/40 bg-red-500/10",
    text: "text-red-300",
  },
  high: {
    surface: "border-orange-500/40 bg-orange-500/10",
    text: "text-orange-300",
  },
  medium: {
    surface: "border-yellow-500/40 bg-yellow-500/10",
    text: "text-yellow-300",
  },
  low: {
    surface: "border-blue-500/40 bg-blue-500/10",
    text: "text-blue-300",
  },
};
