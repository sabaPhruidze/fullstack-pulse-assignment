import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
import AlertSeveritySummary from "../components/ui/AlertSeveritySummary";
import AlertSeverityGroup from "../components/ui/AlertSeverityGroup";
import { groupAlertsBySeverity } from "../lib/groupAlertsBySeverity";
import type { AlertSeverity } from "../types/alerts";
import type { NewsImpact } from "../types/news";

const initialOpen: Record<NewsImpact, boolean> = {
  critical: false,
  high: false,
  medium: true,
  low: false,
};
const Alerts = () => {
  const { data, isLoading, isError, error } = useAlerts();
  const [openSections, setOpenSections] = useState(initialOpen);
  const items = data?.data ?? [];
  const groups = groupAlertsBySeverity(items);

  const counts: AlertSeverity = {
    critical: groups.critical.length,
    high: groups.high.length,
    medium: groups.medium.length,
    low: groups.low.length,
  };
  const toggleSeverity = (severity: NewsImpact) => {
    setOpenSections((prev) => ({ ...prev, [severity]: !prev[severity] }));
  };
  const sections = [
    { title: "Critical Alerts", severity: "critical", items: groups.critical },
    { title: "High Alerts", severity: "high", items: groups.high },
    { title: "Medium Alerts", severity: "medium", items: groups.medium },
    { title: "Low Alerts", severity: "low", items: groups.low },
  ] as const;
  return (
    <PageLayout
      title="Alerts"
      subtitle="All alerts, grouped by severity for faster triage."
    >
      <SectionCard title="Alert Center">
        {isLoading && (
          <p className="text-sm text-pulse-soft">Loading alert...</p>
        )}
        {isError && (
          <p className="text-sm text-red-400">
            {error instanceof Error ? error.message : "Failed to load alert"}
          </p>
        )}
        {!isLoading && !isError && data && (
          <div className="space-y-3">
            <AlertSeveritySummary
              counts={counts}
              active={openSections}
              onToggle={toggleSeverity}
            />
            {sections.map((section) => (
              <AlertSeverityGroup
                key={section.severity}
                {...section}
                isOpen={openSections[section.severity]}
                onToggle={toggleSeverity}
              />
            ))}
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
