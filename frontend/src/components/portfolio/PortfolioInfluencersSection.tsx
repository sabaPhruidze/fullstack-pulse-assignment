import type { InfluencersResponse } from "../../types/portfolio";
type Props = {
  influencers: InfluencersResponse["data"];
};
import PortfolioSectionCard from "./PortfolioSectionCard";
const PortfolioInfluencersSection = ({ influencers }: Props) => {
  if (influencers.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-pulse-border dark:bg-pulse-surface">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Influencers
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-pulse-soft">
          No influencer data avaliable.
        </p>
      </div>
    );
  }
  return (
    <PortfolioSectionCard title="Influencers">
      <div className="mt-4 space-y-3">
        {influencers.map((item) => {
          const recentPrediction = item.recentPredictions[0];
          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 p-4 dark:border-pulse-border"
            >
              <p className="font-semibold text-slate-900 dark:text-white">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-pulse-soft">
                {item.handle} • {item.platform}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-pulse-soft">
                Credibility:{item.credibilityScore} | Sentiment:{" "}
                {item.sentiment}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-pulse-soft">
                Recent: {recentPrediction?.asset} -{" "}
                {recentPrediction?.prediction}
              </p>
            </div>
          );
        })}
      </div>
    </PortfolioSectionCard>
  );
};

export default PortfolioInfluencersSection;
