import { FunctionComponent } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Heading, Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IncomePieChartProps {
    aid: number;
    salary: number;
}

const IncomePieChart: FunctionComponent<IncomePieChartProps> = (props) => {
    const data = {
        labels: ['Власний дохід', 'Отримана фінансова допомога'],
        datasets: [
            {
                label: 'Розмір доходу',
                data: [props.aid, props.salary],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
            },
        ],
    };

    type position = 'bottom'

    const options = {
        plugins: {
            legend: {
                position: 'bottom' as position
            }
        }
    }
    return <Box mt={'1em'}>
        <Heading fontSize={'1.2em'} fontWeight={'400'} mb={'0.5em'}>Загальний дохід: <b>{props.aid + props.salary} гривень</b></Heading>
        <Doughnut data={data} options={options} />
    </Box>;
}

export default IncomePieChart;