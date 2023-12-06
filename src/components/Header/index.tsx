import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { userInfo } from "apis/allGets";
import Logo from "assets/logo.svg";
import { toast } from "react-toastify";
import * as S from "./style";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useLayoutEffect(() => {
    if (location.pathname === "/login") {
      toast.info("메인 페이지를 보시려면 아래 정보로 로그인해주세요!", {
        autoClose: 10000,
      });
      toast.info("아이디: jyh071116, 비밀번호: qwer1234", { autoClose: 10000 });
    }
    const fetchUser = async () => {
      try {
        const data = await userInfo();
        if (data.res === "fail") throw new Error("사용자 정보 없음");
        setUser(data.data);
      } catch {
        if (location.pathname === "/") toast.error("로그인 후 이용해주세요");
        if (location.pathname !== "/login") navigate("/login");
      }
    };
    fetchUser();
  }, [location]);

  return (
    <S.Layout>
      <Link to="/">
        <S.Logo src={Logo} alt="로고" />
      </Link>
      <S.EmptyBox />
      {user ? <div>{user} 님</div> : <Link to="/login">로그인</Link>}
      {user ? (
        <div
          onClick={() => {
            setUser("");
            localStorage.removeItem("accessToken");
            navigate(location.pathname);
            return toast.success("로그아웃 성공");
          }}
        >
          로그아웃
        </div>
      ) : (
        <Link to="/signup">회원가입</Link>
      )}
    </S.Layout>
  );
}

export default Header;
