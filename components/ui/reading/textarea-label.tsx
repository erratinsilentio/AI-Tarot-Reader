import { Label } from "../label";
import { Textarea } from "../textarea";

export const ReadingArea = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Label htmlFor="reading" className="text-[30px]">
        Tarot Reading
      </Label>
      <Textarea
        className="h-full"
        placeholder="Your reading will be generated here"
        id="reading"
        disabled
      />
    </div>
  );
};
