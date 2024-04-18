import { useState } from "react";
import SolarLockOutline from "../../../assets/icons/solar/SolarLockOutline";
import SolarUserOutline from "../../../assets/icons/solar/SolarUserOutline";
import {
  Auth,
  ErrorType,
  handleChangeType,
  handleSubmitType,
} from "../../Types/FormTypes";
import InputForm from "../../components/InputForm";
import OutSideWrapper from "../outside/form/OutSideWrapper";
import { Link, useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../components/alerts/ErrorAlert";
import { useAuth } from "../../context/authContext";

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Auth>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorType>(null);
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
  const { singUp } = useAuth();

  const handleChange: handleChangeType = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    setError(null);
  };
  const handleSubmit: handleSubmitType = async (e) => {
    e.preventDefault();
    try {
      await singUp({ email: user.email, password: user.password });
      navigate("/home");
    } catch (error: any) {
      if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setError(
          "La contraseña debe tener 6 o mas caracteres" || "Error desconocido"
        );
        setShowErrorDialog(true);
      }
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("El correo ya esta en uso" || "Error desconocido");
        setShowErrorDialog(true);
      }
    }
  };
  return (
    <>
        <div className="flex items-center justify-center">
          <OutSideWrapper>
            {showErrorDialog && ErrorAlert({ error })}

            <form
              className="flex flex-col items-center gap-6 p-3 w-full"
              onSubmit={handleSubmit}
            >
              <h1 className=" font-semibold text-lg md:text-3xl text-[#323232]">
                Registrarse
              </h1>
              <InputForm
                placeholder="Email"
                type="email"
                name="email"
                icon={<SolarUserOutline />}
                onChange={handleChange}
                styleProp="inputLoginRegister"
              />
              <InputForm
                placeholder="Password"
                type="password"
                name="password"
                icon={<SolarLockOutline />}
                onChange={handleChange}
                styleProp="inputLoginRegister"
              />
              <div className="text-white text-sm text-right">
                <Link to={"/"} className="flex cursor-pointer underline text-[#323232]">
                  ¿Ya tienes cuenta? Inicia sesión
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  className="formBtn"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </form>
          </OutSideWrapper>
        </div>
    </>
  );
};
