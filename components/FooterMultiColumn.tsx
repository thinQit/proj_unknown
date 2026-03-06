import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = "PulseForge Fitness",
  description = "High-intensity training, expert coaching, and a community built to push you further every session.",
  columns = [
    {
      title: "Explore",
      links: [
        { label: "Class Schedule", href: "#classes" },
        { label: "Trainer Team", href: "#trainers" },
        { label: "Memberships", href: "#pricing" },
        { label: "Transformations", href: "#transformations" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Policies", href: "/policies" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Visit",
      links: [
        { label: "Downtown Studio", href: "/locations/downtown" },
        { label: "Northside Studio", href: "/locations/northside" },
        { label: "Parking Info", href: "/parking" },
        { label: "Hours", href: "/hours" },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wider">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-colors hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright ||
            ("\u00a9 " + new Date().getFullYear() + " " + brand + ". All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
