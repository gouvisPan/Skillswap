import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import User from "../../model/User";

const RequireAuth = () => {
  let user: User | null = useAppSelector((state) => state.user.data);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
