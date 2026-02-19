export type DebouncedSearchInputProps = {
  value: string;
  onChange: (next: string) => void;
  onDebounce?: (debouncedText: string) => void;
  delay?: number;
  placeholder?: string;
  className?: string;
};
