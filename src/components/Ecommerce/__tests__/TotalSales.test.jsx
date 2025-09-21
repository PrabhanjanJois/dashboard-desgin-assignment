import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../../../store/themeSlice";
import TotalSales from "../TotalSales";
import { totalSales } from "../../../utils/data";

// Custom stores for light and dark theme
const darkStore = configureStore({
  reducer: { theme: themeSlice },
  preloadedState: { theme: { theme: true } },
});

const lightStore = configureStore({
  reducer: { theme: themeSlice },
  preloadedState: { theme: { theme: false } },
});

describe("TotalSales Component", () => {
  it("renders heading", () => {
    render(
      <Provider store={lightStore}>
        <TotalSales />
      </Provider>
    );

    expect(screen.getByText(/Total Sales/i)).toBeInTheDocument();
  });

  it("renders all total sales items", () => {
    render(
      <Provider store={lightStore}>
        <TotalSales />
      </Provider>
    );

    totalSales.forEach((item) => {
      expect(screen.getByText(item.item)).toBeInTheDocument();
      expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    });
  });

  //   it("renders dark theme correctly", () => {
  //     render(
  //       <Provider store={darkStore}>
  //         <TotalSales />
  //       </Provider>
  //     );

  //     const container = screen.getByText(/Total Sales/i).closest("div");
  //     expect(container).toHaveClass("bg-[#FFFFFF1A]");

  //     // Check that first item's color indicator is using dark color
  //     const firstItemDot = screen
  //       .getByText(totalSales[0].item)
  //       .previousSibling.querySelector("svg");
  //     expect(firstItemDot).toHaveAttribute("color", totalSales[0].darkColor);
  //   });

  it("renders dark theme correctly", () => {
    render(
      <Provider store={darkStore}>
        <TotalSales />
      </Provider>
    );

    const container = screen.getByText(/Total Sales/i).closest("div");
    expect(container).toHaveClass("bg-[#FFFFFF1A]");

    const firstDot = screen.getByTestId("dot-0");
    expect(firstDot).toHaveStyle(`color: ${totalSales[0].darkColor}`);
  });

  it("renders light theme correctly", () => {
    render(
      <Provider store={lightStore}>
        <TotalSales />
      </Provider>
    );

    const container = screen.getByText(/Total Sales/i).closest("div");
    expect(container).toHaveClass("bg-[#F7F9FB]");

    const firstDot = screen.getByTestId("dot-0");
    expect(firstDot).toHaveStyle(`color: ${totalSales[0].color}`);
  });
});
