import usePortfolio from "../api/hooks/usePortfolio";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
  const portfolio = data?.data;
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
            <h2>Portfolio Overview</h2>
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
          <section>Summary cards section</section>
          <section>Charts section</section>
          <section>Holdings / watchlist section</section>
        </div>
      ) : null}
    </PageLayout>
  );
};

export default Portfolio;
