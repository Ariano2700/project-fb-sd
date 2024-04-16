import { Link, useNavigate } from "react-router-dom";
import SolarLockOutline from "../../../assets/icons/solar/SolarLockOutline";
import SolarUserOutline from "../../../assets/icons/solar/SolarUserOutline";
import InputForm from "../../components/InputForm";
import { GoogleBtn } from "../../components/googleBtn/GoogleBtn";
import { useAuth } from "../../context/authContext";
import OutSideWrapper from "../outside/form/OutSideWrapper";
import { useState } from "react";
import {
  Auth,
  ErrorType,
  handleChangeType,
  handleSubmitType,
} from "../../Types/FormTypes";
import { ErrorAlert } from "../../components/ErrorAlert";

export const Login = () => {
  const navigate = useNavigate();
  const { login, loginWhitGoogle } = useAuth();
  const [user, setUser] = useState<Auth>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorType>(null);
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
  const handleChange: handleChangeType = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError(null);
  };

  const handleSubmit: handleSubmitType = async (e) => {
    e.preventDefault();
    try {
      await login({ email: user.email, password: user.password });
      navigate("/home");
    } catch (error: any) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError(
          "El correo o la contraseña son incorrectos" || "Error desconocido"
        );
        setShowErrorDialog(true);
      }
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError(
          "El correo es incorrecto, intentalo con otro" || "Error desconocido"
        );
        setShowErrorDialog(true);
      }
      if (error.message === "Firebase: Error (auth/missing-password).") {
        setError(
          "La contraseña es incorrecta, intentalo con otro" ||
            "Error desconocido"
        );
        setShowErrorDialog(true);
      }
    }
  };
  const handleGoogleSingIn = async () => {
    try {
      await loginWhitGoogle();
      navigate("/");
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="bg-gray-600 min-h-screen">
        <div className="flex items-center justify-center h-screen">
          <OutSideWrapper>
            {showErrorDialog && ErrorAlert({ error })}
            <form
              className="flex flex-col items-center gap-6 p-3 w-full"
              onSubmit={handleSubmit}
            >
              <h1 className="text-white font-semibold text-lg md:text-2xl">
                Iniciar sesión
              </h1>
              <InputForm
                placeholder="Email"
                type="email"
                name="email"
                icon={<SolarUserOutline />}
                onChange={handleChange}
              />
              <InputForm
                placeholder="Password"
                type="password"
                name="password"
                icon={<SolarLockOutline />}
                onChange={handleChange}
              />
              <div className="text-white text-sm text-right">
                <Link
                  to={"/register"}
                  className="flex cursor-pointer underline"
                >
                  ¿Aun no estas registrado? Registrate
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  className="bg-green-600 px-7 py-2 text-white rounded-md hover:bg-green-800 transition-all duration-300"
                  type="submit"
                >
                  Ingresar
                </button>
              </div>
            </form>
            <GoogleBtn onClick={handleGoogleSingIn} />
          </OutSideWrapper>
        </div>
      </section>
    </>
  );
};
