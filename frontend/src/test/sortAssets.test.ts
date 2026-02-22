import { describe, test, expect } from "vitest";
import { sortAssetsByChangePercent } from "../lib/sortAssets";

describe("sortAssetsByChangePercent", () => {
  test("ASC:sorts with the changePercent in an ascending order", () => {
    const items = [
      { symbol: "NVDA", changePercent: 3.45 },
      { symbol: "AAPL", changePercent: 2.34 },
      { symbol: "ETH", changePercent: -1.15 },
    ];
    const result = sortAssetsByChangePercent(items, "asc");
    expect(result.map((x) => x.symbol)).toEqual(["ETH", "AAPL", "NVDA"]);
  });
  test("DESC: sorts with changePercent in a descending order", () => {
    const items = [
      { symbol: "NVDA", changePercent: 3.45 },
      { symbol: "AAPL", changePercent: 2.34 },
      { symbol: "ETH", changePercent: -1.15 },
    ];
    const result = sortAssetsByChangePercent(items, "desc");
    expect(result.map((x) => x.symbol)).toEqual(["NVDA", "AAPL", "ETH"]);
  });
});
