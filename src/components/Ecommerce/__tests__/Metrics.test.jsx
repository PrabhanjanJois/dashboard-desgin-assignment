import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Metrics from "../Metrics";
import { store } from "../../../store/store";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Metrics Component", () => {
  it("renders status cards with heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Metrics refreshKey={0} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Projections vs Actual/i)).toBeInTheDocument();
    expect(screen.getByText(/Orders/i)).toBeInTheDocument();
  });

  it("navigates when Orders card is clicked", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Metrics refreshKey={0} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText(/Orders/i));
    expect(mockNavigate).toHaveBeenCalledWith("/orders");
  });

  it("renders chart container", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Metrics refreshKey={0} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Projections vs Actual/i)).toBeInTheDocument();
  });
});
