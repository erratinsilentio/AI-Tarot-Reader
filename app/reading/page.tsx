import { Input } from "@/components/ui/input";
import { Celtic } from "@/components/ui/reading/celtic-cross";
import { ReadingArea } from "@/components/ui/reading/textarea-label";
import Image from "next/image";

export default function Reading() {
  return (
    <>
      <div className="grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
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
          <section className="w-full sm:w-[80vw] px-4 pt-6 flex flex-row gap-2">
            <Input placeholder="Ask a Question..." />
            <button className="w-9 h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150">
              ⎆
            </button>
            <div className="w-9 h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150">
              10
            </div>
          </section>
          <section className="w-full px-4 sm:w-[80vw] flex flex-col justify-center items-center gap-12 sm:flex-row sm:justify-start sm:items-start sm:pt-12">
            <ReadingArea />
            <Celtic />
          </section>
        </main>
      </div>
    </>
  );
}
