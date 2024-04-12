import { ReactNode } from "react";

const OutSideWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-md min-w-[380px] bg-gradient-to-r from-indigo-600 to-cyan-800 rounded-md">
      <div className="p-4 flex items-center justify-center flex-col">{children}</div>
    </div>
  );
};
export default OutSideWrapper;