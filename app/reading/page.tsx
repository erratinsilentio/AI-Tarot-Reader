"use client";
import { SkeletonCard } from "@/components/ui/multipurpose/multi-skeleton";
import Header from "@/components/ui/reading/reading-header";
import MainLayout from "@/components/ui/reading/reading-layout";
import TarotControls from "@/components/ui/reading/tarot-controls";
import TarotDisplay from "@/components/ui/reading/tarot-display";
import generateSetOfCards from "@/utils/generate-cards";
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
    <MainLayout>
      <Suspense fallback={<SkeletonCard />}>
        <Header />
      </Suspense>

      <Suspense fallback={<SkeletonCard />}>
        <TarotControls
          createNewSet={createNewSet}
          resetCards={resetCards}
          areCardsGenerated={areCardsGenerated}
        />
      </Suspense>
      <Suspense fallback={<SkeletonCard />}>
        <TarotDisplay
          areCardsGenerated={areCardsGenerated}
          generatedCards={generatedCards}
        />
      </Suspense>
    </MainLayout>
  );
}
