import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import Navbar from "../../../src/ui/components/Navbar";

describe("Navbar", () => {
  it("Renders without error", () => {
    renderWithProviders(<Navbar />);

    screen.getByTestId('nav-item-2').click();
    screen.getByTestId('nav-item-3').click();
  });
});