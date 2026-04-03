import {
  Bar,
  BarChart, // is a bar graph wrapper
  CartesianGrid,
  Cell,
  ResponsiveContainer, //gives chart changeable size
  Tooltip, //hover show small window
  XAxis, // lower line
  YAxis, //left line
} from "recharts";
import type { PortfolioData } from "../../types/portfolio";
import PortfolioSectionCard from "./PortfolioSectionCard";
type Props = {
  assets: PortfolioData["assets"];
};

const formatPercent = (value: number) => `${value.toFixed(2)}%`;
const CHART_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];
const PortfolioAssetChangeSection = ({ assets }: Props) => {
  const chartData = assets.map((asset) => ({
    name: asset.assetId, // XAxis shown name
    changePercent: asset.changePercent, //bar height
  }));
  return (
    <PortfolioSectionCard
      title="Asset Performance"
      description="Change percentage for each portfolio asset"
    >
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
              {chartData.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </PortfolioSectionCard>
  );
};

export default PortfolioAssetChangeSection;
