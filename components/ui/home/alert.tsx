import { Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function AlertComponent() {
  return (
    <Alert className="bg-transparent flex flex-row items-center justify-center border-0 fixed bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-row justify-center items-center gap-2">
        <Sparkles className="h-5 w-5 text-pink-500 dark:text-pink-400" />
        <AlertDescription className="text-[9px] sm:text-[14px] text-purple-700 dark:text-purple-300 flex items-center">
          Discover the probabilities life has to offer through the ancient
          wisdom of Tarot!
        </AlertDescription>
      </div>
    </Alert>
  );
}
