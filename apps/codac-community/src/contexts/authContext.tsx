import { COOKIES_TOKEN_NAME } from "#/constants";
import {
  useGetMeQuery,
  type UsersPermissionsLoginPayload,
  type UsersPermissionsMe,
} from "codac-graphql-types";
import { destroyCookie, setCookie } from "nookies";
import { createContext, type ReactNode, useState, useEffect } from "react";

type User = UsersPermissionsMe | null;

export interface AuthContextValue {
  user: User;
  onLoginSuccess: (login: UsersPermissionsLoginPayload) => void;
  logout: () => void;
  authLoading: boolean;
}

const initialAuth: AuthContextValue = {
  user: null,
  authLoading: false,
  onLoginSuccess: () => {
    throw new Error("onLoginSucces not implemented.");
  },
  logout: () => {
    throw new Error("logout not implemented.");
  },
};

export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const { data, error, loading: authLoading, refetch: getMe } = useGetMeQuery();

  console.log("user", user);
  useEffect(() => {
    if (data?.me && !error) {
      const user = data.me as UsersPermissionsMe;
      setUser(user);
    }
  }, [data]);

  const onLoginSuccess = (userPayload: UsersPermissionsLoginPayload) => {
    const { jwt, user } = userPayload;

    jwt &&
      setCookie(null, COOKIES_TOKEN_NAME, jwt, {
        // maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    getMe();
  };

  const logout = () => {
    setUser(null);
    destroyCookie(null, COOKIES_TOKEN_NAME, {
      path: "/",
    });
  };
  return (
    <AuthContext.Provider value={{ user, authLoading, logout, onLoginSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};