import { ReactNode } from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import Loader from "../pages/outside/loader/Loader";
import { Login } from "../pages/forms/Login";
import { Register } from "../pages/forms/Register";
type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  if (!user) return <Navigate to={"/"} />;
  return <>{children}</>;
};

export function RedirectIfAuthenticated() {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (user) return <Navigate to="/home" />;
  return <Login />;
}
export function RedirectIfAuthenticatedRegister() {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (user) return <Navigate to="/home" />;
  return <Register />;
}

