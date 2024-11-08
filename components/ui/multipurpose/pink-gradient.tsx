import { ReusableComponent } from "@/types/types";
import { FC } from "react";

export const PinkGradientText: FC<ReusableComponent> = ({
  children,
  className,
}) => {
  return (
    <span
      className={`${className} font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300`}
    >
      {children}
    </span>
  );
};
