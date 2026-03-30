import useDashboardData from "../api/hooks/useDashboardData";
import PortfolioSummaryCard from "./dashboard/PortfolioSummaryCard";
import TopMoversCard from "./dashboard/TopMoversCard";
import LatestNewsCard from "./dashboard/LatestNewsCard";
import ActiveAlertsCard from "./dashboard/ActiveAlertsCard";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
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
        <Loading />
      ) : isError ? (
        <div className="mt-4 text-red-400">
          Error loading Dashboard data
          <div className="text-xs opacity-80 mt-1">
            {error instanceof Error ? error.message : "Unknown error"}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-12">
          <div className="md:col-span-2 xl:col-span-4">
            <PortfolioSummaryCard summary={data?.portfolio.data} />
          </div>
          <div className="xl:col-span-4">
            <TopMoversCard title="Top Gainers" assets={list} mode="gainers" />
          </div>

          <div className="xl:col-span-4">
            {" "}
            <TopMoversCard title="Top Losers" assets={list} mode="losers" />
          </div>
          <div className="md:col-span-2 xl:col-span-7">
            <LatestNewsCard news={news} />
          </div>

          <div className="md:col-span-2 xl:col-span-5">
            <ActiveAlertsCard alerts={alerts} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Dashboard;
