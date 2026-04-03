import type { PortfolioData } from "../../types/portfolio";
import SectionCard from "../ui/SectionCard";
type Props = {
  assets: PortfolioData["assets"];
};

const PortfolioHoldingsSection = ({ assets }: Props) => {
  const columns = [
    {
      key: "asset",
      label: "Asset",
      render: (asset: Props["assets"][number]) => asset.assetId,
    },
    {
      key: "quantity",
      label: "Quantity",
      render: (asset: Props["assets"][number]) => asset.quantity,
    },
    {
      key: "avgBuy",
      label: "Avg Buy",
      render: (asset: Props["assets"][number]) => asset.avgBuyPrice,
    },
    {
      key: "currentPrice",
      label: "Current Price",
      render: (asset: Props["assets"][number]) => asset.currentPrice,
    },
    {
      key: "value",
      label: "Value",
      render: (asset: Props["assets"][number]) => asset.value,
    },
    {
      key: "change",
      label: "Change",
      render: (asset: Props["assets"][number]) => asset.change,
    },
    {
      key: "changePercent",
      label: "Change %",
      render: (asset: Props["assets"][number]) => `${asset.changePercent}%`,
    },
  ];
  return (
    <SectionCard
      title="Holdings"
      description="Current portfolio asset details."
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b border-slate-200 dark:border-pulse-border">
            <tr className="text-left text-slate-800 dark:text-pulse-text">
              {columns.map((column) => (
                <th key={column.key} className="pb-3 pr-4">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.assetId}
                className="border-b border-slate-100 dark:border-pulse-border"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-3 pr-4 text-slate-800 dark:text-pulse-text"
                  >
                    {column.render(asset)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
};

export default PortfolioHoldingsSection;
