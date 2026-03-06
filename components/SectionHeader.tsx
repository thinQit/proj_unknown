import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  iconName?: string;
}

interface SectionHeaderProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  ctas?: CTA[];
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
  Phone,
};

export default function SectionHeader({
  overline = "Curated Properties",
  title = "Distinctive homes in the Bay Area",
  subtitle = "Discover luxury residences, private retreats, and modern estates selected by our advisors.",
  align = "left",
  ctas = [
    { label: "View Listings", href: "#featured-listings", variant: "primary", iconName: "ArrowRight" },
    { label: "Speak to an Advisor", href: "#contact", variant: "secondary", iconName: "Phone" },
  ],
  className = "",
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "text-center items-center" : "text-left", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A572]">{overline}</span>
      <h2 className="text-3xl md:text-4xl text-[#1B2838]" style={{ fontFamily: "DM Serif Display" }}>
        {title}
      </h2>
      <p className="max-w-2xl text-sm md:text-base text-[#1B2838]/70">{subtitle}</p>
      <div className={cn("flex flex-col gap-3 sm:flex-row", align === "center" ? "justify-center" : "justify-start")}>
        {ctas.map((cta) =>
          cta.variant === "secondary" ? (
            <SecondaryButton
              key={cta.label}
              label={cta.label}
              href={cta.href}
              iconName={cta.iconName}
            />
          ) : (
            <PrimaryButton
              key={cta.label}
              label={cta.label}
              href={cta.href}
              iconName={cta.iconName}
            />
          )
        )}
      </div>
    </div>
  );
}
