import Image from "next/image";
import { HoverCardMeaning } from "./hover-card-meaning";
import { CelticCrossMeanings } from "@/utils/celtic-cross";

const TarotCard = ({
  position,
  label,
}: {
  position: number;
  label: string;
}) => (
  <div className="relative">
    <div className="overflow-hidden w-24 h-34 flex items-center justify-center bg-slate-200 border-2 rounded-lg shadow-md hover:bg-slate-300 transition-colors cursor-pointer">
      <div className="flex items-center justify-center rounded-lg overflow-hidden">
        <HoverCardMeaning card={CelticCrossMeanings[position]}>
          <Image
            src="/back.jpg"
            width={90}
            height={100}
            alt="Back of Thoth Card"
          />
        </HoverCardMeaning>
      </div>
    </div>
    <div className="mt-[2px] text-xs text-center text-slate-50 max-w-24">
      {/* {label} */}
    </div>
  </div>
);

export const Celtic = () => {
  return (
    <main className="flex flex-row">
      <section className="flex flex-col justify-center">
        <TarotCard position={5} label={"5"} />
      </section>
      <section className="flex flex-col justify-evenly sm:px-12">
        <TarotCard position={4} label={"4"} />
        <TarotCard position={1} label={"1"} />
        <TarotCard position={3} label={"3"} />
      </section>

      <section className="flex flex-col justify-center">
        <TarotCard position={6} label={"6"} />
      </section>
      <section className="flex flex-col pl-6 sm:pl-12 gap-2">
        <TarotCard position={7} label={"7"} />
        <TarotCard position={8} label={"8"} />
        <TarotCard position={9} label={"9"} />
        <TarotCard position={10} label={"10"} />
      </section>
    </main>
  );
};
