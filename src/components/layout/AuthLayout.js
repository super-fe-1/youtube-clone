import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AuthLayout;
