import type { PortfolioData } from "../../types/portfolio";
type Props = {
  watchlist: PortfolioData["watchlist"];
};
import PortfolioSectionCard from "./PortfolioSectionCard";
const PortfolioWatchlistSection = ({ watchlist }: Props) => {
  return (
    <PortfolioSectionCard
      title="Watchlist"
      description="Assets you are tracking"
    >
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
    </PortfolioSectionCard>
  );
};

export default PortfolioWatchlistSection;
