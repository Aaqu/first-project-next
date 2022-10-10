export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="max-w-md mx-auto w-full">
        <nav className="bg-gray-500 text-white px-4 py-2">
          Nawigacja
        </nav>
      </header>
      <main className="flex-grow max-w-md mx-auto w-full">
        Main
      </main>
      <footer className="bg-gray-900 max-w-md mx-auto w-full text-white px-4 py-2">
        Stopka
      </footer>
    </div>
  )
}