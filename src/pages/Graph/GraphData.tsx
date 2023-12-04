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

// 기본 Line 차트
// https://react-chartjs-2.js.org/examples/line-chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["5일", "10일", "15일", "20일", "25일", "30일"];

export const data = {
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

export default function GraphData() {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
