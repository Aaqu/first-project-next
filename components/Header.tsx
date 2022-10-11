import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="max-w-2xl mx-auto w-full">
      <nav className="bg-gray-500 text-white px-4 py-2">
        <Link href="/" className={router.pathname === "/" ? "selected" : ""} replace>
          <a>Główna</a>
        </Link>
        <Link href="/about" className={router.pathname === "/about" ? "selected" : ""} replace>
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};