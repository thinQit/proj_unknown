"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  value = "",
  options = [],
  onChange = undefined,
  className = "",
}: Partial<SelectProps>) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
        className="w-full appearance-none rounded-lg border border-border bg-white px-3 py-2 text-sm text-[#1B2838] focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1B2838]/60" />
    </div>
  );
}
