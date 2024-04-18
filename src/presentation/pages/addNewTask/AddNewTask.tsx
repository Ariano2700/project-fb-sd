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
      SavedAlert();
      navigate("/home");
    } catch (error) {
      console.error("Error al guardar la tarea: ", error);
    }
  };
  if (loading) return <Loader />;
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
          <form
            className="flex flex-col items-center gap-6 bg-white p-16 rounded-lg shadow-2xl w-full relative z-10 transform transition duration-500 ease-in-out text-center"
            onSubmit={handleSubmit}
          >
            <Link to={"/home"}>
              <div className=" flex items-center gap-1 cursor-pointer text-black text-xl w-full">
                <ReturnArrow /> <span>Atras</span>
              </div>
            </Link>
            <h1 className="text-black font-bold text-3xl">
              Agregar nueva tarea
            </h1>
            <div className="flex flex-col gap-8 mt-4">
              <InputForm
                name="title"
                placeholder="Titulo de tarea"
                type="text"
                icon={<TitleIcon />}
                onChange={handleChange}
                styleProp="h-10 rounded input input-bordered border-white w-full bg-slate-100 placeholder:text-primary text-p600 p-2 pr-10 border border-black"
              />
              <InputForm
                name="description"
                placeholder="Descripción de tarea"
                type="text"
                icon={<DescriptionIcon />}
                onChange={handleChange}
                styleProp="h-10 rounded input input-bordered border-white w-full bg-slate-100 placeholder:text-primary text-p600 p-2 pr-10 border border-black"
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-9">
              <AddTaskBtn />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
