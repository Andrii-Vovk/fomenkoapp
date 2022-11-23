import React from "react";
import { fireEvent, renderWithProviders, screen } from "../../src/config/renderWithProviders";
import Login from "../../src/pages/Login";

describe("Login", () => {
  it("Renders without error", () => {
    renderWithProviders(<Login />);

    const loginInput = screen.queryByPlaceholderText<HTMLInputElement>('Login');
    fireEvent.change(loginInput!, {target: {value: 'login'}});
    expect(loginInput?.value).toBe('login');

    const passwordInput = screen.queryByPlaceholderText<HTMLInputElement>('Password');
    fireEvent.change(passwordInput!, {target: {value: 'password'}});
    expect(passwordInput?.value).toBe('password');

    screen.getByText('Login').click();
  });
});
