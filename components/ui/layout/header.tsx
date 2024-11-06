import { UserAvatar } from "./user-avatar";
import { LoginButton } from "./login-button";
import { RemainingTokens } from "./remaining-tokens";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function Header() {
  const { userId } = await auth();

  return (
    <header className="fixed top-0 right-0 px-8 py-4 w-[100vw] flex flex-row justify-end gap-4">
      {userId && <RemainingTokens />}
      {userId ? <UserAvatar /> : <LoginButton />}
    </header>
  );
}
