"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Phone } from "lucide-react";

interface SecondaryButtonProps {
  label?: string;
  href?: string;
  iconName?: string;
  onClick?: () => void;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
  Phone,
};

export default function SecondaryButton({
  label = "Learn More",
  href = "",
  iconName = "",
  onClick = undefined,
  className = "",
}: Partial<SecondaryButtonProps>) {
  const Icon = iconMap[iconName || ""] || ArrowRight;

  const content = (
    <Button
      onClick={onClick}
      variant="outline"
      className={cn(
        "rounded-lg border-[#1B2838] px-6 py-3 text-sm font-medium text-[#1B2838] hover:bg-[#1B2838] hover:text-white",
        className
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
