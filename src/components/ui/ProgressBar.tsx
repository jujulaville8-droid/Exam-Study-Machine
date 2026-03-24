import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  max = 100,
  className,
  color = "primary",
}: {
  value: number;
  max?: number;
  className?: string;
  color?: "primary" | "success" | "warning" | "error";
}) {
  const percentage = Math.min(100, Math.round((value / max) * 100));
  const colors = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  };

  return (
    <div
      className={cn(
        "w-full h-1.5 rounded-full bg-border/50 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-1000 ease-out",
          colors[color]
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
