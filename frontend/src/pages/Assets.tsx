import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import AssetFilterTabs, { AssetFilter } from "../components/ui/AssetFilterTabs";

function Assets() {
  const [filter, setFilter] = useState<AssetFilter>("all");
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      <AssetFilterTabs value={filter} onChange={setFilter} />
      <div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search by symbol or name..."
            className="search-bar"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Assets;
