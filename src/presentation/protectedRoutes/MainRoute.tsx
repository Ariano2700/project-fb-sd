import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Loader from "../pages/outside/loader/Loader";

export const MainRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (user) return <Navigate to="/home" />;
  return <Navigate to="/login" />;
};
