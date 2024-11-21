import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <AuthForm type="login" />
      <Link to="/signup">회원가입</Link>
    </div>
  );
};

export default LoginPage;
