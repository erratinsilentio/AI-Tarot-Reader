import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 px-8 py-4">
      <Link
        href={"/login"}
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        Login
      </Link>
    </header>
  );
};
