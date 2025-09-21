import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../../../store/themeSlice";
import RightSideBar from "../RightSideBar";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: { theme: themeSlice },
});

describe("RightSideBar Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RightSideBar />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders Notifications panel and items", () => {
    const notificationsPanel = screen.getByTestId("panel-notifications");
    expect(notificationsPanel).toBeInTheDocument();

    const firstNotification = screen.getByTestId("notification-0");
    expect(firstNotification).toBeInTheDocument();
  });

  it("renders Activities panel and items", () => {
    const activitiesPanel = screen.getByTestId("panel-activities");
    expect(activitiesPanel).toBeInTheDocument();

    const firstActivity = screen.getByTestId("activity-0");
    expect(firstActivity).toBeInTheDocument();
  });

  it("renders Contacts panel and items", () => {
    const contactsPanel = screen.getByTestId("panel-contacts");
    expect(contactsPanel).toBeInTheDocument();

    const firstContact = screen.getByTestId("contact-0");
    expect(firstContact).toBeInTheDocument();
  });
});
