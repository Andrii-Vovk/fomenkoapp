import React from "react";
import { renderWithProviders, screen } from "../../src/config/renderWithProviders";
import Main, { ModuleCard } from "../../src/pages/Main";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

jest.mock('../../src/store', () => jest.fn(() => ({
  user: {
    username: 'Test',
  }
})));

describe("Main", () => {
  it("Renders without error", () => {
    renderWithProviders(<Main />);

    expect(screen.queryByText('Відкрити')).toBeInTheDocument();
  });
});

describe("ModuleCard", () => {
  it("Renders without error", () => {
    renderWithProviders(<ModuleCard title="Title" description="Desc" />);

    expect(screen.queryByText('Title')).toBeInTheDocument();
  });
});