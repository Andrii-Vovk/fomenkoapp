import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import ListInfoCard from "../../../src/ui/components/ListInfoCard";

const TEST_DATA = [
    {
        text: 'Test',
        icon: 'Icon',
    }
];

describe("ListInfoCard", () => {
  it("Renders without error", () => {
    renderWithProviders(<ListInfoCard title="Test" list={TEST_DATA} />);
  });
});