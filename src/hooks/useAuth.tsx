import React from "react";
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

type AuthContextType = {
  user: string;
  login: (accessToken: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useLocalStorage('user', null);

  // call this function when you want to authenticate the user
  const login = async (accessToken: string) => {
    setUser(accessToken);
    //   navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    //   navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: true,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
