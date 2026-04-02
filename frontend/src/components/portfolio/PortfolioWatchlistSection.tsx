import type { PortfolioData } from "../../types/portfolio";
type Props = {
  watchlist: PortfolioData["watchlist"];
};
const PortfolioWatchlistSection = ({ watchlist }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Watchlist
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
          Assets you are tracking
        </p>
      </div>
      {watchlist.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-4 text-slate-500 dark:border-pulse-border dark:text-pulse-soft">
          No assets in watchlist
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {watchlist.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 dark:border-pulse-border dark:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioWatchlistSection;
