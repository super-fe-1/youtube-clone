import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
