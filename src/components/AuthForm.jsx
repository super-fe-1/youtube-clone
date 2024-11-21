import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import FormInput from "./FormInput";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (type === "login") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { uid, email: userEmail } = userCredential.user;
        // todo: 로그인 성공 시 유저 정보 전역상태관리
        navigate("/");
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        alert("회원가입 성공!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      console.error("인증 오류: ", err);
      setError(`인증 실패: ${err.message}`);
    } finally {
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setError("");
  }, [type]);

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-end w-full gap-8"
    >
      <div className="w-full">
        <FormInput
          label="이메일"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="비밀번호"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-red-500">{error}</p>
        <button
          type="submit"
          className="w-24 px-4 py-2 text-sm font-semibold rounded-full btn-bg-primary"
        >
          {type === "login" ? "로그인" : "회원가입"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
