import { QueryObserverResult } from "@tanstack/react-query";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useGetUserById } from "../api/use-user.api";
import { UserModel } from "../models/user.model";

type AuthContextProps = {
  isAuthenticated: boolean;
  user: UserModel;
  isLoadingUserData: boolean;
  refetchUser: () => Promise<QueryObserverResult<void>>;
  handleLogin: (user: UserModel | undefined) => Promise<void>;
  handleLogout: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>(localStorage.getItem("userId") as string);
  const { data: user, isLoading: isLoadingUserData, isError, refetch: refetchUser } = useGetUserById(userId);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else if (isError) {
      handleLogout();
    }
  }, [user, isError]);

  const handleLogin = async (data: UserModel | undefined) => {
    if (data) {
      window.localStorage.setItem("userId", data.id);
      setUserId(data.id);
      setIsAuthenticated(true);
    }
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setUserId("");
    window.localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoadingUserData,
        refetchUser,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
