import { addDoc, collection } from "firebase/firestore";
import { Task } from "../presentation/Types/TaskType";
import db from "../firebase/firestore";

export const saveTask = async (props: Task & { uid: string }) => {
  try {
    const { uid, title, description } = props;
    await addDoc(collection(db, "task", uid, "userTask"), {
      title,
      description,
    });
    // console.log("Tarea guardada con id: ", docRef.id);
  } catch (error) {
    console.error("Error al guardar la tarea: ", error);
    throw new Error("Error al guardar la tarea");
  }
};
