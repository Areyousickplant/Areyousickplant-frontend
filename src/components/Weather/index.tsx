import mark from "assets/mark.svg";
import moon from "assets/moon.svg";
import * as S from "./style";

function Weather() {
  const now = new Date();
  const date = [
    `오후 ${now.getHours()}시`,
    `오후 ${now.getHours() + 1}시`,
    `오후 ${now.getHours() + 2}시`,
  ];
  return (
    <S.Layout>
      <S.LeftBox>
        <S.PositionBox>
          <S.Position>강서구 봉림동</S.Position>
          <S.Mark src={mark} />
        </S.PositionBox>
        <S.NowWeatherBox>
          <S.NowWeather src={moon} />
          <S.NowTemperature>16º</S.NowTemperature>
        </S.NowWeatherBox>
      </S.LeftBox>
      <S.WeatherBox>
        {date.map((day) => (
          <S.NextWeatherBox>
            <S.NextText>{day}</S.NextText>
            <S.NextWeather src={moon} />
            <S.NextText>14º</S.NextText>
          </S.NextWeatherBox>
        ))}
      </S.WeatherBox>
    </S.Layout>
  );
}
export default Weather;
