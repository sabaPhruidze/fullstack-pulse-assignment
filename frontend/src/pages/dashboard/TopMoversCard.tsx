import SectionCard from "../../components/ui/SectionCard";
import type { TopMover } from "../../types/assets";

type Props = {
  title: string;
  assets: TopMover[];
  mode: "gainers" | "losers";
};

function TopMoversCard({ title, assets = [], mode }: Props) {
  const filtered = Object.is(mode, "gainers")
    ? assets.filter((x) => x.changePercent > 0)
    : assets.filter((x) => x.changePercent < 0);
  const sorting = Object.is(mode, "gainers")
    ? [...filtered].sort((a, b) => b.changePercent - a.changePercent)
    : [...filtered].sort((a, b) => a.changePercent - b.changePercent);
  const topThree = sorting.slice(0, 3);
  const percentClass =
    mode === "gainers"
      ? "text-emerald-600 dark:text-pulse-success/80"
      : "text-red-600 dark:text-pulse-danger";
  return (
    <SectionCard title={title}>
      {topThree.map(
        ({ id, symbol, name, sector, currentPrice, changePercent }, idx) => (
          <div key={id}>
            <div className="flex items-center justify-between">
              <p className="font-bold mt-3 text-slate-800 dark:text-pulse-text ">
                {symbol}{" "}
                <span className="font-semibold text-[14px] text-slate-500 dark:text-pulse-soft ">
                  {name}
                </span>
              </p>
              <p className="text-right text-slate-500 dark:text-pulse-soft">
                {sector || "Crypto"}
              </p>
            </div>
            <p className="text-xs text-slate-500 font-semibold mb-3 dark:text-pulse-soft">
              ${currentPrice}
            </p>
            <p className={`${percentClass} text-sm font-bold text-right`}>
              {Object.is(mode, "gainers")
                ? `+${changePercent}%`
                : `${changePercent}%`}
            </p>
            {idx !== topThree.length - 1 && (
              <hr className="border-slate-300 mt-5 dark:border-pulse-border" />
            )}
          </div>
        ),
      )}
    </SectionCard>
  );
}

export default TopMoversCard;
