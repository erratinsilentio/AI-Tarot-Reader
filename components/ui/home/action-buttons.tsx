import Link from "next/link";

export default function ActionButtons() {
  return (
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
      <Link
        className="w-[200px] sm:w-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="/learn"
        rel="noopener noreferrer"
      >
        Read more
      </Link>
    </div>
  );
}
