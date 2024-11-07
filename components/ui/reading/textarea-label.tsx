import { ChatWrapper } from "./chat-wrapper";

export const ReadingArea = ({
  areCardsGenerated,
}: {
  areCardsGenerated: boolean;
}) => {
  return (
    <div className="w-full max-w-1/2">
      <ChatWrapper areCardsGenerated={areCardsGenerated} />
    </div>
  );
};
