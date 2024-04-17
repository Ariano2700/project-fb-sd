import Swal from "sweetalert2";

export function SavedAlert () {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se guardo la tarea correctamente",
        showConfirmButton: false,
        timer: 1500
      });
}