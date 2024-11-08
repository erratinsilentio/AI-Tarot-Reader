import Image from "next/image";
import { FlexBox } from "../multipurpose/flex";
import { PinkGradientText } from "../multipurpose/pink-gradient";
import { RedGradientText } from "../multipurpose/red-gradient";
import Link from "next/link";

export const LearnPageHeader = () => {
  return (
    <FlexBox
      direction="col"
      items="center"
      justify="center"
      className="sm:flex-row sm:items-end pb-[20px]"
    >
      <Link href={"/"}>
        <Image
          src="/Sun.png"
          alt="Tarot Reader logo"
          width={150}
          height={38}
          priority
          className="sm:mr-4"
        />
      </Link>
      <FlexBox direction="col">
        <PinkGradientText className="pb-[5px] sm:pb-[5px] px-[10px] pt-4 sm:pt-0 text-center sm:text-left text-[44px] sm:text-[40px]">
          Tarot Reader
        </PinkGradientText>
        <RedGradientText className="pb-[24px] px-[10px] text-[25px]">
          Discover The Meaning of Each Card
        </RedGradientText>
      </FlexBox>
    </FlexBox>
  );
};
