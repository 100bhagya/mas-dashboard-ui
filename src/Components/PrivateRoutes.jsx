import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("username");
  console.log(user);
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