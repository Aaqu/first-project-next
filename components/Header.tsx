import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-2xl mx-auto w-full">
      <nav className="bg-gray-500 text-white px-4 py-2">
        <Link href="/" replace>
          <a>Główna</a>
        </Link>
        <Link href="/about" replace>
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};