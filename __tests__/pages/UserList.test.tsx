import React from "react";
import { fireEvent, renderWithProviders, screen } from "../../src/config/renderWithProviders";
import UserList from "../../src/pages/UserList";

describe("UserList", () => {
  it("Renders without error", () => {
    renderWithProviders(<UserList />);

    const input = screen.queryByPlaceholderText("Введіть ім'я ТПО");
    expect(input).toBeInTheDocument();
    fireEvent.change(input!, { target: { value: 'test' } });

    screen.getByTestId('user-1').click();

    fireEvent.change(input!, { target: { value: 'nothing' } });
  });
});
