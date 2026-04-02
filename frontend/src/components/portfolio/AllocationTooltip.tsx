import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type AllocationPayload = {
  name: string;
  value: number;
  percentage: number;
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
};
const getTooltipTextColor = (hexColor: string) => {
  const hex = hexColor.replace("#", "");

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 160 ? "#0f172a" : "#ffffff";
};

const AllocationToolTip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || payload.length === 0) return null;
  //This will change not only value but also text color and background . custom component
  const item = payload[0];
  const itemPayload = item.payload as AllocationPayload;
  const numericValue =
    typeof item.value === "number" ? item.value : Number(item.value ?? 0);
  const bgColor = item.color ?? "#0f172a";
  const textColor = getTooltipTextColor(bgColor);
  return (
    <div
      className="rounded-xl px-3 py-2 shadow-lg"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="text-sm font-semibold">{itemPayload.name}</p>
      <p className="text-xs">Value: {formatCurrency(numericValue)}</p>
      <p className="text-sm">Share: {item.payload.percentage.toFixed(2)}%</p>
    </div>
  );
};
export default AllocationToolTip;
