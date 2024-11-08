"use client";
import { Celtic } from "@/components/ui/reading/celtic-cross";
import { TarotReadingInput } from "@/components/ui/reading/input-area";
import Header from "@/components/ui/reading/reading-header";
import MainLayout from "@/components/ui/reading/reading-layout";
import TarotControls from "@/components/ui/reading/tarot-controls";
import TarotDisplay from "@/components/ui/reading/tarot-display";
import { ReadingArea } from "@/components/ui/reading/textarea-label";
import generateSetOfCards from "@/utils/generate-cards";
import Image from "next/image";
import { Suspense, useState } from "react";

export default function Reading() {
  const [areCardsGenerated, setAreCardsGenerated] = useState<boolean>(false);
  const [generatedCards, setGeneratedCards] = useState<number[]>([]);
  const [tokens, setTokens] = useState<number>(10);

  function createNewSet() {
    const cards = generateSetOfCards();
    // @ts-ignore
    setGeneratedCards(cards);
    setAreCardsGenerated(true);
    setTokens(tokens - 1);
  }

  function resetCards() {
    setGeneratedCards([]);
    setAreCardsGenerated(false);
  }

  return (
    <Suspense>
      <MainLayout>
        <Header />
        <TarotControls
          createNewSet={createNewSet}
          resetCards={resetCards}
          areCardsGenerated={areCardsGenerated}
        />
        <TarotDisplay
          areCardsGenerated={areCardsGenerated}
          generatedCards={generatedCards}
        />
      </MainLayout>
    </Suspense>
  );
}
