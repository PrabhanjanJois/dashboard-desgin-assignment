import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../../../store/themeSlice";
import LeftSideBar from "../LeftSideBar";

const store = configureStore({
  reducer: { theme: themeSlice },
});

describe("LeftSideBar Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LeftSideBar />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders user dropdown", () => {
    const dropdown = screen.getByTestId("user-dropdown");
    expect(dropdown).toBeInTheDocument();
  });

  it("renders tabs", () => {
    const favoritesTab = screen.getByTestId("tab-Favorites");
    const recentlyTab = screen.getByTestId("tab-Recently");
    expect(favoritesTab).toBeInTheDocument();
    expect(recentlyTab).toBeInTheDocument();

    fireEvent.click(favoritesTab);
    fireEvent.click(recentlyTab);
  });

  it("renders dashboard items and can navigate", () => {
    const ordersDashboard = screen.getByTestId("dashboard-Orders");
    const ecommerceDashboard = screen.getByTestId("dashboard-eCommerce");

    expect(ordersDashboard).toBeInTheDocument();
    expect(ecommerceDashboard).toBeInTheDocument();

    fireEvent.click(ordersDashboard);
    fireEvent.click(ecommerceDashboard);
  });

  it("renders page menu items", () => {
    const userProfile = screen.getByTestId("menuitem-User Profile");
    const account = screen.getByTestId("menuitem-Account");

    expect(userProfile).toBeInTheDocument();
    expect(account).toBeInTheDocument();

    fireEvent.click(userProfile); // toggles children if any
  });
});
