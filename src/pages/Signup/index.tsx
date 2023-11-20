import logo from "assets/logo.svg";
import * as S from "./style";

function Signup() {
  return (
    <S.Container>
      <S.SignupContainer>
        <S.LeftContainer>
          <S.Logo src={logo} alt="로고" />
        </S.LeftContainer>
        <S.RightContainer>
          <S.Title>Are you sick물?</S.Title>
          <S.Explain>간편하게 내 식물의 건강 상태를 확인해 보세요.</S.Explain>
          <S.SignupInput>
            <S.Signup type="text" placeholder="이름" name="u_name" />
            <S.Signup type="text" placeholder="아이디" name="u_id" />
            <S.Signup
              type="password"
              placeholder="비밀번호"
              name="u_password"
            />
          </S.SignupInput>
          <S.BtnBox>
            <S.SignupBtn>회원가입</S.SignupBtn>
          </S.BtnBox>
        </S.RightContainer>
      </S.SignupContainer>
    </S.Container>
  );
}

export default Signup;
