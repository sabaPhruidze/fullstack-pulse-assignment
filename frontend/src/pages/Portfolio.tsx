import usePortfolio from "../api/hooks/usePortfolio";
import usePortfolioPerformance from "../api/hooks/usePortfolioPerformance";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
import PortfolioPerformanceSection from "../components/portfolio/PortfolioPerformanceSection";
import PortfolioAllocationSection from "../components/portfolio/PortfolioAllocationSection";
import PortfolioAssetChangeSection from "../components/portfolio/PortfolioAssetChangeSection";
const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
  const { data: performanceData } = usePortfolioPerformance();
  const portfolio = data?.data;
  const performance = performanceData?.data;

  return (
    <PageLayout title="Portfolio" subtitle="Detailed holdings + charts">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div className="mt-4 text-red-400">
          Error loading portfolio data
          <div className="mt-1 text-xs opacity-80">
            {error instanceof Error ? error.message : "Unknown error"}
          </div>
        </div>
      ) : !portfolio ? (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 tet-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
          Portfolio data is unavalible
        </div>
      ) : data ? (
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Portfolio Overview
            </h2>
          </section>
          <section>
            {performance ? (
              <PortfolioPerformanceSection performance={performance} />
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
                Summary Cards are unavalible
              </div>
            )}
          </section>
          <section>
            {performance ? (
              <PortfolioAllocationSection performance={performance} />
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
                Asset allocation chart is unavaliable
              </div>
            )}
          </section>
          <section>
            <PortfolioAssetChangeSection assets={portfolio.assets} />
          </section>
          <section>Holdings / watchlist section</section>
        </div>
      ) : null}
    </PageLayout>
  );
};

export default Portfolio;
