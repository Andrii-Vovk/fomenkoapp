import { Chart } from "react-google-charts";

import logo from './logo.svg';
import './App.css';

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
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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

export default App;
