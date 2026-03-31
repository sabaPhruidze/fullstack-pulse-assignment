import PageLayout from "../components/layout/PageLayout";
import AssetFilterTabs from "../components/ui/AssetFilterTabs";
import AssetSeachBar from "../components/ui/AssetSeachBar";
import AssetsListCard from "../components/ui/AssetsListCard";
import useAssets from "../api/hooks/useAssets";
import useAssetsControls from "../hooks/useAssetsControls";
import { sortAssetsByChangePercent } from "../lib/sortAssets";
import AssetDetailsModal from "../components/assets/AssetDetailsModal";

function Assets() {
  const {
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
  } = useAssetsControls();

  const { data, isLoading, isError, error } = useAssets({ filter, search });
  const items = data?.data ?? [];
  const displayedItems = sortAssetsByChangePercent(items, sortDir);
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      <AssetFilterTabs value={filter} onChange={setFilter} />
      <AssetSeachBar
        value={searchInput}
        onChange={setSearchInput}
        onDebounce={setSearch}
      />
      <AssetsListCard
        title="Assets"
        items={displayedItems}
        sortDir={sortDir}
        onToggleSort={toggleSort}
        isLoading={isLoading}
        isError={isError}
        errorMessage={error instanceof Error ? error.message : "Unknown error"}
        onAssetClick={openAsset}
      />
      <AssetDetailsModal
        open={!!selectedAsset}
        asset={selectedAsset}
        onClose={closeAsset}
      />
    </PageLayout>
  );
}

export default Assets;
