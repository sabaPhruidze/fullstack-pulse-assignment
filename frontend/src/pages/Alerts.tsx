import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
import AlertSeveritySummary from "../components/ui/AlertSeveritySummary";
import AlertSeverityGroup from "../components/ui/AlertSeverityGroup";
const Alerts = () => {
  const { data, isLoading, isError, error } = useAlerts();
  const counts: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  } = { critical: 0, high: 0, medium: 0, low: 0 };

  data?.data.forEach((alert) => {
    counts[alert.severity] += 1;
  });
  const criticalAlerts =
    data?.data.filter((alert) => alert.severity === "critical") ?? [];
  const highAlerts = data?.data.filter((a) => a.severity === "high") ?? [];
  const mediumAlerts = data?.data.filter((a) => a.severity === "medium") ?? [];
  const lowAlerts = data?.data.filter((a) => a.severity === "low") ?? [];
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
          <div className="space-y-5">
            <AlertSeveritySummary {...counts} />
            <AlertSeverityGroup
              title="Critical Alerts"
              severity="critical"
              items={criticalAlerts}
            />
            <AlertSeverityGroup
              title="High Alerts"
              severity="high"
              items={highAlerts}
            />
            <AlertSeverityGroup
              title="Medium Alerts"
              severity="medium"
              items={mediumAlerts}
            />
            <AlertSeverityGroup
              title="Low Alerts"
              severity="low"
              items={lowAlerts}
            />
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
