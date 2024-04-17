import { createContext, useContext, useEffect, useState } from "react";
import {
  AuthProviderProps,
  LogOutFunction,
  SingUpAndLoginFunction,
} from "../Types/ContextTypes";
// import { Auth as AuthType } from "../Types/FormTypes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth as authFirebase } from "../../firebase/auth";

export const authContext = createContext<SingUpAndLoginFunction | undefined>(
  undefined
);
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] =
    useState<SingUpAndLoginFunction["loading"]>(true);
  const singUp: SingUpAndLoginFunction["singUp"] = async (auth) => {
    const { email, password } = auth;
    try {
      await createUserWithEmailAndPassword(authFirebase, email, password);
    } catch (error: any) {
      throw new Error(error.message || "Error desconocido");
    }
  };
  const login: SingUpAndLoginFunction["login"] = async (auth) => {
    const { email, password } = auth;
    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
    } catch (error: any) {
      throw new Error(error.message || "Error desconocido");
    }
  };
  const loginWhitGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(authFirebase, googleProvider);
  };
  const logOut: LogOutFunction = () => {
    signOut(authFirebase);
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(authFirebase, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });
    return unsuscribe;
  }, []);
  return (
    <authContext.Provider
      value={{ singUp, login, user, logOut, loading, loginWhitGoogle }}
    >
      {children}
    </authContext.Provider>
  );
};
