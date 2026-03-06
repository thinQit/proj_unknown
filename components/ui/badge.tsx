import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default" && "border-transparent bg-[#1B2838] text-white",
        variant === "secondary" && "border-transparent bg-[#FAF9F6] text-[#1B2838]",
        variant === "outline" && "border-border text-[#1B2838]",
        className
      )}
      {...props}
    />
  );
}
