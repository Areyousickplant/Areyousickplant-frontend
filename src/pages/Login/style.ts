import styled from "styled-components";
import bg from "assets/Background.svg";

export const Container = styled.div`
  background-image: url(${bg});
  display: flex;
  align-items: center;
  height: 94vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 30px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09ac5d;
  width: 40%;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  aspect-ratio: 1;
  padding: 5.5%;
  width: 40%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12.5%;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
`;

export const Explain = styled.div`
  color: #a4a1a1;
  font-size: 1.4rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 45%;
  margin-bottom: 10%;
`;

export const Input = styled.input`
  border: 1px solid #09ac5d;
  width: 100%;
  padding: 3.5% 5%;
  border-radius: 10px;
  font-size: 1.25rem;
`;

export const LoginBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginBtn = styled.button`
  background-color: #09ac5d;
  color: white;
  padding: 3.5% 5%;
  width: 30%;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.2rem;
`;
