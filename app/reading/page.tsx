"use client";
import { Celtic } from "@/components/ui/reading/celtic-cross";
import { TarotReadingInput } from "@/components/ui/reading/input-area";
import { ReadingArea } from "@/components/ui/reading/textarea-label";
import generateSetOfCards from "@/utils/generate-cards";
import Image from "next/image";
import { useState } from "react";

export default function Reading() {
  const [areCardsGenerated, setAreCardsGenerated] = useState<boolean>(false);
  const [generatedCards, setGeneratedCards] = useState(undefined);
  const [tokens, setTokens] = useState<number>(10);

  function createNewSet() {
    const cards = generateSetOfCards();
    if (cards) {
      setGeneratedCards(cards);
      setAreCardsGenerated(true);
      setTokens(tokens - 1);
    }
    console.log(generatedCards);
  }

  function resetCards() {
    setGeneratedCards(null);
    setAreCardsGenerated(false);
  }

  return (
    <>
      <div className="grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-6 row-start-2 items-center sm:items-center">
          <div className="px-12 flex flex-row items-end justify-end">
            <Image
              src="/TarotReader.png"
              alt="Tarot Reader logo"
              width={180}
              height={38}
              priority
              className="sm:mr-4"
            />
            <span className="pb-[20px] px-[10px] text-[50px] font-[family-name:var(--font-geist-mono)]">
              Tarot AI
            </span>
          </div>
          <section className="w-full sm:w-[80vw] px-4 pt-6 flex flex-row items-center justify-evenly gap-2">
            <TarotReadingInput
              createNewSet={createNewSet}
              resetCards={resetCards}
            />
          </section>
          <section className="w-full pt-4 px-4 sm:w-[80vw] flex flex-col justify-center items-center gap-12 sm:flex-row sm:justify-start sm:items-start sm:pt-2">
            <ReadingArea />
            <Celtic cards={generatedCards} />
          </section>
        </main>
      </div>
    </>
  );
}
