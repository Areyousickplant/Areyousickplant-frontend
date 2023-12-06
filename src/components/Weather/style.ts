import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 41.5%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1.5px #09ac5d solid;
  padding: 5% 5% 5% 7.5%;
`;

export const LeftBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;

export const PositionBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const Position = styled.div`
  color: #72837b;
  font-size: 0.75rem;
`;

export const Mark = styled.img`
  width: 0.75rem;
`;

export const NowWeatherBox = styled.div`
  display: flex;
`;

export const WeatherBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NowWeather = styled.img`
  width: 4.5rem;
`;

export const NowTemperature = styled.div`
  font-size: 3.5rem;
  margin-left: 0.5rem;
  font-weight: 600;
`;

export const NextWeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const NextWeather = styled.img`
  width: 1.5rem;
`;

export const NextText = styled.div`
  font-size: 0.75rem;
  color: #72837b;
`;
