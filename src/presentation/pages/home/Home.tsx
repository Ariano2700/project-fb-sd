import { Link } from "react-router-dom";
import { LogOutBtn } from "../../components/buttons/logOutBtn/LogOutBtn";
import { TaskCard } from "../../components/taskCard/TaskCard";
import { useAuth } from "../../context/authContext";
import Loader from "../outside/loader/Loader";
import { NewTaskBtn } from "../../components/buttons/newTaskBtn/NewTaskBtn";

export const Home = () => {
  const { user, logOut, loading } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <Loader />;

  return (
    <main className="bg-black p-8 min-h-screen flex items-center justify-center">
      <div className=" bg-gray-800 rounded-lg shadow-lg overflow-hidden p-10 h-full w-full flex flex-col items-center ">
        <h1 className="p-2 font-bold mb-12 text-white bg-black rounded-3xl">
          BIENVENIDO ¡HOLA!
        </h1>
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Photo"
            className=" rounded-full w-24 h-24 animate-bounce"
          />
        ) : (
          <p>No hay foto de usuario disponible</p>
        )}
        <h1 className="uppercase text-white font-bold text-2xl">
          {user?.displayName || user?.email}
        </h1>
        <div className="flex flex-wrap justify-around gap-6">
          {/* <TaskCard key={1} content="Esta es una tarea" />
          <TaskCard key={2} content="Esta es una tarea" />
          <TaskCard key={3} content="Esta es una tarea" />
          <TaskCard key={4} content="Esta es una tarea" /> */}
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Link to={"/addTask"}>
            <NewTaskBtn />
          </Link>
          <LogOutBtn handleLogOut={handleLogOut} />
        </div>
      </div>
    </main>
  );
};
