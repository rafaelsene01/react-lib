import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
  test("validate button label", () => {
    render(<Button label="Hello world!" />);
    expect(screen.getByRole("button")).toHaveTextContent("Hello world!");
  });
});
