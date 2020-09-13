import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should render InfoClima component in App", () => {
  const { getAllByTestId } = render(<App />);
  const appContainer = getAllByTestId("info-component");

  expect(appContainer.length).toBe(1);
});

test("Should render InputLocal component in App", () => {
  const { getAllByTestId } = render(<App />);
  const appContainer = getAllByTestId("input-component");

  expect(appContainer.length).toBe(1);
});
