import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const HoverCardMeaning = ({ children, card }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        <h1 className="font-bold pb-2">{card.name}</h1>
        <p className="text-[12px]">{card.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
