import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders my github profile link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Aakash Hemadri/i);
  expect(linkElement).toBeInTheDocument();
});
