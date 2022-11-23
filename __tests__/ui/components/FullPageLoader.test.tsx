import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import FullPageLoader from "../../../src/ui/components/Loader/FullPageLoader";

describe("FullPageLoader", () => {
  it("Renders without error", () => {
    renderWithProviders(<FullPageLoader />);
  });
});