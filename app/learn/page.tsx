import { CarouselDemo } from "@/components/ui/reading/caroussel";
import Image from "next/image";

export default function Learn() {
  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-start max-h-screen p-4 pb-20 px-16 gap-0 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-3 row-start-2 items-center sm:items-center">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end pb-[20px]">
            <Image
              src="/Sun.png"
              alt="Tarot Reader logo"
              width={150}
              height={38}
              priority
              className="sm:mr-4"
            />
            <section className="flex flex-col">
              <h1 className="pb-[5px] sm:pb-[5px] px-[10px] pt-4 sm:pt-0 text-center sm:text-left text-[44px] sm:text-[40px] font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
                Tarot Reader
              </h1>
              <span className="pb-[24px] px-[10px] text-[25px] font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500">
                Discover The Meaning of Each Card
              </span>
            </section>
          </div>
          <div className="w-full">
            <CarouselDemo />
          </div>
        </main>
      </div>
    </>
  );
}
