import { cn } from "@/lib/utils";
import { FlexComponentType } from "@/types/types";
import { FC } from "react";

export const FlexBox: FC<FlexComponentType> = ({
  children,
  direction,
  justify,
  items,
  className,
}) => {
  return (
    <section
      className={cn(
        `flex flex-${direction} justify-${justify} items-${items} flex ${className}`,
      )}
    >
      {children}
    </section>
  );
};
