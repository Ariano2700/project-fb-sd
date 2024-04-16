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
    <main className="bg-black p-8 min-h-screen flex items-center justify-center">
      <div className=" bg-gray-800 rounded-lg shadow-lg overflow-hidden p-10 h-96 w-96 flex flex-col items-center ">
        <h1 className="p-2 font-bold mb-12 text-white bg-black rounded-3xl">Hola chekes :V </h1>
        {user?.photoURL ? (
          <img src={user.photoURL} alt="User Photo" className=" rounded-full w-24 h-24 animate-bounce" />
        ) : (
          <p>No hay foto de usuario disponible</p>
        )}
        <h1 className="uppercase text-white font-bold text-2xl">{user?.displayName || user?.email}</h1>
        <button
          className="text-white p-4 bg-red-500 mt-4 rounded-md hover:bg-red-800 transition-all duration-300 flex justify-center items-center gap-3"
          onClick={handleLogOut}
        >
          <span>
            <SolarLogout2Linear />
          </span>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </main>
  );
};