import Image from "next/image";
import { Button } from "../button";
import { Input } from "../input";

export const TarotReadingInput = ({ createNewSet, resetCards }) => {
  return (
    <>
      <Input placeholder="Ask a Question..." />
      <Button
        onClick={createNewSet}
        className="h-9 border border-input rounded-md flex justify-center items-center text-sm hover:brightness-150"
      >
        generate ⎆
      </Button>
      <Button variant="outline" className="group" onClick={resetCards}>
        <Image
          src="/reset.svg"
          alt="Reset Button"
          width={20}
          height={20}
          className="invert group-hover:animate-spin"
        />
      </Button>
    </>
  );
};
