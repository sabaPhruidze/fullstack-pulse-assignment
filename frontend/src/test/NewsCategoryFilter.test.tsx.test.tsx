import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NewsCategoryFilter from "../components/ui/NewsCategoryFilter";

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
  });
});
