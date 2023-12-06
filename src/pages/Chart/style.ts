import styled from "styled-components";

export const ChartBoxs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;
export const ChartBox = styled.div`
  display: flex;
  width: 32%;
  height: 20%;
  padding: 2.5% 3%;
  border: 1.5px ${(props) => props.color} solid;
  border-radius: 30px;
`;

export const ChartLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  gap: 20%;
`;

export const CircleBox = styled.div`
  width: 40%;
`;

export const ChartText = styled.div`
  white-space: nowrap;
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
  font-size: 1.5rem;
  white-space: nowrap;
  margin-left: 10%;
`;
