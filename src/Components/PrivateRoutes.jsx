import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { loginInfo } = useContext(AuthContext);
  const user = loginInfo;
  if (user === undefined || user === null) {      
      return false;
  } 
  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default ProtectedRoutes;