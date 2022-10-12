import {ReactNode} from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({children}: MainProps) => {
  return (
    // <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
    <main className="flex-grow mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};