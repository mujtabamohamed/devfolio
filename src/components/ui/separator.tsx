import { cn } from "@/lib/utils";

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative left-1/2 -ml-[50vw] w-screen h-px bg-border",
        className,
      )}
      aria-hidden
    />
  );
}

export { Separator };
