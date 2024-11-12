import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function RoundedSkeleton() {
  return (
    <div className="flex justify-center place-items-center">
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
}
