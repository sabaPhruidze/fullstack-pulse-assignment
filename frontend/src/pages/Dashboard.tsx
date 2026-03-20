import Header from "../components/header/Header";
import useDashboardData from "../api/hooks/useDashboardData";
import PortfolioSummaryCard from "./dashboard/PortfolioSummaryCard";
import TopMoversCard from "./dashboard/TopMoversCard";
import LatestNewsCard from "./dashboard/LatestNewsCard";
import ActiveAlertsCard from "./dashboard/ActiveAlertsCard";
import PageLayout from "../components/layout/PageLayout";
const Dashboard = () => {
  const { data, isLoading, isError, error } = useDashboardData();
  const assets = data?.assets;
  const list = assets?.data ?? [];
  const news = data?.news ?? { success: true, count: 0, data: [] };
  const alerts = data?.alerts ?? { success: true, count: 0, data: [] };
  return (
    <PageLayout
      title="Dashboard"
      subtitle="Portfolio snapshot and market overview"
    >
      {isLoading ? (
        <div className="min-h-[60vh] w-full flex items-center justify-center">
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
        </div>
      ) : isError ? (
        <div className="mt-4 text-red-400">
          Error loading Dashboard data
          <div className="text-xs opacity-80 mt-1">
            {error instanceof Error ? error.message : "Unknown error"}
          </div>
        </div>
      ) : (
        <>
          <PortfolioSummaryCard summary={data?.portfolio.data} />
          <TopMoversCard title="Top Gainers" assets={list} mode="gainers" />
          <TopMoversCard title="Top Losers" assets={list} mode="losers" />
          <LatestNewsCard news={news} />
          <ActiveAlertsCard alerts={alerts} />
        </>
      )}
    </PageLayout>
  );
};

export default Dashboard;
