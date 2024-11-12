import { ReadingArea } from "@/components/ui/reading/textarea-label";
import { Celtic } from "@/components/ui/reading/celtic-cross";

export default function TarotDisplay({ areCardsGenerated, generatedCards }) {
  return (
    <section className="w-full pt-4 px-4 sm:w-[80vw] flex flex-col justify-center items-center gap-12 sm:flex-row sm:justify-center sm:items-start sm:pt-2">
      <ReadingArea areCardsGenerated={areCardsGenerated} />
      <Celtic cards={generatedCards} />
    </section>
  );
}
