import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
  const user = localStorage.getItem("username");
  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default ProtectedRoutes;