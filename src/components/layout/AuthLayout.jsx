import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen auth-bg">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
