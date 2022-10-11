import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import { Main } from "../components/Main";

export default function  About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <p className="font-bold text-3xl">Kontakt: </p>
        <p>kontakt@mazuralbert.pl</p>
      </Main>
      <Footer />
    </div>
  );
}