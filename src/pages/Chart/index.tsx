import React, { useLayoutEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { userPlantScore } from "apis/allGets";
import * as S from "./style";

interface IPercentage {
  temperature: number;
  humidity: number;
  illuminance: number;
}

interface IType {
  name: string;
  color: string;
  property: keyof IPercentage;
}

function Chart() {
  const [percentage, setPercentage] = useState<IPercentage>();

  const types: IType[] = [
    { name: "온도", color: "#09AC5D", property: "temperature" },
    { name: "조도", color: "#37BCAC", property: "illuminance" },
    { name: "습도", color: "#377CBC", property: "humidity" },
  ];

  useLayoutEffect(() => {
    const getScore = async () => {
      try {
        const data = await userPlantScore();
        setPercentage(data);
      } catch {
        console.log("점수받기실패");
      }
    };
    getScore();
  }, []);

  return (
    <S.ChartBoxs>
      {percentage &&
        types.map((type: IType) => (
          <S.ChartBox color={type.color}>
            <S.ChartLeft>
              <S.ChartText>{type.name} 점수</S.ChartText>
              <S.Score>
                <S.Line color={type.color} />
                <S.ScoreText>{percentage[type.property]}점</S.ScoreText>
              </S.Score>
            </S.ChartLeft>
            <S.CircleBox>
              <CircularProgressbar
                value={percentage[type.property]}
                text={`${percentage[type.property]}점`}
                styles={{
                  root: {},
                  path: {
                    stroke: type.color,
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
                    fill: type.color,
                    fontSize: "1.25rem",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                  },
                  background: {
                    fill: type.color,
                  },
                }}
              />
            </S.CircleBox>
          </S.ChartBox>
        ))}
    </S.ChartBoxs>
  );
}

export default Chart;
