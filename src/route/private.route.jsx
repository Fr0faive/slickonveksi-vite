import { Navigate, Outlet, useLocation } from "react-router-dom";
import authService from "../services/auth.service";
import { useEffect, useState } from "react"; // Import useState for handling state

const PrivateRoutes = () => {
  const location = useLocation();
  const authLogin = localStorage.getItem("Authorization");
  const authRoles = localStorage.getItem("Roles");
  const [isAdmin, setIsAdmin] = useState(null); // Use state to handle asynchronous isAdmin function

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const user = await authService.getUserData();
        // Update state based on the condition
        if (user.data.roles === authRoles) {
          if (user.data.roles === "admin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error(error);
        setIsAdmin(false); // Set isAdmin to false in case of an error
      }
    };

    if (authLogin) {
      checkAdminStatus(); // Call the function only if the user is logged in
    } else {
      setIsAdmin(false); // Set isAdmin to false if the user is not logged in
    }
  }, [authLogin, authRoles]); // Include authLogin and authRoles in the dependency array

  if (authLogin === undefined || isAdmin === null) {
    return null; // or loading indicator/spinner/etc
  }

  return authLogin ? (
    isAdmin ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace state={{ from: location }} />
    )
  ) : (
    <Navigate to="/auth/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
