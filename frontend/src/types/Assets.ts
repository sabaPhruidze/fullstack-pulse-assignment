export interface TopMover {
  id: string;
  symbol: string;
  name: string;
  sector?: string;
  currentPrice: number;
  changePercent: number;
}
export type AssetFilter = "all" | "stocks" | "crypto";
export interface Assets {
  success: boolean;
  count: number;
  data: TopMover[];
}

export type Params = {
  filter?: AssetFilter;
  search?: string;
};
