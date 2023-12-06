import logo from "assets/logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "apis/allPosts";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id.length === 0 || password.length === 0) {
      return toast.error("아이디 또는 비밀번호를 입력해주세요");
    }
    try {
      const data = await login(id, password);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      return toast.success("로그인 성공");
    } catch {
      return toast.error("에러가 발생하였습니다");
    }
  };
  return (
    <S.Container>
      <S.LoginContainer>
        <S.LeftContainer>
          <S.Logo src={logo} alt="로고" />
        </S.LeftContainer>
        <S.RightContainer onSubmit={handleSubmit}>
          <S.TextBox>
            <S.Title>Are you sick물?</S.Title>
            <S.Explain>회원 서비스 이용을 위해 로그인해주세요.</S.Explain>
          </S.TextBox>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="아이디"
              name="u_id"
              onChange={(e) => setId(e.currentTarget.value)}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              name="u_password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </S.InputBox>
          <S.LoginBtnBox>
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.LoginBtnBox>
        </S.RightContainer>
      </S.LoginContainer>
    </S.Container>
  );
}

export default Login;
