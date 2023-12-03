import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// 기본 Doughnut 차트
// https://react-chartjs-2.js.org/components/Doughnut

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

export const data1 = {
  datasets: [
    {
      data: [12, 88],
      backgroundColor: ["#09AC5D", "#E6E6E6"],
    },
  ],
};

export const data2 = {
  datasets: [
    {
      data: [15, 85],
      backgroundColor: ["#37BCAC", "#E6E6E6"],
    },
  ],
};

export const data3 = {
  datasets: [
    {
      data: [15, 85],
      backgroundColor: ["#377CBC", "#E6E6E6"],
    },
  ],
};

export function Chart1() {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Doughnut options={options} data={data1} />
      </div>
    </div>
  );
}

export function Chart2() {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Doughnut options={options} data={data2} />
      </div>
    </div>
  );
}
export function Chart3() {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Doughnut options={options} data={data3} />
      </div>
    </div>
  );
}
