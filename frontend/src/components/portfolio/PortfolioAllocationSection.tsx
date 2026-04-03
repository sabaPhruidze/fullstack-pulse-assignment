import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { PortfolioPerformanceData } from "../../types/portfolio";
import { formatCurrency } from "./AllocationTooltip";
import AllocationToolTip from "./AllocationTooltip";
import SectionCard from "../ui/SectionCard";
type Props = {
  performance: PortfolioPerformanceData;
};

const CHART_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
]; // Pie chart colors , each slice each color

const PortfolioAllocationSection = ({ performance }: Props) => {
  const chartData = performance.assetAllocation.map((item) => ({
    name: item.assetId,
    value: item.value,
    percentage: item.percentage,
  }));
  return (
    <SectionCard
      title="Asset Allocation"
      description=" Portfolio distribution by current asset value."
    >
      {chartData.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-4 text-slate-500 dark:border-pulse-border dark:text-pulse-soft">
          Asset allocation data is unavalable
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,1fr)] lg:items-center">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {/*wrapper for cover size  */}
              <PieChart>
                {/*Saves chart parts such as pie and tootip  */}
                <Pie //this is the real circle
                  data={chartData}
                  dataKey="value" //slice size has to be calculated through value
                  nameKey="name" // element name must come from name
                  cx="50%" //center
                  cy="50%" //center
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={2} //space between slices
                >
                  {chartData.map((entry, index) => (
                    <Cell // this gives individual colors
                      key={entry.name}
                      fill={CHART_COLORS[index % CHART_COLORS.length]} // if assets is more than colors in array colors on circle reapply the color so code will not  struggle
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<AllocationToolTip />} />
                {/*hover poppup */}
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {chartData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 dark:border-pulse-border"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        CHART_COLORS[index % CHART_COLORS.length],
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-pulse-soft">
                      {item.percentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {formatCurrency(item.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionCard>
  );
};

export default PortfolioAllocationSection;
