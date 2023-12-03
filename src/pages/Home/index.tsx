import mv from "assets/moveIcon.svg";
import hoverCheck from "assets/hoverCheckIcon.svg";
import check from "assets/checkIcon.svg";
import Calendar from "pages/Calendar";
import Chart from "pages/Chart";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import React, { useState } from "react";
import * as S from "./style";

function Home() {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "0b870d39a4f7cddba2054d16181b7aac",
    lat: "55.7522",
    lon: "37.6156",
    lang: "en",
    exclude: "current,minutely,hourly", // 현재, 분별 예보, 시간별 예보를 제외하고 예보 정보만 받습니다.
    units: "metric",
  });
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
            <S.Weather>
              {formattedDate}{" "}
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Munich"
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
              />
            </S.Weather>
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
