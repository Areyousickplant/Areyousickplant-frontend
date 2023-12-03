import styled from "styled-components";

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
`;

export const Line = styled.div`
  height: 100%;
  border-left: 4px solid ${(props) => props.color};
`;

export const ScoreText = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding-left: 50%;
  white-space: nowrap;
`;
