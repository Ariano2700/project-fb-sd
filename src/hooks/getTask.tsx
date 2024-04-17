import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firestore";
import { Task } from "../presentation/Types/TaskType";

export const getTask = async ({ uidUser }: { uidUser: string }): Promise <Task[]> => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "task", uidUser, "userTask")
    );
    const tasks: Task[] = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() } as Task);
    });
    return tasks;
  } catch (error) {
    console.error("Error al obtener las tareas: ", error);
    throw new Error("Error al obtener las tareas");
  }
};
