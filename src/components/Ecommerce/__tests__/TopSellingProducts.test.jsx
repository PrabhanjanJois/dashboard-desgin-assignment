import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../../../store/themeSlice";
import TopSellingProducts from "../TopSellingProducts";
import { tableData } from "../../../utils/data";

describe("TopSellingProducts Component", () => {
  // Custom stores for light and dark theme
  const darkStore = configureStore({
    reducer: { theme: themeSlice },
    preloadedState: { theme: { theme: true } },
  });

  const lightStore = configureStore({
    reducer: { theme: themeSlice },
    preloadedState: { theme: { theme: false } },
  });

  it("renders heading", () => {
    render(
      <Provider store={lightStore}>
        <TopSellingProducts />
      </Provider>
    );

    expect(screen.getByText(/Top Selling Products/i)).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(
      <Provider store={lightStore}>
        <TopSellingProducts />
      </Provider>
    );

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantity/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount/i)).toBeInTheDocument();
  });

  it("renders all table rows from tableData", () => {
    render(
      <Provider store={lightStore}>
        <TopSellingProducts />
      </Provider>
    );

    tableData.forEach((item, index) => {
      expect(screen.getByTestId(`name-${index}`)).toHaveTextContent(item.name);
      expect(screen.getByTestId(`price-${index}`)).toHaveTextContent(
        item.price.toString()
      );
      expect(screen.getByTestId(`quantity-${index}`)).toHaveTextContent(
        item.quantity.toString()
      );
      expect(screen.getByTestId(`amount-${index}`)).toHaveTextContent(
        item.amount.toString()
      );
    });
  });

  it("renders correctly in dark theme", () => {
    render(
      <Provider store={darkStore}>
        <TopSellingProducts />
      </Provider>
    );

    const container = screen.getByText(/Top Selling Products/i).closest("div");
    expect(container).toHaveClass("bg-[#FFFFFF1A]");
  });

  it("renders correctly in light theme", () => {
    render(
      <Provider store={lightStore}>
        <TopSellingProducts />
      </Provider>
    );

    const container = screen.getByText(/Top Selling Products/i).closest("div");
    expect(container).toHaveClass("bg-[#F7F9FB]");
  });
});
