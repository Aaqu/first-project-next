import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};