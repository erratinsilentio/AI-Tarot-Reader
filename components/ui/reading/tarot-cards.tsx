"use client";
import Image from "next/image";
import { HoverCardMeaning } from "./hover-card-meaning";
import { CelticCrossMeanings } from "@/utils/celtic-cross";
import { ThotDeck } from "@/utils/cards";

export const TarotCard = ({
  position,
  card,
}: {
  position: number;
  card?: number | undefined;
}) => (
  <div className="relative pt-2">
    <div className="overflow-hidden w-24 h-34 flex items-center justify-center bg-slate-200 border-2 rounded-lg shadow-md hover:bg-slate-300 transition-colors cursor-pointer">
      <div className="flex items-center justify-center rounded-lg overflow-hidden">
        <HoverCardMeaning info={CelticCrossMeanings[position]}>
          {card ? (
            <Image
              src={`/cards/${ThotDeck[card].filename}`}
              alt="Front of Tarot Card"
              width={90}
              height={100}
            />
          ) : (
            <Image
              src="/back.jpg"
              width={90}
              height={100}
              alt="Back of Thoth Card"
            />
          )}
        </HoverCardMeaning>
      </div>
    </div>
    <div className="absolute mt-[2px] text-[8px] left-0 right-0 mx-auto text-center text-slate-50 max-w-24 font-[family-name:var(--font-geist-mono)]">
      {CelticCrossMeanings[position].name}
    </div>
  </div>
);

export const RotatedTarotCard = ({
  position,
  card,
}: {
  position: number;
  card?: number | undefined;
}) => (
  <HoverCardMeaning info={CelticCrossMeanings[position]}>
    <div className="absolute top-[320px] z-10 -translate-y-1/2 rotate-90">
      <div className="overflow-hidden w-24 h-34 flex items-center justify-center bg-slate-200 border-2 rounded-lg shadow-md hover:bg-slate-300 transition-colors cursor-pointer">
        <div className="flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src={card ? `/cards/${ThotDeck[card].filename}` : "/back.jpg"}
            width={90}
            height={100}
            alt="Thoth Card"
          />
        </div>
      </div>
    </div>
  </HoverCardMeaning>
);
