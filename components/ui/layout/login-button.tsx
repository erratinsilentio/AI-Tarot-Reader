import Link from "next/link";
import { Button } from "../button";

export const LoginButton = () => {
  return (
    <Link href={"/sign-in"} className="flex items-center">
      <Button variant="outline">Sign In</Button>
    </Link>
  );
};
