import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverCardMeaningProps {
  children: React.ReactNode;
  info: {
    name: string;
    description: string;
  };
}

export const HoverCardMeaning: React.FC<HoverCardMeaningProps> = ({
  children,
  info,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent className="z-20">
        <h1 className="font-bold pb-2">{info.name}</h1>
        <p className="text-[12px]">{info.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
