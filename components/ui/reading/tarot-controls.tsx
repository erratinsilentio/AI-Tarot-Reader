import { TarotReadingInput } from "@/components/ui/reading/input-area";

export default function TarotControls({
  createNewSet,
  resetCards,
  areCardsGenerated,
}) {
  return (
    <section className="w-full sm:w-[80vw] px-4 pt-6 flex flex-row items-center justify-evenly gap-2">
      <TarotReadingInput
        createNewSet={createNewSet}
        resetCards={resetCards}
        areCardsGenerated={areCardsGenerated}
      />
    </section>
  );
}
