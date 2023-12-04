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

export const ChartContainer = styled.div`
  padding: 10% 15%;
`;

export const GraphBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  felx-direction: row;
  padding: 10%;
  gap: 5%;
`;

export const Left = styled.img`
  width: 2.5%;
`;
export const GraphContainer = styled.div`
  border: 1px solid #09ac5d;
  border-radius: 20px;
  padding: 5%;
`;
export const Right = styled.img`
  width: 2.5%;
`;
