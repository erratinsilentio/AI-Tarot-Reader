import Image from "next/image";
import { Button } from "../button";
import { Input } from "../input";
import { HoverCardMeaning } from "./hover-card-meaning";
import { useState } from "react";

interface TarotReadingInputProps {
  createNewSet: () => void;
  resetCards: () => void;
  areCardsGenerated: boolean;
}

export const TarotReadingInput: React.FC<TarotReadingInputProps> = ({
  createNewSet,
  resetCards,
  areCardsGenerated,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    resetCards();
  };

  return (
    <>
      <Input
        placeholder="Ask a Question..."
        disabled={areCardsGenerated}
        value={inputValue}
        onChange={handleInputChange}
        minLength={15}
        maxLength={50}
      />
      <HoverCardMeaning
        info={{
          name: "Generate Reading",
          description:
            "Clicking this button will send your question to AI model and new tarot reading will be generated. One reading costs 1 token.",
        }}
      >
        <Button
          onClick={createNewSet}
          className="h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150"
          disabled={areCardsGenerated || inputValue.length < 15}
        >
          generate ⎆
        </Button>
      </HoverCardMeaning>
      <HoverCardMeaning
        info={{
          name: "Reset",
          description:
            "By clicking this button you erase all data from current reading and consent to start from scratch.",
        }}
      >
        <Button variant="outline" className="group" onClick={handleReset}>
          <Image
            src="/reset.svg"
            alt="Reset Button"
            width={20}
            height={20}
            className="invert group-hover:animate-spin"
          />
        </Button>
      </HoverCardMeaning>
    </>
  );
};
