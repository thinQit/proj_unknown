"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | null>(null);

interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function Sheet({
  open: openProp,
  defaultOpen = false,
  onOpenChange = undefined,
  children = null,
}: Partial<SheetProps>) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = openProp !== undefined ? openProp : internalOpen;

  const setOpen = (value: boolean) => {
    setInternalOpen(value);
    if (onOpenChange) {
      onOpenChange(value);
    }
  };

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function SheetTrigger({ children = null, ...props }: SheetTriggerProps) {
  const ctx = useContext(SheetContext);
  return (
    <button
      type="button"
      onClick={() => ctx && ctx.setOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
  children?: React.ReactNode;
}

export function SheetContent({
  side = "right",
  children = null,
  className = "",
  ...props
}: SheetContentProps) {
  const ctx = useContext(SheetContext);
  if (!ctx?.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => ctx.setOpen(false)}
      />
      <div
        className={cn(
          "relative h-full w-80 bg-white p-6 shadow-xl transition-transform",
          side === "right" ? "ml-auto" : "mr-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

interface SheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function SheetClose({ children = null, ...props }: SheetCloseProps) {
  const ctx = useContext(SheetContext);
  return (
    <button
      type="button"
      onClick={() => ctx && ctx.setOpen(false)}
      {...props}
    >
      {children}
    </button>
  );
}
