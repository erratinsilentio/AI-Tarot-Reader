import { HoverCardMeaning } from "../reading/hover-card-meaning";

export const RemainingTokens = () => {
  return (
    <HoverCardMeaning
      info={{
        name: "Tokens",
        description:
          "This number determines how many reading you have left to get.",
      }}
    >
      <div className="cursor-pointer w-9 h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150">
        10
      </div>
    </HoverCardMeaning>
  );
};
