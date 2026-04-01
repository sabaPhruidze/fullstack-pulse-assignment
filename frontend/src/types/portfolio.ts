interface PortfolioAsset {
  assetId: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  value: number;
  change: number;
  changePercent: number;
}
export interface PortfolioData {
  userId: string;
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  assets: PortfolioAsset[];
  watchlist: string[];
}
export interface PortfolioResponse {
  success: boolean;
  data: PortfolioData;
}
export interface AssetAllocationItem {
  assetId: string;
  percentage: number;
  value: number;
}
export interface PortfolioPerformanceData {
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  bestPerformer: PortfolioAsset;
  worstPerformer: PortfolioAsset;
  assetAllocation: AssetAllocationItem[];
}
export interface PortfolioPerformanceResponse {
  success: boolean;
  data: PortfolioPerformanceData;
}
export type PredictionType = "bullish" | "bearish";

export interface InfluencerPrediction {
  id: string;
  asset: string;
  prediction: PredictionType;
  confidence: number;
  timestamp: string;
  targetPrice: number;
  timeframe: string;
}
export interface Influencer {
  id: string;
  name: string;
  handle: string;
  platform: string;
  followerCount: number;
  credibilityScore: number;
  recentPredictions: InfluencerPrediction[];
  sentiment: number;
}
export interface InfluencersResponse {
  success: boolean;
  count: number;
  data: Influencer[];
}
