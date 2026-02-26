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

  return (
    <Modal open={open} title={`${asset.symbol} details`} onClose={onClose}>
      {/* Header Area */}
      <div className="mb-4">
        <p className="text-lg font-bold text-pulse-text">{asset.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs px-2 py-1 rounded border border-pulse-border text-pulse-soft">
            {asset.symbol}
          </span>
          {asset.sector ? (
            <span className="text-xs px-2 py-1 rounded border border-pulse-border text-pulse-soft">
              {asset.sector}
            </span>
          ) : null}
        </div>
      </div>
      {/* price summary */}
      <div className="rounded-lg border border-pulse-border p-3 mb-4">
        <div className="flex items-center justify-center">
          <p className="text-sm text-pulse-soft">Current price</p>
          <p className="text-xl font-bold text-pulse-text">{priceText}</p>
        </div>
      </div>
    </Modal>
  );
};

export default AssetDetailsModal;
