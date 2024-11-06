import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link
      href={"/sign-in"}
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    >
      Login
    </Link>
  );
};
