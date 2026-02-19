import React, { useEffect } from "react";
import type { DebouncedSearchInputProps as Props } from "../../types/ui";

const DebouncedSearchInput = ({
  value,
  onChange,
  onDebounce, // user written text but debounced
  delay = 500, // debounce: it will write after 3000ms for less rerender
  placeholder = "Search...",
  className = "search-bar",
}: Props) => {
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      onDebounce?.(value.trim());
    }, delay);
    return () => window.clearTimeout(timerId);
  }, [value, delay, onDebounce]);

  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default DebouncedSearchInput;
