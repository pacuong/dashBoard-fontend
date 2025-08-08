import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuth = () => {
  const token = localStorage.getItem("access_token");
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default RedirectIfAuth;