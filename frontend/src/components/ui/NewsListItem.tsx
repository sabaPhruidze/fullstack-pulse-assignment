import { formatTimesSTamp } from "../../lib/format";
import { badgeClassByCategory, badgeClassByImpact } from "../../lib/badges";
import type { ReceiveNews } from "../../types/news";

type Props = {
  item: ReceiveNews;
  showDivider?: boolean;
};

const NewsListItem = ({ item, showDivider = false }: Props) => {
  const visibleTags = item.tags.slice(0, 3);
  const remainingTags = item.tags.length - visibleTags.length;
  return (
    <div className="py-2">
      <div className=" flex items-start justify-between gap-3">
        <p className="text-pulse-text text-sm font-bold">{item.title}</p>
        <div className="flex gap-2 shrink-0">
          <span
            className={`px-2 py-1 rounded-full text-sm font-semibold ${badgeClassByCategory(item.category)}`}
          >
            {item.category}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-sm font-semibold ${badgeClassByImpact(item.impact)}`}
          >
            {item.impact}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs font-semibold text-pulse-soft">
        {item.source} • {formatTimesSTamp(item.timestamp)}
      </p>
      <p className="mt-2 text-sm font-semibold text-pulse-muted">
        {item.summary}
      </p>
      {item.tags.length && (
        <div className="mt-3 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span className="rounded-full border border-pulse-border bg-pulse-border/40 px-2 py-1 text-sm font-semibold text-pulse-soft">
              #{tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className="rounded-full border border-pulse-border bg-pulse-border/40 px-2 py-1 text-sm font-semibold text-pulse-soft">
              +{remainingTags}
            </span>
          )}
        </div>
      )}
      {showDivider && <hr className="mt-4 border-pulse-border" />}
    </div>
  );
};

export default NewsListItem;
