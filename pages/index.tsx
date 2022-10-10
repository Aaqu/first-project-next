import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img
          src="https://picsum.photos/id/237/536/354"
          alt="Czarny pies patrzy na ciebie"
        />
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias corporis incidunt ipsam labore, magni quos unde.
          A, adipisci alias, consequatur distinctio facilis modi nisi nulla,
          officiis quidem quo quos sint unde ut vitae voluptatum.
          Accusamus aspernatur facilis maxime recusandae repellendus.
          Ex itaque qui quibusdam repellat! Dolorem eius illum recusandae
          voluptatibus.
        </p>
      </main>
      <Footer />
    </div>
  )
}