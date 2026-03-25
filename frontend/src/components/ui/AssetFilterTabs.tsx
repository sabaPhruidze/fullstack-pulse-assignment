import { AssetFilter } from "../../types/assets";

type Tab = {
  key: AssetFilter;
  label: string;
};
const TABS: Tab[] = [
  { key: "all", label: "All" },
  { key: "stocks", label: "Stocks Only" },
  { key: "crypto", label: "Crypto Only" },
];

type Props = {
  value: AssetFilter;
  onChange: (next: AssetFilter) => void;
};
const AssetFilterTabs = ({ value, onChange }: Props) => {
  return (
    <div className="mt-4 flex gap-2">
      {TABS.map((tab) => {
        const isActive = tab.key === value;
        return (
          <button
            className={[
              "border border-pulse-border px-3 py-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-pulse-primary transition-shadow duration-300 ease-in-out",
              isActive
                ? "border-pulse-primary/40 bg-pulse-primary/10 text-pulse-primary dark:bg-pulse-surface2 dark:text-pulse-text dark:border-pulse-primary"
                : "border-slate-400 bg-white text-slate-600 dark:border-pulse-border  dark:bg-pulse-surface dark:text-pulse-soft ",
            ].join(" ")}
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default AssetFilterTabs;
