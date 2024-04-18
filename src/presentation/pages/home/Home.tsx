import { Link, useNavigate } from "react-router-dom";
import { LogOutBtn } from "../../components/buttons/logOutBtn/LogOutBtn";
import { TaskCard } from "../../components/taskCard/TaskCard";
import { useAuth } from "../../context/authContext";
import Loader from "../outside/loader/Loader";
import { NewTaskBtn } from "../../components/buttons/newTaskBtn/NewTaskBtn";
import { useEffect, useState } from "react";
import { getTask } from "../../../hooks/getTask";
import { Task } from "../../Types/TaskType";
import { useDeleteTask } from "../../../hooks/useDeleteTask";
import { ConfirmAlert } from "../../components/alerts/ConfirmAlert";
import Swal from "sweetalert2";
import DefaultImage from "../../components/DefaultImage";

export const Home = () => {
  const navigate = useNavigate();
  const { user, logOut, loading } = useAuth();
  const { deleteTask } = useDeleteTask({ uid: user?.uid || "" });
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchData = async () => {
    try {
      const userUid = (user?.uid || undefined) as string;
      const userTasks = await getTask({ uidUser: userUid });
      setTasks(userTasks);
    } catch (error) {
      console.error("Error al obtener tareas: ", error);
    }
  };
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const handleDelete = async (task: Task) => {
    try {
      ConfirmAlert(async () => {
        await deleteTask(task);
        await fetchData();
        navigate("/home");
        Swal.fire({
          title: "¡Borrado!",
          text: "La tarea se ha eliminado.",
          icon: "success",
        });
      });
    } catch (error) {
      console.error("Error al eliminar la tarea: ", error);
    }
  };
  const handleLogOut = async () => {
    await logOut();
  };

  if (loading) return <Loader />;

  return (
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
        <div className="flex flex-col justify-center items-center">
          <DefaultImage />
          <span className="text-center text-gray-500">
            No hay foto de usuario disponible
          </span>
        </div>
      )}
      <h1 className="uppercase text-white font-bold text-2xl">
        {user?.displayName || user?.email}
      </h1>
      <div className="flex flex-wrap justify-around gap-6 mb-3 mt-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              handleDelete={() => handleDelete(task)}
            />
          ))
        ) : (
          <span className="text-4xl text-center text-slate-600">
            No tienes tareas pendientes
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-2">
        <Link to={"/addTask"}>
          <NewTaskBtn content="Nueva tarea" />
        </Link>
        <LogOutBtn handleLogOut={handleLogOut} />
      </div>
    </div>
  );
};
