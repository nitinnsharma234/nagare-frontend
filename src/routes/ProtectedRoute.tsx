import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let navigate = useNavigate();
  const { user } = useAuth();
  console.log(`User is ${user}`);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return children;
};
