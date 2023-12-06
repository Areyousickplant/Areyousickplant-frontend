import styled from "styled-components";
import bg from "assets/mainBackground.svg";
import { number } from "prop-types";

export const Container = styled.div``;

export const MainContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  height: 60vh;
  padding-left: 15%;
  padding-bottom: 5%;
  display: flex;
`;

export const ChartContainer = styled.div`
  padding: 7.5% 20%;
`;

export const GraphBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5%;
`;

export const Left = styled.img<{ page: number }>`
  width: 2.5%;
  ${(props) => props.page < 1 && `visibility: hidden`}
`;
export const GraphContainer = styled.div`
  border: 1px solid #09ac5d;
  border-radius: 20px;
  padding: 5%;
`;
export const Right = styled.img<{ page: number }>`
  width: 2.5%;
  ${(props) => props.page > 1 && `visibility: hidden`}
`;

export const Text = styled.div`
  margin-top: 20%;
  margin-bottom: 5%;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const Green = styled.span`
  color: #09ac5d;
`;
