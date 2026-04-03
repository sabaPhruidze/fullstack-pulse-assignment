import PortfolioPerformanceSection from "../components/portfolio/PortfolioPerformanceSection";
import PortfolioAllocationSection from "../components/portfolio/PortfolioAllocationSection";
import PortfolioAssetChangeSection from "../components/portfolio/PortfolioAssetChangeSection";
import PortfolioHoldingsSection from "../components/portfolio/PortfolioHoldingsSection";
import PortfolioWatchlistSection from "../components/portfolio/PortfolioWatchlistSection";
import PortfolioInfluencersSection from "../components/portfolio/PortfolioInfluencersSection";
import type {
  PortfolioData,
  PortfolioPerformanceData,
  Influencer,
} from "../types/portfolio";

type GetPortfolioSectionsParams = {
  performance?: PortfolioPerformanceData;
  portfolio: PortfolioData;
  influencers: Influencer[];
};

type PortfolioSectionItem = {
  key: string;
  content: React.ReactNode;
};

const emptyCardClassName =
  "rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500 dark:border-pulse-border dark:bg-pulse-surface dark:text-pulse-soft";

export const getPortfolioSections = ({
  performance,
  portfolio,
  influencers,
}: GetPortfolioSectionsParams): PortfolioSectionItem[] => {
  return [
    {
      key: "overview",
      content: (
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Portfolio Overview
        </h2>
      ),
    },
    {
      key: "performance",
      content: performance ? (
        <PortfolioPerformanceSection performance={performance} />
      ) : (
        <div className={emptyCardClassName}>Summary cards are unavailable</div>
      ),
    },
    {
      key: "allocation",
      content: performance ? (
        <PortfolioAllocationSection performance={performance} />
      ) : (
        <div className={emptyCardClassName}>
          Asset allocation chart is unavailable
        </div>
      ),
    },
    {
      key: "asset-change",
      content: <PortfolioAssetChangeSection assets={portfolio.assets} />,
    },
    {
      key: "holdings",
      content: <PortfolioHoldingsSection assets={portfolio.assets} />,
    },
    {
      key: "watchlist",
      content: <PortfolioWatchlistSection watchlist={portfolio.watchlist} />,
    },
    {
      key: "influencers",
      content: influencers ? (
        <PortfolioInfluencersSection influencers={influencers} />
      ) : (
        <div className={emptyCardClassName}>influencers is unavailable</div>
      ),
    },
  ];
};
