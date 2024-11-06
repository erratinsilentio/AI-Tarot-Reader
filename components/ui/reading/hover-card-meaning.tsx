import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const HoverCardMeaning = ({ children, info }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        <h1 className="font-bold pb-2">{info.name}</h1>
        <p className="text-[12px]">{info.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
