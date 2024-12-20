import Image from "next/image";
import { FlexBox } from "../multipurpose/flex";

export default function LogoHeader() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end">
      <FlexBox
        direction="col"
        items="center"
        justify="center"
        className="sm:flex-row sm:items-end"
      >
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
      </FlexBox>
    </div>
  );
}
