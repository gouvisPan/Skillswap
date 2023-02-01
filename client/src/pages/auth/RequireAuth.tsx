import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import User from "../../model/User";
import Header from "../../components/Header/Header";
import { BarLoader } from "react-spinners";

const RequireAuth = () => {
  const isUserLoading = useAppSelector((state) => state.user.isLoading);
  const isSkillLoading = useAppSelector((state) => state.skill.isLoading);

  let user: User | null = useAppSelector((state) => state.user.data);
  const location = useLocation();

  return user ? (
    <div>
      <Header />
      {(isUserLoading || isSkillLoading) && (
        <BarLoader
          color="#36d7b7"
          className="spinner"
          speedMultiplier={1}
          width={3000}
        />
      )}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
