import DebouncedSearchInput from "./DebouncedSearchInput";
import type { DebouncedSearchInputProps as Props } from "../../types/ui";

const AssetSeachBar = ({
  value,
  onChange,
  placeholder = "Search by symbol or name...",
  onDebounce,
}: Props) => {
  return (
    <div>
      <DebouncedSearchInput
        className="search-bar mt-3"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        delay={500}
        onDebounce={onDebounce}
      />
    </div>
  );
};

export default AssetSeachBar;
