import { SolarLogout2Linear } from "../../../../assets/icons/solar/SolarLogout2Linear";

export const LogOutBtn = ({ handleLogOut }: { handleLogOut: () => void }) => {
  return (
    <>
      <button
        className="text-white p-4 bg-red-500 mt-4 rounded-md hover:bg-red-800 transition-all duration-300 flex justify-center items-center gap-3"
        onClick={handleLogOut}
      >
        <span>
          <SolarLogout2Linear />
        </span>
        <span className="font-bold">Cerrar sesión</span>
      </button>
    </>
  );
};
