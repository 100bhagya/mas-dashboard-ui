
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.user);

  if (!user.isAuthenticated) {
    return false;
  }
  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Signin" />;
};

export default ProtectedRoutes;
