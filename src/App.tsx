import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ResgisterPage from "./pages/RegisterPage";
import Dashboard1 from "./pages/dashboard1";
import RequireAuth from "./routers/RequireAuth";
import RedirectIfAuth from "./routers/RedirectIfAuth";
import ExcelPage from "./pages/ExcelPage";

const AppLayout = () => {
  return (
    <Routes>
      {/* ✅ Các route cần đăng nhập */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/excel" element={<ExcelPage />} />
      </Route>

      {/* ✅ Các route công khai – nếu đã đăng nhập thì redirect */}
      <Route element={<RedirectIfAuth />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ResgisterPage />} />
      </Route>
    </Routes>
  );
};

export default AppLayout;
