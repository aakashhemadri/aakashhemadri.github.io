import React from "react";
import { render, getAllByAltText } from "@testing-library/react";
import Index from "./Index";

test("renders my github profile link", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText("$ ./Aakash\\ Hemadri");
  expect(linkElement).toBeInTheDocument();
});
