import { useState } from "react";
import logo from "assets/logo.svg";
import { toast } from "react-toastify";
import { signup } from "apis/allPosts";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id.length === 0 || name.length === 0 || password.length === 0) {
      return toast.error("아이디, 이름, 비밀번호를 입력해주세요");
    }
    try {
      await signup(id, name, password);
      navigate("/login");
      return toast.success("회원가입 성공");
    } catch (err) {
      return toast.error("에러가 발생하였습니다");
    }
  };

  return (
    <S.Container>
      <S.SignupContainer>
        <S.LeftContainer>
          <S.Logo src={logo} alt="로고" />
        </S.LeftContainer>
        <S.RightContainer onSubmit={handleSubmit}>
          <S.TextBox>
            <S.Title>Are you sick물?</S.Title>
            <S.Explain>간편하게 내 식물의 건강 상태를 확인해 보세요.</S.Explain>
          </S.TextBox>
          <S.InputBox>
            <S.Input
              type="text"
              placeholder="아이디"
              name="u_id"
              onChange={(e) => setId(e.currentTarget.value)}
            />
            <S.Input
              type="text"
              placeholder="이름"
              name="u_name"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              name="u_password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </S.InputBox>
          <S.SignupBtnBox>
            <S.SignupBtn type="submit">회원가입</S.SignupBtn>
          </S.SignupBtnBox>
        </S.RightContainer>
      </S.SignupContainer>
    </S.Container>
  );
}

export default Signup;
