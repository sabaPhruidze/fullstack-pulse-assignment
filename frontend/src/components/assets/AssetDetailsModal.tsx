import Modal from "../ui/Modal";
import type { TopMover } from "../../types/assets";

type AssetDetailsModalProps = {
  open: boolean;
  asset: TopMover | null;
  onClose: () => void;
};

const AssetDetailsModal = ({
  open,
  asset,
  onClose,
}: AssetDetailsModalProps) => {
  if (!asset) return null;

  const priceText = `$${asset.currentPrice.toLocaleString()}`;
  const isUp = asset.changePercent >= 0;
  const pctText = `${isUp ? "+" : ""}${asset.changePercent.toFixed(2)}%`;
  const changeAmountText =
    typeof asset.changeAmount === "number"
      ? `${asset.changeAmount > 0 ? "+" : ""}${asset.changeAmount.toFixed(2)}`
      : null;
  const volumeText =
    typeof asset.volume === "number" ? asset.volume.toLocaleString() : "-";
  const marketCapText =
    typeof asset.marketCap === "number"
      ? asset.marketCap.toLocaleString()
      : "-";

  return (
    <Modal open={open} title={`${asset.symbol} details`} onClose={onClose}>
      {/* Header Area */}
      <div className="mb-4">
        <strong className="text-xl font-bold text-slate-800 dark:text-pulse-text">
          {asset.name}
        </strong>
        <div className="flex items-center gap-2 mt-1 ">
          <span className="tags-asset">{asset.symbol}</span>
          {asset.sector ? (
            <span className="tags-asset">{asset.sector}</span>
          ) : null}
        </div>
      </div>

      {/* price summary */}
      <div className="rounded-lg border p-3 mb-4 border-slate-300 dark:border-pulse-border ">
        <div className="flex items-center gap-x-28">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">
            Current price
          </p>
          <p className="text-xl font-bold text-slate-800 dark:text-pulse-text">
            {priceText}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">Change</p>
          <div className="text-right">
            <p
              className={
                isUp
                  ? "font-bold text-emerald-600 dark:text-pulse-success"
                  : "text-red-600 dark:text-pulse-danger"
              }
            >
              {pctText}
            </p>
            {changeAmountText ? (
              <p className="text-xs text-slate-500 dark:text-pulse-soft">
                {changeAmountText}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      {/* details */}
      <div className="rounded-lg border border-slate-300 dark:border-pulse-border p-3">
        <div className="flex items-center justify-between py-2 border-b border-slate-300 dark:border-pulse-border">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">ID</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-pulse-text">
            {asset.id}
          </p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-slate-300 dark:border-pulse-border">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">Volume</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-pulse-text">
            {volumeText}
          </p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-slate-300 dark:border-pulse-border">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">
            Market cap
          </p>
          <p className="text-sm font-semibold text-slate-800 dark:text-pulse-text">
            {marketCapText}
          </p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-sm text-slate-500 dark:text-pulse-soft">Sector</p>
          <p className="text-sm font-semibold text-slate-800 dark:text-pulse-text">
            {asset.sector || "-"}
          </p>
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onClose}
          className="text-slate-700 dark:text-pulse-text px-3 py-2 rounded-lg border border-slate-300 dark:border-pulse-border cursor-pointer hover:text-red-600 dark:hover:text-pulse-danger"
        >
          close
        </button>
      </div>
    </Modal>
  );
};

export default AssetDetailsModal;
