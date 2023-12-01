import { Navigate, Outlet } from "react-router-dom";
const IsAuth = () => {
  const authLogin = localStorage.getItem("Authorization");

  return authLogin ? <Navigate to="/" replace /> : <Outlet />;
};

export default IsAuth;
