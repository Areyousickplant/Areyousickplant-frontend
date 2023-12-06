import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IData, IIdealData } from "interfaces/IData";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

interface IGraphData {
  page: number;
  data: IData[];
  idealData: IIdealData | undefined;
}

export default function GraphData({ page, data, idealData }: IGraphData) {
  const illuminanceGraph = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "이상적인 조도",
        data: data.map(() => idealData?.illuminance),
        borderColor: "#09AC5D",
        backgroundColor: "#09AC5D",
      },
      {
        label: "사용자의 조도",
        data: data.map((item) => item.illuminance),
        borderColor: "#E73F76",
        backgroundColor: "#E73F76",
      },
    ],
  };

  const humidityGraph = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "이상적인 습도",
        data: data.map(() => idealData?.humidity),
        borderColor: "#09AC5D",
        backgroundColor: "#09AC5D",
      },
      {
        label: "사용자의 습도",
        data: data.map((item) => item.humidity),
        borderColor: "#E73F76",
        backgroundColor: "#E73F76",
      },
    ],
  };

  const temperatureGraph = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: "이상적인 온도",
        data: data.map(() => idealData?.temperature),
        borderColor: "#09AC5D",
        backgroundColor: "#09AC5D",
      },
      {
        label: "사용자의 온도",
        data: data.map((item) => item.temperature),
        borderColor: "#E73F76",
        backgroundColor: "#E73F76",
      },
    ],
  };

  return (
    <>
      {page === 0 && (
        <Line
          options={options}
          data={illuminanceGraph}
          width="700px"
          height="350px"
        />
      )}
      {page === 1 && (
        <Line
          options={options}
          data={humidityGraph}
          width="700px"
          height="350px"
        />
      )}
      {page === 2 && (
        <Line
          options={options}
          data={temperatureGraph}
          width="700px"
          height="350px"
        />
      )}
    </>
  );
}
