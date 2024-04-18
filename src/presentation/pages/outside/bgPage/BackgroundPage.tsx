import { ReactNode } from "react";

export const BackgroundPage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-gradient-to-br from-slate-500 to-slate-800 p-8 min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
};
