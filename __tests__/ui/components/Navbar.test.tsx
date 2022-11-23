import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import Navbar from "../../../src/ui/components/Navbar";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

jest.mock('../../../src/store', () => jest.fn(() => ({
  user: {
    username: 'Test',
    role: 'user',
  },
  removeUser: jest.fn(),
})));

describe("Navbar", () => {
  it("Renders without error", () => {
    renderWithProviders(<Navbar />);

    screen.getByTestId('nav-item-2').click();
    screen.getByTestId('nav-item-3').click();
  });
});