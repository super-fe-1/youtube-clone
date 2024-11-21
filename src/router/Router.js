import { BrowserRouter, Routes, Route } from "react-router-dom";
// layout
import MainLayout from "../components/layout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout";
// pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id/detail" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
