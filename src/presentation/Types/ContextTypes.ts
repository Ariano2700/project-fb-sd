import { ReactNode } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { Auth } from "./FormTypes";

export type LogOutFunction = () => void;

export type SingUpAndLoginFunction = {
  singUp: (auth: Auth) => void;
  login: (auth: Auth) => void;
  user: FirebaseUser | null;
  loading: boolean;
  logOut: LogOutFunction;
  loginWhitGoogle: () => void
  loginWhitFacebook: () => void
};

export type AuthProviderProps = {
  children: ReactNode;
};
export type UserFirebaseOrNull = FirebaseUser | null;