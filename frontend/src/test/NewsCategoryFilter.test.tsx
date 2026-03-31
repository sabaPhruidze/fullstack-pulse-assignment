import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NewsCategoryFilter from "../components/ui/NewsCategoryFilter";
// this test needs browser API
describe("NewsCategoryFilter", () => {
  test("default value all is shown on button", () => {
    render(<NewsCategoryFilter value="all" onChange={vi.fn()} />);
    //screen.debug(); this shows finally what is rendered in DOM
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
  });
  test("on Choose of crypto in onChange must call using crypto", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NewsCategoryFilter value="all" onChange={onChange} />);
    const filterButton = screen.getByRole("button", { name: /all/i });
    await user.click(filterButton);
    const cryptoOption = screen.getByRole("option", { name: /crypto/i });
    await user.click(cryptoOption);
    expect(onChange).toBeCalledTimes(1); // onChange it will be called 1 time
    expect(onChange).toHaveBeenCalledWith("crypto"); // check that it function received crypto
  });
});
