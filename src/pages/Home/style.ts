import styled from "styled-components";
import bg from "assets/mainBackground.svg";

export const Container = styled.div``;

export const MainContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  height: 60vh;
  padding-left: 15%;
  padding-bottom: 5%;
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 600;
`;

export const PlantContainer = styled.div`
  padding: 5% 15%;
`;

export const PlantBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #09ac5d;
  padding: 0.9% 1.4%;
  gap: 15px;
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 18px;

  &:hover {
    background: #099f57;
  }
`;

export const PlantMv = styled.img`
  width: 11%;
`;

export const PlantBox = styled.div`
  display: flex;
  margin-top: 2%;
  gap: 1%;
`;

export const PlantLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const Registertration = styled.button`
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px #09ac5d solid;
  padding: 7%;
  align-items: center;
  gap: 8%;

  &:hover {
    color: white;
    background-color: #09ac5d;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Check = styled.img`
  height: 50%;
`;

export const RegisterText = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;

export const Green1 = styled.span`
  color: #09ac5d;
`;

export const Explain = styled.div`
  color: #72837b;
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
`;

export const Weather = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px #09ac5d solid;
  padding: 5%;
  align-items: center;
  gap: 6%;
`;

export const Growing = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: 1px #09ac5d solid;
  padding: 5%;
  gap: 5%;
`;

export const GrowingText = styled.div`
  font-weight: 600;
  font-size: 1.7rem;
  white-space: nowrap;
`;

export const Green2 = styled.div`
  color: #09ac5d;
`;

export const CalendarBox = styled.div``;

export const ChartContainer = styled.div`
  padding: 5% 15%;
`;

export const ChartBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #09ac5d;
  padding: 0.9% 1.4%;
  gap: 15px;
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 18px;

  &:hover {
    background: #099f57;
  }
`;
export const ChartMv = styled.img`
  width: 11%;
`;

export const ChartBoxs = styled.div`
  display: flex;
  margin-top: 2%;
  gap: 1%;
  flex-direction: row;
`;
export const ChartBox = styled.div`
  display: flex;
  width: 30%;
  padding: 4%;
  border: 1px ${(props) => props.color} solid;
  border-radius: 20px;
  gap: 20%;
`;

export const ChartLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartRight = styled.div`
  display: flex;
`;

export const Temperature = styled.div`
  width: 50%;
`;

export const Light = styled.div`
  width: 50%;
`;

export const Humid = styled.div`
  width: 50%;
`;

export const ChartText = styled.div`
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const Line = styled.div`
  height: 50%;
  border-left: 4px solid ${(props) => props.color};
  margin-top: 30%;
`;
