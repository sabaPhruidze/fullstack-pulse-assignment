import DebouncedSearchInput from "./DebouncedSearchInput";

type Props = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  onDebounce?: (v: string) => void;
};
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
        delay={3000}
        onDebounce={onDebounce}
      />
    </div>
  );
};

export default AssetSeachBar;
