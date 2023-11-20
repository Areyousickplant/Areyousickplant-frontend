import styled from "styled-components";
import bg from "assets/Background.svg";

export const Container = styled.div`
  background-image: url(${bg});
  display: flex;
  align-items: center;
  height: 92.5vh;
`;

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09ac5d;
  width: 33vw;
  height: 70vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Logo = styled.img`
  width: 50%;
  height: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 33vw;
  height: 70vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  padding-top: 2em;
  padding-left: 2em;
`;

export const Explain = styled.div`
  color: #a4a1a1;
  padding-left: 4.2em;
  padding-top: 0.5em;
  font-size: 1.2em;
`;

export const SignupInput = styled.div`
  padding-left: 4.2em;
  margin-top: 2.2em;
`;

export const Signup = styled.input`
  padding-left: 0.5em;
  border: 1px solid #09ac5d;
  width: 22.5vw;
  height: 5.5vh;
  border-radius: 6px;
  margin: 0.7em;
  &:placeholder {
    color: #9fa2a0;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  height: 15.5vh;
  justify-content: center;
  align-items: center;
`;
export const SignupBtn = styled.button`
  background-color: #09ac5d;
  color: white;
  width: 9vw;
  height: 5.7vh;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    background-color: #0d8a4e;
  }
`;
