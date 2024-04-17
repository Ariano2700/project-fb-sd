import { handleDeleteType } from "../../Types/FormTypes";

type TaskCardType = {
  title: string;
  description: string;
  handleDelete: handleDeleteType
};
export const TaskCard = (props: TaskCardType) => {
  const { title, description, handleDelete } = props
  return (
    <>
      <div className="bg-white w-40 h-60 rounded-lg">
        <div className="flex p-2 gap-1 justify-between">
          <div className="flex gap-1">
            <div className="circle">
              <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="circle">
              <button onClick={handleDelete}>
                <span className="bg-red-800 inline-block center w-3 h-3 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col">
          <span className="text-2xl text-center">{title}</span>
          <span className="text-3xl text-center font-bold">{description}</span>
        </div>
      </div>
    </>
  );
};
