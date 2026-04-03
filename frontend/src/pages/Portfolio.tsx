import usePortfolio from "../api/hooks/usePortfolio";
import usePortfolioPerformance from "../api/hooks/usePortfolioPerformance";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
import useInfluencers from "../api/hooks/useInfluencers";
import { getPortfolioSections } from "../lib/getPortfolioSections";
const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
  const { data: performanceData } = usePortfolioPerformance();
  const { data: influencersData } = useInfluencers();
  const portfolio = data?.data;
  const performance = performanceData?.data;
  const influencers = influencersData?.data ?? [];
  if (isLoading) {
    return (
      <PageLayout title="Portfolio" subtitle="Detailed holdings + charts">
        <Loading />
      </PageLayout>
    );
  }
  if (isError) {
    return (
      <PageLayout title="Portfolio" subtitle="Detailed holdings + charts">
        <div className="mt-4 text-red-400">
          Error loading portfolio data
          <div className="mt-1 text-xs opacity-80">
            {error instanceof Error ? error.message : "Unknown error"}
          </div>
        </div>
      </PageLayout>
    );
  }
  if (!portfolio) {
    return (
      <PageLayout title="Portfolio" subtitle="Detailed holdings + charts">
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
          Portfolio data is unavailable
        </div>
      </PageLayout>
    );
  }
  const sections = getPortfolioSections({
    performance,
    portfolio,
    influencers,
  });
  return (
    <PageLayout title="Portfolio" subtitle="Detailed holdings + charts">
      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <div key={section.key}>{section.content}</div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Portfolio;
