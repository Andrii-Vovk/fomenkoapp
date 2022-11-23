import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import BasicInfoCard, { BasicInfoCardProps } from "../../../src/ui/components/BasicInfoCard";

const basicInfoCardData: BasicInfoCardProps = {
  imageSrc: "",
  age: 42,
  gender: "male",
  name: `John Doe`,
  list: [
    {
      icon: "icon",
      text: "Київ",
    },
    {
      icon: "icon",
      text: "Одружений",
    },
  ],
};

describe("BasicInfoCard", () => {
  it("Renders without error", () => {
    renderWithProviders(<BasicInfoCard {...basicInfoCardData} />);

    expect(screen.queryByText('Чоловік, 42')).toBeInTheDocument();

    basicInfoCardData.gender = 'female';

    renderWithProviders(<BasicInfoCard {...basicInfoCardData} />);

    expect(screen.queryByText('Жінка, 42')).toBeInTheDocument();
  });
});
