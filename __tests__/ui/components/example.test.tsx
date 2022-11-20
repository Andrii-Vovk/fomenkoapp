import React from "react";
import MyButton from "../../../src/ui/components/button";
import { renderWithProviders } from "../../../src/config/renderWithProviders";

describe("Button", () => {
  it("renders without error", () => {
    renderWithProviders(<MyButton text="sfa" />);
  });
});
