import { ragChat } from "@/lib/rag-chat";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { HoverCardMeaning } from "./hover-card-meaning";
import { ChatWrapper } from "./chat-wrapper";

export const ReadingArea = async () => {
  return (
    <div className="flex flex-col gap-2 w-full h-[30vh] sm:h-[100vh]">
      {/* <Textarea
        className="h-full text-[20px] text-center py-3 placeholder:italic placeholder:text-[16px] placeholder:font-extralight"
        placeholder="Your reading will be generated here"
        id="reading"
        disabled
      ></Textarea>
      <div className="flex flex-row gap-2">
        <Input disabled placeholder="Ask followup questions..." />
        <HoverCardMeaning
          info={{
            name: "Followup Question Tokens",
            description: "Number of followup questions you have left to ask.",
          }}
        >
          <button className="w-9 h-9 border border-input rounded-md flex justify-center items-center text-[12px] font-light hover:brightness-150">
            10
          </button>
        </HoverCardMeaning>
      </div>
      <Button className="h-12" disabled>
        send
      </Button> */}
      <ChatWrapper />
    </div>
  );
};
