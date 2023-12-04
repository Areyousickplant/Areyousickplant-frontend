import mv from "assets/moveIcon.svg";
import hoverCheck from "assets/hoverCheckIcon.svg";
import check from "assets/checkIcon.svg";
import Calendar from "pages/Calendar";
import Chart from "pages/Chart";
import React, { useState } from "react";
import * as S from "./style";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Container>
      <S.MainContainer>
        <S.Title>Are you Sick물?</S.Title>
      </S.MainContainer>
      <S.PlantContainer>
        <S.PlantBtn>
          지금 내 식물 보러가기
          <S.PlantMv src={mv} alt="moveIcon" />
        </S.PlantBtn>
        <S.PlantBox>
          <S.PlantLeft>
            <S.Registertration
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <S.TextBox>
                <S.RegisterText
                  style={{ color: isHovered ? "white" : "black" }}
                >
                  내 식물{" "}
                  <S.Green1 style={{ color: isHovered ? "white" : "#09ac5d" }}>
                    등록
                  </S.Green1>
                  하기
                </S.RegisterText>
                <S.Explain style={{ color: isHovered ? "white" : "#72837B" }}>
                  내 식물의 종류, 키운 시기,
                  <br /> 등을 등록해주세요!
                </S.Explain>
              </S.TextBox>
              <S.Check src={isHovered ? hoverCheck : check} alt="checkIcon" />
            </S.Registertration>
            <S.Weather />
          </S.PlantLeft>
          <S.Growing>
            <S.GrowingText>
              식물<S.Green2>성장</S.Green2>일지
            </S.GrowingText>
            <S.CalendarBox>
              <Calendar />
            </S.CalendarBox>
          </S.Growing>
        </S.PlantBox>
      </S.PlantContainer>
      <S.ChartContainer>
        <S.ChartBtn>
          내 식물 통계 보러가기
          <S.ChartMv src={mv} alt="moveIcon" />
        </S.ChartBtn>
        <Chart />
      </S.ChartContainer>
    </S.Container>
  );
}

export default Home;
