import { ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </div>
  );
};