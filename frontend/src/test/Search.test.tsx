import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Search from "../components/header/Search";
import userEvent from "@testing-library/user-event";

describe("Header Search", () => {
  test("renders search input", () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByRole("searchbox");
    expect(input).toBeInTheDocument();
  });
  test("Open dropdown menu when user clicks the search input", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    const input = screen.getByRole("searchbox");
    await user.click(input);
    expect(
      screen.getByRole("button", { name: /dashboard/i }), //case insentive
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /assets/i })).toBeInTheDocument();
  });
});
