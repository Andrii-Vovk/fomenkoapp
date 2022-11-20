import { FunctionComponent } from "react";
import Chart from "react-google-charts";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HistoryMapProps {
    data: any[];
}

const HistoryMap: FunctionComponent<HistoryMapProps> = (props) => {

    
    const options = {
        region: "UA",
        resolution: "provinces",
        colorAxis: { colors: ["#B2F5EA", "#38B2AC"] },
    };

    return (<Chart
        chartEvents={[
            {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = props.data[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
            },
        ]}
        chartType="GeoChart"

        width="100%"
        height="400px"
        data={props.data}
        options={options}
    />);
}

export default HistoryMap;