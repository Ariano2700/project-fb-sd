import { Variants } from "framer-motion";
import { handleDeleteType } from "../../Types/FormTypes";
import { motion } from "framer-motion";

type TaskCardType = {
  id: string | undefined;
  title: string;
  description: string;
  handleDelete: handleDeleteType;
  index: number;
};
export const TaskCard = (props: TaskCardType) => {
  const { title, description, handleDelete, id, index } = props;
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({delay}) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };
  return (
    <>
      <motion.div
        className="bg-white w-40 h-60 rounded-lg"
        custom={{ delay: (index + 1) * 0.2 }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        layoutId={id}
      >
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
      </motion.div>
    </>
  );
};
