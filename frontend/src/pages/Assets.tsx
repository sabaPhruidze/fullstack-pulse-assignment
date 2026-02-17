import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import AssetFilterTabs, { AssetFilter } from "../components/ui/AssetFilterTabs";
import AssetSeachBar from "../components/ui/AssetSeachBar";
function Assets() {
  const [filter, setFilter] = useState<AssetFilter>("all");
  const [search, setSearch] = useState<string>("");
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      <AssetFilterTabs value={filter} onChange={setFilter} />
      <AssetSeachBar value={search} onChange={setSearch} />
    </PageLayout>
  );
}

export default Assets;
