import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Orders from "../Orders";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { store } from "../../../store/store";
describe("Orders Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Orders />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders toolbar buttons and search input", () => {
    expect(screen.getByTestId("add-order-btn")).toBeInTheDocument();
    expect(screen.getByTestId("filter-btn")).toBeInTheDocument();
    expect(screen.getByTestId("sort-btn")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("can type in search input", () => {
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "Order 1" } });
    expect(input.value).toBe("Order 1");
  });

  it("toggles sort by status when sort button clicked", () => {
    const sortBtn = screen.getByTestId("sort-btn");
    fireEvent.click(sortBtn);
  });

  it("pagination buttons work", () => {
    fireEvent.click(screen.getByTestId("page-btn-2"));
    fireEvent.click(screen.getByTestId("prev-page-btn"));
    fireEvent.click(screen.getByTestId("next-page-btn"));
  });

  it("copy address button triggers clipboard", () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });

    const copyBtn = screen.getByTestId("copy-address-#CM9801");
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });
  it("checkboxes toggle correctly", () => {
    const firstCheckbox = screen.getByTestId("checkbox-#CM9801");
    fireEvent.click(firstCheckbox);
    fireEvent.click(firstCheckbox);
  });
});
