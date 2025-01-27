import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Skeleton className="h-[36px] w-[200px]" />
      <Skeleton className="h-[200px] w-[200px]" />
    </div>
  );
}
