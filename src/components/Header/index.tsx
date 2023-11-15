import { Link } from "react-router-dom";
import Logo from "assets/logo.svg";
import * as S from "./style";

function Header() {
  return (
    <S.Layout>
      <Link to="/">
        <S.Logo src={Logo} alt="로고" />
      </Link>
      <S.EmptyBox />
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </S.Layout>
  );
}

export default Header;
