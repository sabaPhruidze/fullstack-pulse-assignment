import { div } from "framer-motion/client";
import usePortfolio from "../api/hooks/usePortfolio";
import usePortfolioPerformance from "../api/hooks/usePortfolioPerformance";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
  const { data: performanceData } = usePortfolioPerformance();
  const portfolio = data?.data;
  const performance = performanceData?.data;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);
  };
  const formatPercent = (value: number) => {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };
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
            <p className="mt-2 text-sm text-slate-500 dark:text-pulse-soft">
              User: {portfolio.userId}
            </p>{" "}
            <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
              User: {portfolio.assets.length}
            </p>{" "}
            <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
              User: {portfolio.watchlist.length}
            </p>
          </section>
          <section>
            {performance ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
                  <p className="text-sm font-medium text-slate-500 dark:text-pulse-soft">
                    Total Value
                  </p>
                  <strong className="mt-2 block text-2xl text-slate-900 dark:text-white">
                    {formatCurrency(performance.totalValue)}
                  </strong>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
                  <p className="text-sm font-medium text-slate-500 dark:text-pulse-soft">
                    Total Change
                  </p>
                  <strong>{formatCurrency(performance.totalChange)}</strong>
                  <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
                    {formatPercent(performance.totalChangePercent)}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
                  <p className="text-sm font-medium text-slate-500 dark:text-pulse-soft">
                    Best Performer
                  </p>
                  <strong className="mt-2 block text-2xl text-slate-900 dark:text-white">
                    {performance.bestPerformer.assetId}
                  </strong>
                  <p className="mt-1 text-m text-emerald-600 dark:text-pulse-success">
                    {formatPercent(performance.bestPerformer.changePercent)}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
                  <p className="text-sm font-medium text-slate-500 dark:text-pulse-soft">
                    Best Performer
                  </p>
                  <strong className="mt-2 block text-2xl text-slate-900 dark:text-white">
                    {performance.worstPerformer.assetId}
                  </strong>
                  <p className="mt-1 text-m text-amber-600 dark:text-amber-400">
                    {formatPercent(performance.worstPerformer.changePercent)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft">
                Summary Cards are unavalible
              </div>
            )}
          </section>
          <section>Charts section</section>
          <section>Holdings / watchlist section</section>
        </div>
      ) : null}
    </PageLayout>
  );
};

export default Portfolio;
