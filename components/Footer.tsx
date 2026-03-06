import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  officeName?: string;
  address?: string;
  phone?: string;
  email?: string;
  quickLinks?: FooterColumn[];
  legalText?: string;
}

export default function Footer({
  officeName = "Aurelia Estates",
  address = "2750 Skyline Drive, San Francisco, CA 94109",
  phone = "(408) 555-1234",
  email = "hello@aureliaestates.com",
  quickLinks = [
    {
      title: "Explore",
      links: [
        { label: "Featured Listings", href: "#featured-listings" },
        { label: "Neighborhoods", href: "#search" },
        { label: "Our Agents", href: "#agents" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Mortgage Calculator", href: "#mortgage" },
        { label: "Market Insights", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legalText = "© 2024 Aurelia Estates. Equal Housing Opportunity. All rights reserved.",
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-[#FAF9F6]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#1B2838]" style={{ fontFamily: "DM Serif Display" }}>
              {officeName}
            </h3>
            <p className="text-sm text-[#1B2838]/70">
              Boutique real estate guidance for discerning buyers, sellers, and investors across the Bay Area.
            </p>
            <div className="space-y-2 text-sm text-[#1B2838]/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C5A572]" />
                {address}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C5A572]" />
                {phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#C5A572]" />
                {email}
              </div>
            </div>
          </div>

          {quickLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#1B2838]">{column.title}</h4>
              <ul className="space-y-2 text-sm text-[#1B2838]/70">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-[#1B2838]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-[#1B2838]/60">{legalText}</p>
          <div className="flex items-center gap-4 text-[#1B2838]">
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
