import { SolarLogout2Linear } from "../../../assets/icons/solar/SolarLogout2Linear";
import { useAuth } from "../../context/authContext";
import Loader from "../outside/loader/Loader";

export const Home = () => {
  const { user, logOut, loading } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  if (loading) return <Loader />;

  return (
    <>
      <h1>Hola chekes</h1>
      <h1>{user?.displayName || user?.email}</h1>
      <button
        className="text-white px-4 py-2 bg-red-500 mt-4 rounded-md hover:bg-red-800 transition-all duration-300 flex justify-center items-center gap-3"
        onClick={handleLogOut}
      >
        <span>
          <SolarLogout2Linear />
        </span>
        <span>Cerrar sesión</span>
      </button>
    </>
  );
};
