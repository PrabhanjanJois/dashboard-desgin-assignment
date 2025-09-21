// src/components/Header/__tests__/Header.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Header from "../Header";
import { store } from "../../../store/store";

// Mock react-router-dom hooks
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: "/orders" }),
  };
});

// Mock localStorage for PageStar
beforeEach(() => {
  localStorage.clear();
  localStorage.setItem("starredPages", JSON.stringify({ "/orders": true }));
});

describe("Header Component", () => {
  it("renders search input and dashboard elements", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header onToggleLeft={vi.fn()} onToggleRight={vi.fn()} />
        </BrowserRouter>
      </Provider>
    );
    const dashboardsBtn = screen.getByTestId("dashboard-btn");
    const ordersBtn = screen.getByTestId("orders-btn");

    expect(dashboardsBtn).toBeInTheDocument();
    expect(ordersBtn).toBeInTheDocument();

    fireEvent.click(dashboardsBtn);
    fireEvent.click(ordersBtn);
  });

  it("toggles left and right sidebars when icons clicked", () => {
    const leftMock = vi.fn();
    const rightMock = vi.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header onToggleLeft={leftMock} onToggleRight={rightMock} />
        </BrowserRouter>
      </Provider>
    );

    const leftIcon = screen.getByTestId("left-toggle");
    const rightIcon = screen.getByTestId("right-toggle");

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();

    fireEvent.click(leftIcon);
    fireEvent.click(rightIcon);

    // optionally test that mock functions are called

    expect(leftMock).toHaveBeenCalled();
    expect(rightMock).toHaveBeenCalled();
  });

  it("toggles theme when theme icon clicked", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header onToggleLeft={vi.fn()} onToggleRight={vi.fn()} />
        </BrowserRouter>
      </Provider>
    );

    const themeIcon = screen.getByTestId("theme-toggle");
    fireEvent.click(themeIcon);

    // Verify Redux store updated
    expect(store.getState().theme.theme).toBe(true); // assuming initial theme was false
  });

  it("renders and toggles PageStar icon correctly", () => {
    // Set initial localStorage state for /orders
    localStorage.setItem("starredPages", JSON.stringify({ "/orders": true }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header onToggleLeft={vi.fn()} onToggleRight={vi.fn()} />
        </BrowserRouter>
      </Provider>
    );

    // Get the star icon via data-testid
    const star = screen.getByTestId("page-star");
    expect(star).toBeInTheDocument();

    // Click to toggle the star
    fireEvent.click(star);

    // Verify localStorage updated
    const stored = JSON.parse(localStorage.getItem("starredPages"));
    expect(stored["/orders"]).toBe(false); // toggled from true to false
  });

  it("navigates to correct route on DashboardRouter clicks", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header onToggleLeft={vi.fn()} onToggleRight={vi.fn()} />
        </BrowserRouter>
      </Provider>
    );

    const dashboards = screen.getAllByText(/Dashboards/i)[0];
    fireEvent.click(dashboards);
    expect(mockNavigate).toHaveBeenCalledWith("/");

    const orders = screen.getByText(/Order List/i);
    fireEvent.click(orders);
    expect(mockNavigate).toHaveBeenCalledWith("/orders");
  });
});
