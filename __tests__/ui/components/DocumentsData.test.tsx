import React from "react";
import { renderWithProviders, screen } from "../../../src/config/renderWithProviders";
import DocumentsData from "../../../src/ui/components/DocumentsData";

const TEST_DATA = [
    {
        type: 'dmsu',
        text: 'ДМСУ',
    },
    {
        type: 'diia',
        text: 'Дія',
    },
    {
        type: 'helsi',
        text: 'Хелсі',
    },
]

describe("DocumentsData", () => {
  it("Renders without error", () => {
    renderWithProviders(<DocumentsData documentData={TEST_DATA} />);
  });
});