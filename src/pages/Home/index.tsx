import mv from "assets/moveIcon.svg";
import hoverCheck from "assets/hoverCheckIcon.svg";
import check from "assets/checkIcon.svg";
import Calendar from "components/Calendar";
import Chart from "pages/Chart";
import Weather from "components/Weather";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
              onClick={() => toast.error("현재 식물을 등록할 수 없습니다!")}
            >
              <S.TextBox>
                <S.RegisterText isHovered={isHovered}>
                  내 식물 <S.Green isHovered={isHovered}>등록</S.Green>하기
                </S.RegisterText>
                <S.Explain isHovered={isHovered}>
                  내 식물의 종류, 키운 시기
                  <br /> 등을 등록해주세요!
                </S.Explain>
              </S.TextBox>
              <S.CheckBox>
                <S.Check src={isHovered ? hoverCheck : check} />
              </S.CheckBox>
            </S.Registertration>
            <Weather />
          </S.PlantLeft>
          <S.Growing>
            <S.GrowingText>
              식물
              <br />
              <S.Green>성장</S.Green>
              <br />
              일지
            </S.GrowingText>
            <Calendar />
          </S.Growing>
        </S.PlantBox>
        <Link to="/graph">
          <S.ChartBtn>
            내 식물 통계 보러가기
            <S.ChartMv src={mv} alt="moveIcon" />
          </S.ChartBtn>
        </Link>
        <Chart />
      </S.PlantContainer>
    </S.Container>
  );
}

export default Home;
