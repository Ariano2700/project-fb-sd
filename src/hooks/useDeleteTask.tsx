import { useEffect, useState } from "react";
import { Task } from "../presentation/Types/TaskType";
import db from "../firebase/firestore";
import { deleteDoc, doc } from "firebase/firestore";

export const useDeleteTask = ({ uid }: { uid: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const deleteTask = async (task: Task) => {
    try {
      setLoading(true);
      if (!uid) {
        throw new Error("El uid es inválido");
      }
      const taskDocRef = doc(db, `task/${uid}/userTask/${task.id}`);
      await deleteDoc(taskDocRef);
      setSuccess(true);
    } catch (error) {
      setError("Error al eliminar la tarea");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return { loading, error, success, deleteTask };
};
