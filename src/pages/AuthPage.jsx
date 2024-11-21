import { Link, useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import logo from "../assets/images/logo.png";

const AuthPage = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  const linkProps =
    pathname === "login"
      ? { to: "/signup", text: "회원가입하기" }
      : { to: "/login", text: "로그인화면으로 이동" };

  return (
    <div className="flex flex-col items-center w-2/3 max-w-2xl gap-4 p-12 bg-white rounded-3xl">
      <div className="flex items-start justify-between w-full gap-20">
        <div className="flex flex-col items-start gap-2">
          <img src={logo} alt="logo" className="object-contain w-16 h-auto" />
          <span className="text-2xl font-bold">본인 인증</span>
        </div>
        <div className="flex-1">
          <AuthForm type={pathname} />
        </div>
      </div>
      <Link
        to={linkProps.to}
        className="text-sm text-right underline text-secondary"
      >
        {linkProps.text}
      </Link>
    </div>
  );
};

export default AuthPage;
