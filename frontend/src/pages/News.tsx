import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import NewsCategoryFilter, {
  type NewsCategoryFilterValue,
} from "../components/ui/NewsCategoryFilter";
const News = () => {
  const [category, setCategory] = useState<NewsCategoryFilterValue>("all");
  return (
    <PageLayout title="News" subtitle="Market news with category filtering.">
      <NewsCategoryFilter value={category} onChange={setCategory} />
      <div className="text- sm text-pulse-soft mt-2">Coming soon...</div>;
    </PageLayout>
  );
};

export default News;
