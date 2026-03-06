"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Phone, Calendar } from "lucide-react";

interface PrimaryButtonProps {
  label?: string;
  href?: string;
  iconName?: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
  Phone,
  Calendar,
};

export default function PrimaryButton({
  label = "Get Started",
  href = "",
  iconName = "",
  loading = false,
  onClick = undefined,
  className = "",
}: Partial<PrimaryButtonProps>) {
  const Icon = iconMap[iconName || ""] || ArrowRight;

  const content = (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-lg bg-[#C5A572] px-6 py-3 text-sm font-medium text-[#1B2838] hover:bg-[#b9975f]",
        className
      )}
      disabled={loading}
    >
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Icon className="mr-2 h-4 w-4" />}
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
