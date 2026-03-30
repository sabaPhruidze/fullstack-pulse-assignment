import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NewsCategoryFilter from "../components/ui/NewsCategoryFilter";
import { type NewsCategory } from "../types/news";

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
// this test needs browser API
describe("NewsCategoryFilter", () => {
  test("on choose of crypto in onchange must call using crypto", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn(); //fake function

    render(<NewsCategoryFilter value="all" onChange={onChange} />);
    const filterButton = screen.getByRole("button", { name: /all/i });
    //finding dropdown button by role and text
    await user.click(filterButton);
    //opening dropdown menu
    const cryptoOption = screen.getByRole("option", { name: /crypto/i });
    // searching crypto in open menu
    await user.click(cryptoOption); //customer choose crypto
    expect(onChange).toHaveBeenCalledTimes(1);
    // check that onchange will be called 1 time
    expect(onChange).toHaveBeenCalledWith("crypto");
    //check that it called crypto and not anything other
  });
});
