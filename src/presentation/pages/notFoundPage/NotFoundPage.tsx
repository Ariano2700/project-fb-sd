import { Link } from "react-router-dom";
import { NewTaskBtn } from "../../components/buttons/newTaskBtn/NewTaskBtn";

export const NotFoundPage = () => {
  return (
    <>
        <div className="flex flex-col text-4xl items-center gap-5 text-center">
          <h2 className="text-gray-400">404 - PAGE NOT FOUND</h2>
          <h1 className="text-white">LA PAGINA BUSCADA NO SE <br /> ENCUENTRA EN EL SITIO WEB.</h1>
          <Link to="/">
          <NewTaskBtn content="Volver al inicio" />
          </Link>
        </div>
    </>
  );
};
