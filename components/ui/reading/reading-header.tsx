import Image from "next/image";

export default function Header() {
  return (
    <div className="px-12 flex flex-row items-end justify-end">
      <Image
        src="/Tarot Emoji (1).png"
        alt="Tarot Reader logo"
        width={200}
        height={38}
        priority
      />
      <h1 className="pb-[20px] px-[10px] text-[50px] font-[family-name:var(--font-geist-sans)] bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
        Tarot Reader
      </h1>
    </div>
  );
}
