import { Link, useNavigate } from "react-router-dom";
import DescriptionIcon from "../../../assets/icons/googleIcon/DescriptionIcon";
import ReturnArrow from "../../../assets/icons/googleIcon/ReturnArrow";
import TitleIcon from "../../../assets/icons/googleIcon/TitleIcon";
import InputForm from "../../components/InputForm";
import { AddTaskBtn } from "../../components/buttons/addTaskBtn/AddTaskBtn";
import { useState } from "react";
import { handleChangeType, handleSubmitType } from "../../Types/FormTypes";
import { Task } from "../../Types/TaskType";
import { useAuth } from "../../context/authContext";
import Loader from "../outside/loader/Loader";
import { saveTask } from "../../../hooks/saveTask";
import { SavedAlert } from "../../components/alerts/SavedAlert";

export const AddNewTask = () => {
  const navigate = useNavigate();

  const { user, loading } = useAuth();
  const [task, setTask] = useState<Task>({
    id: null,
    title: "",
    description: "",
  });
  const handleChange: handleChangeType = ({ target: { name, value } }) => {
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };
  const handleSubmit: handleSubmitType = async (e) => {
    e.preventDefault();
    try {
      if (!task.title.trim() || !task.description.trim()) {
        console.error("Por favor complete los campos.");
        return;
      }
      const uid = (user?.uid || undefined) as string;
      await saveTask({ ...task, uid });
      setTask({ id: null, title: "", description: "" });
      SavedAlert()
      navigate("/home")
    } catch (error) {
      console.error("Error al guardar la tarea: ", error);
    }
  };
  if (loading) return <Loader />;
  return (
    <>
      <main className="bg-black h-screen flex justify-center items-center">
        <div className="bg-gray-600 p-5 rounded-md">
          <form className="flex flex-col items-center gap-6 p-3 w-full" onSubmit={handleSubmit}>
            <Link to={"/home"}>
              <div className="flex items-center gap-1 cursor-pointer text-white text-xl w-full">
                <ReturnArrow /> <span>Atras</span>
              </div>
            </Link>
            <h1 className="text-white font-bold text-3xl">
              Agregar nueva tarea
            </h1>
            <div className="flex flex-col gap-8 mt-4">
              <InputForm
                name="title"
                placeholder="Titulo de tarea"
                type="text"
                icon={<TitleIcon />}
                onChange={handleChange}
              />
              <InputForm
                name="description"
                placeholder="Descripción de tarea"
                type="text"
                icon={<DescriptionIcon />}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <AddTaskBtn />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
