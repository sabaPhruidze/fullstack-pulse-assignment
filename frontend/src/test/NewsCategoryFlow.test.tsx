import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { type NewsCategory } from "../types/news";
import NewsCategoryFilter from "../components/ui/NewsCategoryFilter";
type Category = "all" | NewsCategory;

type NewsItem = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
};

const items: NewsItem[] = [
  { id: "1", title: "Bitcoin jumps", category: "crypto" },
  { id: "2", title: "Fed holds rates", category: "macro" },
  { id: "3", title: "Nvidia beats estimates", category: "earnings" },
];
function TestNewsFlow() {
  const [category, setCategory] = useState<Category>("all");

  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);
  return (
    <div>
      <NewsCategoryFilter value={category} onChange={setCategory} />
      <p>Showing {filteredItems.length} items</p>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
describe("News category flow", () => {
  test("Default all shows all items", () => {
    render(<TestNewsFlow />);
    expect(screen.getByText("Showing 3 items")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin jumps")).toBeInTheDocument();
    expect(screen.getByText("Fed holds rates")).toBeInTheDocument();
    expect(screen.getByText("Nvidia beats estimates")).toBeInTheDocument();
  });
  test("crypto choose only crypto news must remain", async () => {
    const user = userEvent.setup();
    render(<TestNewsFlow />);
    const filterButton = screen.getByRole("button", { name: /all/i });
    await user.click(filterButton);
    const cryptoOption = screen.getByRole("option", { name: /crypto/i });
    await user.click(cryptoOption);

    expect(screen.getByText("Showing 1 items")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin jumps")).toBeInTheDocument();
    expect(screen.queryByText("Fed holds rates")).toBeNull();
    expect(screen.queryByText("Nvidia beats estimates")).toBeNull();
  });
});
