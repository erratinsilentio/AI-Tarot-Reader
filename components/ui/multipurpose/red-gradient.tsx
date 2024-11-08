import { ReusableComponent } from "@/types/types";
import { FC } from "react";

export const RedGradientText: FC<ReusableComponent> = ({
  children,
  className,
}) => {
  return (
    <span
      className={`${className} font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500`}
    >
      {children}
    </span>
  );
};
