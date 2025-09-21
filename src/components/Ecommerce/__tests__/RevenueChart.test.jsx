import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import RevenueChart from "../RevenueChart";
import { store } from "../../../store/store";

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("RevenueChart Component", () => {
  it("renders heading and revenue labels", () => {
    render(
      <Provider store={store}>
        <RevenueChart refreshKey={0} />
      </Provider>
    );

    // heading
    expect(screen.getByText(/Revenue/i)).toBeInTheDocument();

    // revenue labels
    expect(screen.getByText(/Current Week/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Week/i)).toBeInTheDocument();
  });

  it("renders revenue values", () => {
    render(
      <Provider store={store}>
        <RevenueChart refreshKey={0} />
      </Provider>
    );

    // initial values
    expect(screen.getByText("$58,211")).toBeInTheDocument();
    expect(screen.getByText("$68,768")).toBeInTheDocument();
  });

  it("renders RevenueChart container with correct theme", () => {
    render(
      <Provider store={store}>
        <RevenueChart refreshKey={0} />
      </Provider>
    );

    const container = screen.getByTestId("revenue-chart-container");
    expect(["light", "dark"]).toContain(container.getAttribute("data-theme"));
  });
});
