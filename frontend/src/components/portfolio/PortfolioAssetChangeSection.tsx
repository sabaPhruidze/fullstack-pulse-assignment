import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PortfolioData } from "../../types/portfolio";
type Props = {
  assets: PortfolioData["assets"];
};

const formatPercent = (value: number) => `${value.toFixed(2)}%`;
const barColor = (value: number) => (value >= 0 ? "#10b981" : "#ef4444"); //green and red
const PortfolioAssetChangeSection = ({ assets }: Props) => {
  const chartData = assets.map((asset) => ({
    name: asset.assetId, // XAxis shown name
    changePercent: asset.changePercent, //bar height
  }));
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Asset Performance
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
          Change percentage for each portfolio asset
        </p>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid stroke="#e2e8f0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              className="text-slate-500 dark:text-pulse-soft"
            />
            <YAxis
              tickFormatter={formatPercent}
              tick={{ fontSize: 12 }}
              className="text-slate-500 dark:text-pulse-soft"
            />
            <Tooltip
              formatter={(value) => [formatPercent(Number(value)), "Change"]}
              contentStyle={{ borderRadius: 12, border: "1px solid #334155" }}
            />
            <Bar dataKey="changePercent" radius={[8, 8, 0, 0]}>
              {chartData.map((item) => (
                <Cell
                  key={item.name}
                  fill={barColor(item.changePercent)}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioAssetChangeSection;
