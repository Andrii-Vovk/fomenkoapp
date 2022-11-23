import React, { FunctionComponent } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  Filler,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IncomeLineChartProps {
  averageData: number[];
  userData: number[];
  aidData: number[];
}

const padToTwelve = (array: number[]) => [
  ...Array.from({ length: 4 })
    .fill(null)
    .slice(0, -1 * array.length),
  ...array,
];

const IncomeLineChart: FunctionComponent<IncomeLineChartProps> = ({
  averageData,
  userData,
  aidData,
}) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Ваші доходи",
        backgroundColor: "rgb(75, 192, 192)",
        data: padToTwelve(userData),
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
      },
      {
        type: "line" as const,
        label: "Ваша допомога",
        backgroundColor: "rgb(237, 200, 18)",
        data: padToTwelve(aidData),
        borderColor: "rgb(237, 200, 18)",
        borderWidth: 2,
      },
      {
        type: "line" as const,
        fill: true,
        label: "Середні доходи",
        data: padToTwelve(averageData),
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        borderColor: "rgba(53, 162, 235, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return <Chart type="line" data={data} />;
};

export default IncomeLineChart;
