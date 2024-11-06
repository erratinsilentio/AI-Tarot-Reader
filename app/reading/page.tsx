import { Input } from "@/components/ui/input";
import { Celtic } from "@/components/ui/reading/celtic-cross";
import { ReadingArea } from "@/components/ui/reading/textarea-label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Reading() {
  return (
    <>
      <div className="grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          <div className="px-12 flex flex-row items-end justify-end">
            <Image
              src="/celtic.png"
              alt="Tarot Reader logo"
              width={160}
              height={38}
              priority
              className="mr-4"
            />
            <span className="px-[10px] sm:pt-0 text-[36px] sm:text-[50px] font-[family-name:var(--font-geist-mono)]">
              Ask <br />a Question...
            </span>
          </div>
          <section className="w-full sm:w-[80vw] px-12 pt-6 flex flex-row gap-2">
            <Input />
            <button className="w-9 h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150">
              ⎆
            </button>
            <div className="w-9 h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150">
              10
            </div>
          </section>
          <section className="w-full px-12 sm:w-[80vw] flex flex-row justify-center gap-12 sm:flex-row sm:justify-start pt-12">
            <Celtic />
            <ReadingArea />
          </section>
        </main>
      </div>
    </>
  );
}

const tarotCards = [
  { description: "The Fool" },
  { description: "The Magician" },
  { description: "The High Priestess" },
  { description: "The Empress" },
  { description: "The Emperor" },
  { description: "The Hierophant" },
  { description: "The Lovers" },
  { description: "The Chariot" },
  { description: "Strength" },
  { description: "The Hermit" },
];
