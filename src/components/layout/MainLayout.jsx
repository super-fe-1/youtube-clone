import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "../NavigationBar";

const MainLayout = () => {
  return (
    <div className="ml-20">
      <h1 className="sr-only">유튜브 클론코딩</h1>
      <header>
        <NavigationBar />
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
