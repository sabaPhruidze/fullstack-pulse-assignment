import type { PortfolioData } from "../../types/portfolio";
type Props = {
  watchlist: PortfolioData["watchlist"];
};
import SectionCard from "../ui/SectionCard";
const PortfolioWatchlistSection = ({ watchlist }: Props) => {
  return (
    <SectionCard
      title="Watchlist"
      description="Assets you are tracking"
      bodyClassName="mt-0"
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
    </SectionCard>
  );
};

export default PortfolioWatchlistSection;
