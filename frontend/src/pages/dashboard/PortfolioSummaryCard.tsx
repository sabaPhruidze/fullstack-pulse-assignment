import SectionCard from "../../components/ui/SectionCard";
import type { Data } from "../../types/portfolio";

type Props = {
  summary?: Data;
};
function PortfolioSummaryCard({ summary }: Props) {
  const { totalValue, totalChange, totalChangePercent } = summary ?? {
    totalValue: 0,
    totalChangePercent: 0,
    totalChange: 0,
  };
  return (
    <SectionCard title="Portfolio Summary">
      <div className="my-3">
        <p className="text-sm font-semibold text-slate-500 dark:text-pulse-soft">
          Total Value
        </p>
        <strong className="text-2xl text-slate-800 dark:text-pulse-text">
          {totalValue}
        </strong>
      </div>
      <div>
        <p className="font-semibold text-sm text-slate-500 dark:text-pulse-soft">
          Total Change
        </p>
        <strong className="text-emarald-600 dark:text-pulse-success/80">
          ${totalChange} (+{totalChangePercent}%)
        </strong>
      </div>
    </SectionCard>
  );
}

export default PortfolioSummaryCard;
