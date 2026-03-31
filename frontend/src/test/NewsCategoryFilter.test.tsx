import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NewsCategoryFilter from "../components/ui/NewsCategoryFilter";
// this test needs browser API
describe("NewsCategoryFilter", () => {
  test("default value all is shown on button", () => {
    render(<NewsCategoryFilter value="all" onChange={vi.fn()} />);
    screen.debug(); //this shows finally what is rendered in DOM
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
  });
});
