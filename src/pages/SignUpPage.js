import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  return (
    <div>
      <h1>SignUpPage</h1>
      <AuthForm type="signup" />
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default SignUpPage;
