import { useMemo, useState } from "react";
import useNews from "../api/hooks/useNews";
import PageLayout from "../components/layout/PageLayout";
import NewsCategoryFilter, {
  type NewsCategoryFilterValue,
} from "../components/ui/NewsCategoryFilter";
import NewsListCard from "../components/ui/NewsListCard";
const News = () => {
  const [category, setCategory] = useState<NewsCategoryFilterValue>("all");
  const { data, isLoading, isError, error } = useNews();
  const items = data?.data ?? [];
  const filteredItems = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [items, category]);
  return (
    <PageLayout title="News" subtitle="Market news with category filtering.">
      <NewsCategoryFilter value={category} onChange={setCategory} />
      <NewsListCard
        title="All News"
        subtitle={`Showing ${filteredItems.length} items`}
        items={filteredItems}
        isLoading={isLoading}
        isError={isError}
        errorMessage={error instanceof Error ? error.message : "Unknown error"}
      />
    </PageLayout>
  );
};

export default News;
