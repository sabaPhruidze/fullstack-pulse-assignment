import type { PortfolioPerformanceData } from "../../types/portfolio";

type Props = {
  performance: PortfolioPerformanceData;
};

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
const PortfolioPerformanceSection = ({ performance }: Props) => {
  const cards = [
    {
      title: "Total Value",
      primary: formatCurrency(performance.totalValue),
      secondary: "",
      primaryClass: "text-slate-900 dark:text-white",
      secondaryClass: "text-slate-500 dark:text-pulse-soft",
    },
    {
      title: "Total Change",
      primary: formatCurrency(performance.totalChange),
      secondary: formatPercent(performance.totalChangePercent),
      primaryClass:
        performance.totalChange >= 0
          ? "text-emerald-600 dark:text-pulse-success"
          : "text-red-600 dark:text-red-400",
      secondaryClass: "text-slate-500 dark:text-pulse-soft",
    },
    {
      title: "Best Performer",
      primary: performance.bestPerformer.assetId,
      secondary: formatPercent(performance.bestPerformer.changePercent),
      primaryClass: "text-slate-900 dark:text-white",
      secondaryClass: "text-emerald-600 dark:text-pulse-success",
    },
    {
      title: "Worst Performer",
      primary: performance.worstPerformer.assetId,
      secondary: formatPercent(performance.worstPerformer.changePercent),
      primaryClass: "text-slate-900 dark:text-white",
      secondaryClass: "text-amber-600 dark:text-amber-400",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface"
        >
          <p className="text-sm font-medium text-slate-500 dark:text-pulse-soft">
            {card.title}
          </p>
          <strong className={`mt-2 block text-2xl ${card.primaryClass}`}>
            {card.primary}
          </strong>
          {card.secondary ? (
            <p className={`mt-1 text-sm ${card.secondaryClass}`}>
              {card.secondary}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default PortfolioPerformanceSection;
