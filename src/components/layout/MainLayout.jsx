import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1 className="sr-only">유튜브 클론코딩</h1>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
