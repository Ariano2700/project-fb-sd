import { ReactNode } from "react";

const OutSideWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-outsidewrapper">
      <div className="p-4 flex items-center justify-center flex-col">{children}</div>
    </div>
  );
};
export default OutSideWrapper;