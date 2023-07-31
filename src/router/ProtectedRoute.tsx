import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { getUser } from "../app/utils/cookieHelper";
import { HamburgerProvider } from "../app/context/hamburger/Hamburger";
import { UserProvider } from "../app/context/user/UserContext";

interface ProtectedRouteProps {
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo }) => {
  const { token } = getUser();

  if (!token) return <Navigate to={redirectTo} replace />;

  return (
    <HamburgerProvider>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </HamburgerProvider>
  );
};

export default ProtectedRoute;
