import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="fixed top-0 right-0 px-8 py-4">
          <Link
            href={"/login"}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            Login
          </Link>
        </header>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end">
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
          <ol className="list-inside list-decimal text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Type out a question that has been on your mind{" "}
            </li>
            <li>See what probabilities life has to offer</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="group w-[200px] sm:w-auto rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[24px] pr-[2px] flex justify-center items-center group-hover:animate-spin">
                <span className="rotate-90">☯</span>
              </span>
              <span className="pr-[8px]"> Start</span>
            </a>
            <a
              className="w-[200px] sm:w-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/Butterfly.png"
              alt="File icon"
              width={16}
              height={16}
              className="group-hover:animate-ping"
            />
            Learn
          </a>
          <a
            className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/Butterfly.png"
              alt="Window icon"
              width={16}
              height={16}
              className="group-hover:animate-ping"
            />
            About
          </a>
          <a
            className="group flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/Butterfly.png"
              alt="Globe icon"
              width={16}
              height={16}
              className="group-hover:animate-ping"
            />
            Contact
          </a>
        </footer>
      </div>
    </>
  );
}
