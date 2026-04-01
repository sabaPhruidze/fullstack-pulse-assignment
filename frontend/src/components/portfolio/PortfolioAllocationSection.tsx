import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { PortfolioPerformanceData } from "../../types/portfolio";
import { percent } from "framer-motion";

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
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
};
const PortfolioAllocationSection = ({ performance }: Props) => {
  const chartData = performance.assetAllocation.map((item) => ({
    name: item.assetId,
    value: item.value,
    percentage: item.percentage,
  }));
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Asset Allocation
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
          Portfolio distribution by current asset value.
        </p>
      </div>
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
                    />
                  ))}
                </Pie>
                <Tooltip //hover poppup
                  formatter={(value) => [
                    formatCurrency(Number(value)),
                    "Value",
                  ]}
                />
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
    </div>
  );
};

export default PortfolioAllocationSection;
