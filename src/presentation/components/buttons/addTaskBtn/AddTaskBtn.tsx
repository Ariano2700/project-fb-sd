export const AddTaskBtn = () => {
  return (
    <button className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-700 bg-green-700 group hover:bg-green-700 active:bg-green-700 active:border-green-700">
      <span className="text-gray-200 font-semibold ml-2 transform">
        Añadir Tarea
      </span>
      <span className="absolute right-0 h-full w-10 rounded-lg bg-green-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
        <svg
          className="svg w-8 text-white"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" x2="12" y1="5" y2="19"></line>
          <line x1="5" x2="19" y1="12" y2="12"></line>
        </svg>
      </span>
    </button>
  );
};
