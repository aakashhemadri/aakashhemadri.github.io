import React from "react";
import { render } from "@testing-library/react";
import Loading from "./App";
import Index from "./views/Index";
import App from "./App";

test("render Loading...", () => {
  const { getByText } = render(<Loading />);
  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test("Index page defined.", () => {
  expect(Index).toBeDefined();
});

test("setup index page and routing", () => {
  expect(App).toBeDefined();
});
