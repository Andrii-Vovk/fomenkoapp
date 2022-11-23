import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import BasicInfoCard, { BasicInfoCardProps } from "../../../src/ui/components/BasicInfoCard";

const basicInfoCardData: BasicInfoCardProps = {
  imageSrc: "",
  age: 42,
  gender: "male",
  name: `John Doe`,
  list: [
    {
      icon: <CiLocationOn fontSize={"1.5em"} />,
      text: "Київ",
    },
    {
      icon: <MdFamilyRestroom fontSize={"1.5em"} />,
      text: "Одружений",
    },
  ],
};

describe("BasicInfoCard", () => {
  it("Renders without error", () => {
    renderWithProviders(<BasicInfoCard {...basicInfoCardData} />);

    expect(screen.queryByText('Чоловік, 42')).toBeInTheDocument();
  });
});
