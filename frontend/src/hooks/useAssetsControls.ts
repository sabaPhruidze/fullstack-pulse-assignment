import { useState } from "react";
import type { AssetFilter, TopMover } from "../types/assets";
import type { SortDir } from "../lib/sortAssets";

const useAssetsControls = () => {
  const [filter, setFilter] = useState<AssetFilter>("all");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [selectedAsset, setSelectedAsset] = useState<TopMover | null>(null);

  const toggleSort = () => {
    setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const openAsset = (asset: TopMover) => {
    setSelectedAsset(asset);
  };

  const closeAsset = () => {
    setSelectedAsset(null);
  };

  return {
    filter,
    setFilter,
    searchInput,
    setSearchInput,
    search,
    setSearch,
    sortDir,
    toggleSort,
    selectedAsset,
    openAsset,
    closeAsset,
  };
};

export default useAssetsControls;
