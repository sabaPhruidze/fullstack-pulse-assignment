import SectionCard from "./SectionCard";
import type { ReceiveNews } from "../../types/news";
import NewsListItem from "./NewsListItem";
import Loading from "../shared/Loading";

type Props = {
  title?: string;
  subtitle?: string;
  items: ReceiveNews[];

  maxItems?: number;

  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};
const NewsListCard = ({
  title = "Recent News",
  subtitle,
  items,
  maxItems,
  isLoading = false,
  isError = false,
  errorMessage,
}: Props) => {
  const visibleItems = maxItems ? items.slice(0, maxItems) : items;
  return (
    <SectionCard title={title}>
      {subtitle && (
        <p className="text-xs font-semibold mt-1 text-slate-500 dark:text-pulse-soft">
          {subtitle}
        </p>
      )}
      <div className="mt-3">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-sm text-red-600 dark:text-pulse-danger">
            {errorMessage || "Error loading news"}
          </p>
        ) : Object.is(visibleItems.length, 0) ? (
          <p className="text-sm mt-3  text-slate-500 dark:text-pulse-soft">
            no news available
          </p>
        ) : (
          visibleItems.map((item, idx) => {
            return (
              <NewsListItem
                key={item.id}
                item={item}
                showDivider={idx !== visibleItems.length - 1}
              />
            );
          })
        )}
      </div>
    </SectionCard>
  );
};

export default NewsListCard;
