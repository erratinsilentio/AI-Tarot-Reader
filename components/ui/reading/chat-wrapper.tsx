"use client";

import { useChat, Message } from "ai/react";
import { Input } from "../input";
import { HoverCardMeaning } from "./hover-card-meaning";
import { Button } from "../button";
import { useSearchParams } from "next/navigation";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
  areCardsGenerated,
}: {
  sessionId?: string;
  initialMessages?: Message[];
  areCardsGenerated: boolean;
}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <div className="flex text-white h-[calc(100vh-64px)] flex-col overflow-y-auto items-center min-h-[70px] max-h-[100vh] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
        {messages.length ? (
          messages.map((message, i) => (
            <div className="w-[60vw] flex flex-row gap-3 p-6" key={i}>
              <div className="min-w-12">
                {message.role === "user" ? "User" : "Bot"}
              </div>
              <p className="text-sm font-normal text-gray-100">
                {message.content}
              </p>
            </div>
          ))
        ) : (
          <div className="text-zinc-500 text-sm pt-6">
            Your reading will be generated here
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-2 pt-2"
      >
        <div className="flex flex-row gap-2">
          <Input
            onChange={handleInputChange}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
                setInput("");
              }
            }}
            placeholder="Ask followup questions..."
          />
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
        <Button className="h-12 w-full p-0">send</Button>
      </form>
    </div>
  );
};
