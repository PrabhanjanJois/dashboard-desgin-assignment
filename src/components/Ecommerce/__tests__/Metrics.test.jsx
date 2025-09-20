import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Metrics from "../Metrics";
import { store } from "../../../store/store";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Metrics Component", () => {
  it("renders Metrics heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Metrics refreshKey={0} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Orders/i)).toBeInTheDocument();
  });
});
