import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
import type { NewsImpact } from "../types/news";
const Alerts = () => {
  const { data, isLoading, isError, error } = useAlerts();
  const counts = { critical: 0, high: 0, medium: 0, low: 0 };

  data?.data.forEach((alert) => {
    counts[alert.severity] += 1;
  });
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
        {!isLoading && !isError && (
          <div className="space-y-4 text-pulse-text">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-lg border border-pulse-border p-3">
                Critical: {counts.critical}
              </div>
              <div className="rounded-lg border border-pulse-border p-3">
                High: {counts.high}
              </div>
              <div className="rounded-lg border border-pulse-border p-3">
                medium: {counts.medium}
              </div>
              <div className="rounded-lg border border-pulse-border p-3">
                low: {counts.low}
              </div>
            </div>
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
