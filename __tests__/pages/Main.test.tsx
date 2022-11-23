import React from "react";
import { renderWithProviders, screen } from "../../src/config/renderWithProviders";
import Main, { ModuleCard } from "../../src/pages/Main";

describe("Main", () => {
  it("Renders without error", () => {
    renderWithProviders(<Main />);

    const logoutButton = screen.getByText("Вихід");
    expect(logoutButton).toBeInTheDocument();
    logoutButton.click();

    const openButton = screen.queryByText('Відкрити');
    expect(openButton).toBeInTheDocument();
    openButton!.click();
  });
});

describe("ModuleCard", () => {
  it("Renders without error", () => {
    renderWithProviders(<ModuleCard title="Title" description="Desc" />);

    expect(screen.queryByText('Title')).toBeInTheDocument();
  });
});