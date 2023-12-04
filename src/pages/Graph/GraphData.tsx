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

const labels = ["5일", "10일", "15일", "20일", "25일", "30일"];

const illuminance = {
  labels,
  datasets: [
    {
      label: "이상적인 조도",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "#09AC5D",
      backgroundColor: "#09AC5D",
    },
    {
      label: "사용자의 조도",
      data: [2, 3, 4, 5, 4, 7, 8],
      borderColor: "#E73F76",
      backgroundColor: "#E73F76",
    },
  ],
};

const humidity = {
  labels,
  datasets: [
    {
      label: "이상적인 습도",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "#09AC5D",
      backgroundColor: "#09AC5D",
    },
    {
      label: "사용자의 습도",
      data: [2, 3, 4, 5, 4, 7, 8],
      borderColor: "#E73F76",
      backgroundColor: "#E73F76",
    },
  ],
};

const temperature = {
  labels,
  datasets: [
    {
      label: "이상적인 온도",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "#09AC5D",
      backgroundColor: "#09AC5D",
    },
    {
      label: "사용자의 온온도",
      data: [2, 3, 4, 5, 4, 7, 8],
      borderColor: "#E73F76",
      backgroundColor: "#E73F76",
    },
  ],
};

export default function GraphData({ page }: { page: number }) {
  return (
    <>
      {page === 0 && (
        <Line
          options={options}
          data={illuminance}
          width="800px"
          height="400px"
        />
      )}
      {page === 1 && (
        <Line options={options} data={humidity} width="800px" height="400px" />
      )}
      {page === 2 && (
        <Line
          options={options}
          data={temperature}
          width="800px"
          height="400px"
        />
      )}
    </>
  );
}
