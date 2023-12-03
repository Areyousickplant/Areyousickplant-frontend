import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
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

function Chart() {
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
          <Chart1 />
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
          <Chart2 />
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
          <Chart3 />
        </S.Humid>
      </S.ChartBox>
    </S.ChartBoxs>
  );
}

export default Chart;
