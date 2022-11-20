import Chart from "react-google-charts";

const data = [
    ["Регіон", "Назва", "Число для Фоменка"],
    ["UA-21", "Закарпатська область", 69],
    ["UA-46", "Львівська область", 420],
    ["UA-61", "Тернопільська область", 180],
];

const options = {
    region: "UA",
    resolution: "provinces",
    colorAxis: { colors: ["black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#cccccc",
    defaultColor: "#f5f5f5",
};

const Graph = () => {
    return (
        <div>
            <h1>Graph</h1>
            <Chart
                chartEvents={[
                    {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected : " + region);
                        },
                    },
                ]}
                chartType="GeoChart"

                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default Graph;
