import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { Doughnut } from "react-chartjs-2";
import * as S from "./style";

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
  cutout: "80%",
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

type ChartComponentProps = {
  data: {
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
    }>;
  };
};

export function ChartComponent({ data }: ChartComponentProps) {
  return (
    <div className="contentWrap">
      <div className="contentInner">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}

function Chart() {
  const percentage = 66;

  return (
    <S.ChartBoxs>
      <S.ChartBox color="#09AC5D">
        <S.ChartLeft>
          <S.ChartText>온도 그래프</S.ChartText>
          <S.Score>
            <S.Line color="#09AC5D" />
            <S.ScoreText>0점</S.ScoreText>
          </S.Score>
        </S.ChartLeft>
        <S.Temperature>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              root: {},
              path: {
                stroke: "#09AC5D",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#E6E6E6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#09AC5D",
                fontSize: "1rem",
                dominantBaseline: "middle",
                textAnchor: "middle",
              },
              background: {
                fill: "#09AC5D",
              },
            }}
          />
        </S.Temperature>
      </S.ChartBox>
      <S.ChartBox color="#37BCAC">
        <S.ChartLeft>
          <S.ChartText>조도 그래프</S.ChartText>
          <S.Score>
            <S.Line color="#37BCAC" />
            <S.ScoreText>0점</S.ScoreText>
          </S.Score>
        </S.ChartLeft>
        <S.Light>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              root: {},
              path: {
                stroke: "#37BCAC",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#E6E6E6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#37BCAC",
                fontSize: "1rem",
                dominantBaseline: "middle",
                textAnchor: "middle",
              },
              background: {
                fill: "#09AC5D",
              },
            }}
          />
        </S.Light>
      </S.ChartBox>
      <S.ChartBox color="#377CBC">
        <S.ChartLeft>
          <S.ChartText>습도 그래프</S.ChartText>
          <S.Score>
            <S.Line color="#377CBC" />
            <S.ScoreText>0점</S.ScoreText>
          </S.Score>
        </S.ChartLeft>
        <S.Humid>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              root: {},
              path: {
                stroke: "#377CBC",
                strokeLinecap: "round",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#E6E6E6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#377CBC",
                fontSize: "1rem",
                dominantBaseline: "middle",
                textAnchor: "middle",
              },
              background: {
                fill: "#09AC5D",
              },
            }}
          />
        </S.Humid>
      </S.ChartBox>
    </S.ChartBoxs>
  );
}

export default Chart;
