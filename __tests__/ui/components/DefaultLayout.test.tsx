import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import DefaultLayout from "../../../src/ui/components/DefaultLayout";

describe("DefaultLayout", () => {
  it("Renders without error", () => {
    renderWithProviders(<DefaultLayout>Child</DefaultLayout>);
    expect(screen.queryByText('Child')).toBeInTheDocument();
  });
});