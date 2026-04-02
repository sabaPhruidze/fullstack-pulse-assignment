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

  return (
    <div className="rounded-xl border border-slate-400 bg-white px-3 py-2 shadow-lg dark:border-pulse-border dark:bg-pulse-surface">
      <p className="text-sm font-semibold text-slate-800 dark:text-pulse-text">
        {itemPayload.name}
      </p>
      <p className="text-xs text-slate-800 dark:text-pulse-text">
        Value: {formatCurrency(numericValue)}
      </p>
      <p className="text-sm text-slate-800 dark:text-pulse-text">
        Share: {item.payload.percentage.toFixed(2)}%
      </p>
    </div>
  );
};
export default AllocationToolTip;
