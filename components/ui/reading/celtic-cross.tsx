import { RotatedTarotCard, TarotCard } from "./tarot-cards";

export const Celtic = ({ cards }: { cards: number[] }) => {
  return (
    <main className="relative flex flex-row sm:h-[90vh] pt-4">
      <section className="flex flex-col justify-center sm:h-[85vh]">
        <TarotCard position={5} card={cards ? cards[4] : undefined} />
      </section>
      <section className="flex flex-col justify-evenly sm:px-12 sm:h-[89vh]">
        <TarotCard position={4} card={cards ? cards[3] : undefined} />
        <TarotCard position={1} card={cards ? cards[0] : undefined} />
        <TarotCard position={3} card={cards ? cards[2] : undefined} />
        <RotatedTarotCard position={2} card={cards ? cards[1] : undefined} />
      </section>
      <section className="flex flex-col justify-center sm:h-[85vh]">
        <TarotCard position={6} card={cards ? cards[5] : undefined} />
      </section>
      <section className="flex flex-col pl-6 sm:pl-12 gap-10">
        <TarotCard position={7} card={cards ? cards[6] : undefined} />
        <TarotCard position={8} card={cards ? cards[7] : undefined} />
        <TarotCard position={9} card={cards ? cards[8] : undefined} />
        <TarotCard position={10} card={cards ? cards[9] : undefined} />
      </section>
    </main>
  );
};
