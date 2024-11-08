import { AlertComponent } from "@/components/ui/home/alert";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="grid grid-rows-[0px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-3 row-start-2 items-center sm:items-center">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end">
            <Image
              src="/TarotReader.png"
              alt="Tarot Reader logo"
              width={200}
              height={38}
              priority
              className="sm:mr-4"
            />
            <h1 className="pb-[10px] sm:pb-[20px] px-[10px] pt-4 sm:pt-0 text-center sm:text-left text-[44px] sm:text-[50px] font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
              Tarot Reader
            </h1>
          </div>
          <span className="pb-[34px] px-[10px] text-[20px] sm:w-[40vw] text-center font-[family-name:var(--font-geist-mono)] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500">
            Unlock the mysteries of your future with our AI-powered Tarot
            readings.
          </span>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-3">
              Type out a question that has been on your mind{" "}
            </li>
            <li className="mb-2">Our AI interprets the cards drawn for you</li>
          </ol>
          <div className="flex gap-4 items-center flex-col sm:flex-row pt-8">
            <Link
              className="group bg-gradient-to-r from-pink-200 via-zinc-50 to-pink-100 w-[200px] sm:w-auto rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/reading"
              rel="noopener noreferrer"
            >
              <span className="text-[24px] pr-[2px] flex justify-center items-center group-hover:animate-spin">
                <span className="rotate-90">☯</span>
              </span>
              <span className="pr-[8px]"> Start Your Reading</span>
            </Link>
            <a
              className="w-[200px] sm:w-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
          <AlertComponent />
        </main>
      </div>
    </>
  );
}
