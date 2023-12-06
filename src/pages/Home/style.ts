import styled from "styled-components";
import bg from "assets/mainBackground.svg";
import { Link } from "react-router-dom";

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
  padding: 5% 20%;
`;

export const PlantBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #09ac5d;
  padding: 1% 1.5%;
  gap: 15px;
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background: #099f57;
  }
`;

export const PlantMv = styled.img`
  width: 11%;
`;

export const PlantBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2%;
  gap: 1%;
`;

export const PlantLeft = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 20px;
`;

export const Registertration = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1.5px #09ac5d solid;
  padding: 12.5% 7.5%;
  align-items: center;
  gap: 8%;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #09ac5d;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  font-size: 1.25rem;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Check = styled.img`
  width: 75%;
`;

export const RegisterText = styled.div<{ isHovered: boolean }>`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  color: black;
  ${(props) => props.isHovered && `color: white`}
`;

export const Green = styled.span<{ isHovered?: boolean }>`
  color: #09ac5d;
  ${(props) => props.isHovered && `color: white`}
`;

export const Explain = styled.div<{ isHovered: boolean }>`
  color: #72837b;
  font-weight: 300;
  white-space: nowrap;
  ${(props) => props.isHovered && `color: white`}
`;

export const Weather = styled.div`
  display: flex;
  width: 100%;
  height: 41.5%;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1.5px #09ac5d solid;
  padding: 5%;
  align-items: center;
  gap: 6%;
`;

export const Growing = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  flex-direction: row;
  border-radius: 30px;
  border: 1.5px #09ac5d solid;
  padding: 5%;
  gap: 5%;
`;

export const GrowingText = styled.div`
  font-weight: 600;
  font-size: 2.25rem;
  letter-spacing: 1px;
`;

export const ChartContainer = styled.div`
  padding: 5% 15%;
`;

export const ChartBtn = styled.button`
  margin-top: 10%;
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
  cursor: pointer;
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
  padding: 2%;
  border: 1px ${(props) => props.color} solid;
  border-radius: 20px;
  gap: 39%;
`;

export const ChartLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20%;
`;

export const ChartRight = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Temperature = styled.div`
  width: 40%;
`;

export const Light = styled.div`
  width: 40%;
`;

export const Humid = styled.div`
  width: 40%;
`;

export const ChartText = styled.div`
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

export const Line = styled.div`
  height: 40%;
  border-left: 4px solid ${(props) => props.color};
`;

export const ScoreText = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding-left: 50%;
  white-space: nowrap;
`;
