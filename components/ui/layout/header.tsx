"use client";
import Link from "next/link";
import { HoverCardMeaning } from "../reading/hover-card-meaning";
import { useState } from "react";
import { Avatar } from "../avatar";
import { UserAvatar } from "./user-avatar";
import { LoginButton } from "./login-button";
import { RemainingTokens } from "./remaining-tokens";

export const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <header className="fixed top-0 right-0 px-8 py-4 w-[100vw] flex flex-row justify-end gap-4">
      {isUserLoggedIn && <RemainingTokens />}
      {isUserLoggedIn ? <UserAvatar /> : <LoginButton />}
    </header>
  );
};
