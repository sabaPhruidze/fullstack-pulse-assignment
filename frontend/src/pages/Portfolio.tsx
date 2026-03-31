import usePortfolio from "../api/hooks/usePortfolio";
import PageLayout from "../components/layout/PageLayout";
import Loading from "../components/shared/Loading";
const Portfolio = () => {
  const { data, isLoading, isError, error } = usePortfolio();
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
      ) : data ? (
        <div>Portfolio</div>
      ) : null}
    </PageLayout>
  );
};

export default Portfolio;
