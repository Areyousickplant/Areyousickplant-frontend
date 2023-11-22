import logo from "assets/logo.svg";
import * as S from "./style";

function Login() {
  return (
    <S.Container>
      <S.LoginContainer>
        <S.LeftContainer>
          <S.Logo src={logo} alt="로고" />
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Are you sick물?</S.Title>
          <S.Explain>회원 서비스 이용을 위해 로그인해주세요.</S.Explain>
          <S.LoginInput>
            <S.Login type="text" placeholder="이름" name="u_name" />
            <S.Login type="text" placeholder="아이디" name="u_id" />
            <S.Login type="password" placeholder="비밀번호" name="u_password" />
          </S.LoginInput>
          <S.BtnBox>
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.BtnBox>
        </S.RightContainer>
      </S.LoginContainer>
    </S.Container>
  );
}

export default Login;
