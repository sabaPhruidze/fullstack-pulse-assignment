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
];
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
  return <div>PortfolioAllocationSection</div>;
};

export default PortfolioAllocationSection;
