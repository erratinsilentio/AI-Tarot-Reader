import { Label } from "../label";
import { Textarea } from "../textarea";
import { CardsMeaning } from "./drawer";

export const ReadingArea = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <CardsMeaning />
      <Textarea
        className="h-full text-[20px] text-center"
        placeholder="Your reading will be generated here"
        id="reading"
        disabled
      ></Textarea>
    </div>
  );
};
