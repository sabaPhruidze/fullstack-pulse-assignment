import { NAV_ITEMS } from "../../constants/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import DebouncedSearchInput from "../ui/DebouncedSearchInput";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement | null>(null); // new typescript learned
  const [query, setQuery] = useState(""); // user written text
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false); // show or hide

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      // called onClick
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const clickedInside = wrapper.contains(event.target as Node); // .contains is checking if clicked element is inside or outsode tje wrapper (our div element)
      if (!clickedInside) {
        setOpen(false);
      } else {
        setOpen(true); //this way it will automatically display the list
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);
  const filteredNavItems = useMemo(() => {
    const searchText = debouncedQuery.trim().toLowerCase();
    // if nothing written show all pages
    if (!searchText) return NAV_ITEMS;
    return NAV_ITEMS.filter((navItem) =>
      navItem.label.toLowerCase().includes(searchText),
    );
  }, [debouncedQuery]);

  const navigateTo = (targetPath: string) => {
    navigate(targetPath);
    setQuery("");
    setDebouncedQuery("");
    setOpen(false);
  };
  return (
    <div
      className="relative w-full md:max-w-sm lg:max-w-md xl:max-w-lg px-5"
      ref={wrapperRef}
    >
      <DebouncedSearchInput
        value={query}
        onChange={(v) => {
          setQuery(v);
          if (!open) setOpen(true);
        }}
        delay={500}
        placeholder="Search..."
        onDebounce={(v) => {
          setDebouncedQuery(v);
        }}
        className="search-bar"
      />
      {open && (
        <div className="absolute left-5 right-5 top-[3.1rem]  border rounded-lg overflow-hidden z-50 bg-white border-slate-300  dark:bg-pulse-surface2 dark:border-pulse-border">
          {filteredNavItems.length === 0 ? (
            <div className="px-3 py-2 font-semibold text-slate-500 dark:text-pulse-soft">
              No Results
            </div>
          ) : (
            filteredNavItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => navigateTo(item.path)}
                className="w-full text-left px-3 py-2 text-slate-800 hover:bg-slate-100 dark:hover:bg-pulse-surface dark:text-pulse-text"
              >
                {item.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
