import usePortfolio from "../api/hooks/usePortfolio";
import usePortfolioPerformance from "../api/hooks/usePortfolioPerformance";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
import PortfolioPerformanceSection from "../components/portfolio/PortfolioPerformanceSection";
import PortfolioAllocationSection from "../components/portfolio/PortfolioAllocationSection";
import PortfolioAssetChangeSection from "../components/portfolio/PortfolioAssetChangeSection";
import PortfolioHoldingsSection from "../components/portfolio/PortfolioHoldingsSection";
import PortfolioWatchlistSection from "../components/portfolio/PortfolioWatchlistSection";
import PortfolioInfluencersSection from "../components/portfolio/PortfolioInfluencersSection";
import useInfluencers from "../api/hooks/useInfluencers";

const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
  const { data: performanceData } = usePortfolioPerformance();
  const { data: influencersData } = useInfluencers();
  const portfolio = data?.data;
  const performance = performanceData?.data;
  const influencers = influencersData?.data;
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
  const sections = [
    {
      key: "overview",
      content: (
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Portfolio Overview
        </h2>
      ),
    },
    {
      key: "performance",
      content: performance ? (
        <PortfolioPerformanceSection performance={performance} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
          Summary cards are unavailable
        </div>
      ),
    },
    {
      key: "allocation",
      content: performance ? (
        <PortfolioAllocationSection performance={performance} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
          Asset allocation chart is unavailable
        </div>
      ),
    },
    {
      key: "asset-change",
      content: <PortfolioAssetChangeSection assets={portfolio.assets} />,
    },
    {
      key: "holdings",
      content: <PortfolioHoldingsSection assets={portfolio.assets} />,
    },
    {
      key: "watchlist",
      content: <PortfolioWatchlistSection watchlist={portfolio.watchlist} />,
    },
    {
      key: "influencers",
      content: <PortfolioInfluencersSection influencers={influencers || []} />,
    },
  ];
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
