import React, { FunctionComponent } from 'react';
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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

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

}

const IncomeLineChart: FunctionComponent<IncomeLineChartProps> = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Ваші доходи',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [500, 521, 342, 544, 134],
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
            },
            {
                type: 'line' as const,
                fill: true,
                label: 'Середні доходи',
                data: [400, 421, 242, 444, 34],
                backgroundColor: 'rgba(53, 162, 235, 0.2)',
                borderColor: 'rgba(53, 162, 235, 0.2)',
                borderWidth: 2,
            },
        ],
    };

    return ( <Chart type='line' data={data} /> );
}

export default IncomeLineChart;