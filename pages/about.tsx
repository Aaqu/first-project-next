import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function  About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto ">
        <p className="font-bold text-3xl">Kontakt: </p>
        <p>kontakt@mazuralbert.pl</p>
      </main>
      <Footer />
    </div>
  );
}