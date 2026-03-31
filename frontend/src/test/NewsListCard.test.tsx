import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NewsListCard from "../components/ui/NewsListCard";
import type { ReceiveNews } from "../types/news";

const items: ReceiveNews[] = [
  {
    id: "1",
    title: "Bitcoin jumps",
    source: "CoinDesk",
    category: "crypto",
    timestamp: "2026-03-30T10:00:00.000Z",
    impact: "high",
    summary: "Bitcoin price moved higher after strong buying pressure.",
    tags: ["btc", "market"],
  },
  {
    id: "2",
    title: "Fed holds rates",
    source: "Reuters",
    category: "macro",
    timestamp: "2026-03-30T11:00:00.000Z",
    impact: "medium",
    summary: "Federal Reserve kept rates unchanged in latest meeting.",
    tags: ["fed", "rates"],
  },
];
describe("NewsListCard", () => {
  test("renders item titles when items are provided", () => {
    render(<NewsListCard items={items} />);
    expect(screen.getByText("Bitcoin jumps")).toBeInTheDocument();
    expect(screen.getByText("Fed holds rates")).toBeInTheDocument();
  });
  test("shows loading UI when isloading is true", () => {
    render(<NewsListCard items={items} isLoading={true} />);
    const loadingStatus = screen.getByRole("status", { name: /loading/i });

    expect(loadingStatus).toBeInTheDocument();
    expect(screen.queryByText("Bitcoin jumps")).toBeNull();
    expect(screen.queryByText("Fed holds rates")).toBeNull();
  });
});
