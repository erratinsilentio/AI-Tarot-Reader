export interface ReusableComponent {
  children?: React.ReactNode;
  className?: string;
}

export type FlexJustify = "start" | "center" | "end" | "evenly" | "between";

export type FlexItems = "start" | "center" | "end";

export type FlexDirection = "row" | "col";

export interface FlexComponentType {
  direction: FlexDirection;
  justify?: FlexJustify;
  items?: FlexItems;
  className?: string;
  children: React.ReactNode;
}
