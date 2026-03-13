import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
const Alerts = () => {
  const { data, isLoading, isError, error } = useAlerts();
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
          <div className="space-y-3">
            <p>
              Total alerts: <span>{data?.count}</span>
            </p>
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
