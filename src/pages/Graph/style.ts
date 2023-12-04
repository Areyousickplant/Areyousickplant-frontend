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

export const GraphContainer = styled.div`
  width: 50%;
`;
