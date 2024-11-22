import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const MainLayout = () => {
  return (
    <div>
      <h1 className="sr-only">유튜브 클론코딩</h1>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
