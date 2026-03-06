"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange = undefined,
  className = "",
}: Partial<CheckboxProps>) {
  return (
    <button
      type="button"
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      className={cn(
        "flex h-5 w-5 items-center justify-center rounded border border-border",
        checked ? "bg-[#C5A572] text-[#1B2838]" : "bg-white text-transparent",
        className
      )}
      aria-pressed={checked}
    >
      <Check className="h-3 w-3" />
    </button>
  );
}
