type TaskCardType = {
  content: string;
};
export const TaskCard = ({ content }: TaskCardType) => {
  return (
    <>
      <div className="bg-white w-40 h-60 rounded-lg">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="h-full flex ">
          <span className="text-3xl text-center font-bold">{content}</span>
        </div>
      </div>
    </>
  );
};
