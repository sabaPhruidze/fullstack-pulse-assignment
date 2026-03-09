import type { News } from "../../types/news";
import NewsListCard from "../../components/ui/NewsListCard";
type Props = {
  news: News;
};

function LatestNewsCard({ news }: Props) {
  return (
    <NewsListCard
      title="Recent News"
      subtitle="Latest 5"
      items={news?.data ?? []}
      maxItems={5}
    />
  );
}

export default LatestNewsCard;
