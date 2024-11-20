import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
        const { uid, email } = userCredential.user;
        // todo: 로그인 성공 시 유저 정보 전역상태관리
        console.log(uid, email);
      } else {
        const now = new Date();
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: now,
          updatedAt: now,
          deletedAt: null,
        });
        alert("회원가입 성공!");
      }
    } catch (err) {
      console.error("인증 오류: ", err);
      setError("인증 실패. 이메일과 비밀번호를 확인하세요.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        required
      />
      <button type="submit">{type === "login" ? "로그인" : "회원가입"}</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AuthForm;
