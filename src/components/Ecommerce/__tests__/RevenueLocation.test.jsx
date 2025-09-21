import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import RevenueLocation from "../RevenueLocation";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../../../store/themeSlice";
import { revenueLocations as initialRevenueLocations } from "../../../utils/data";

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("RevenueLocation Component", () => {
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
        <RevenueLocation refreshKey={0} />
      </Provider>
    );

    expect(screen.getByText(/Revenue by Location/i)).toBeInTheDocument();
  });

  it("renders map image based on theme", () => {
    // Dark theme
    const { rerender } = render(
      <Provider store={darkStore}>
        <RevenueLocation refreshKey={0} />
      </Provider>
    );
    const darkMap = screen.getByRole("img");
    expect(darkMap).toHaveAttribute(
      "src",
      expect.stringContaining("world-map-dark")
    );

    // Light theme
    rerender(
      <Provider store={lightStore}>
        <RevenueLocation refreshKey={0} />
      </Provider>
    );
    const lightMap = screen.getByRole("img");
    expect(lightMap).toHaveAttribute(
      "src",
      expect.stringContaining("world-map")
    );
  });

  it("renders location names and revenue values", () => {
    render(
      <Provider store={lightStore}>
        <RevenueLocation refreshKey={0} />
      </Provider>
    );

    initialRevenueLocations.forEach((loc) => {
      expect(screen.getByText(loc.place)).toBeInTheDocument();
      expect(screen.getByText(`${loc.revenue}K`)).toBeInTheDocument();
    });
  });

  it("renders progress bars for each location", () => {
    const { container } = render(
      <Provider store={lightStore}>
        <RevenueLocation refreshKey={0} />
      </Provider>
    );

    const progressBars = container.querySelectorAll(
      "div.pt-4.pb-1 > div.absolute > div > div"
    );
    expect(progressBars.length).toBe(initialRevenueLocations.length);
  });
});
