import { LearnPageHeader } from "@/components/ui/learn/learn-header";
import { CarouselDemo } from "@/components/ui/reading/caroussel";

export default function Learn() {
  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-start max-h-screen p-4 pb-20 px-16 gap-0 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-3 row-start-2 items-center sm:items-center">
          <LearnPageHeader />
          <CarouselDemo />
        </main>
      </div>
    </>
  );
}
