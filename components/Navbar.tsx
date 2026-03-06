"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone, Home, Building2, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  BookOpen,
  Users,
  Phone,
};

export default function Navbar({
  logoText = "Aurelia Estates",
  links = [
    { label: "Listings", href: "#featured-listings", icon: "Building2" },
    { label: "Search", href: "#search", icon: "Home" },
    { label: "Agents", href: "#agents", icon: "Users" },
    { label: "Blog", href: "#blog", icon: "BookOpen" },
  ],
  ctaLabel = "Schedule a Tour",
  ctaHref = "#contact",
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-[#FAF9F6]/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-[#1B2838]">
          <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: "DM Serif Display" }}>
            {logoText}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const Icon = iconMap[link.icon || ""] || Home;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-[#1B2838]/80 transition hover:text-[#1B2838]"
              >
                <Icon className="h-4 w-4 text-[#C5A572]" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SecondaryButton label="Call Us" iconName="Phone" href="tel:+14085551234" />
          <PrimaryButton label={ctaLabel} href={ctaHref} />
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center rounded-lg border border-border bg-white p-2 text-[#1B2838]">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-xl font-semibold text-[#1B2838]" style={{ fontFamily: "DM Serif Display" }}>
                  {logoText}
                </span>
                <SheetClose className="rounded-full border border-border px-3 py-1 text-sm text-[#1B2838]">
                  Close
                </SheetClose>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {links.map((link) => {
                  const Icon = iconMap[link.icon || ""] || Home;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-base font-medium text-[#1B2838]"
                    >
                      <Icon className="h-4 w-4 text-[#C5A572]" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <PrimaryButton label={ctaLabel} href={ctaHref} />
                <SecondaryButton label="Call Us" iconName="Phone" href="tel:+14085551234" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
