"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

const defaultTiers: PricingTier[] = [
  {
    name: "Essential Care",
    price: "$49",
    period: "month",
    description: "Ideal for preventive care and annual wellness visits.",
    features: [
      "Unlimited virtual visits",
      "Annual physical & labs",
      "Care team messaging",
      "Prescription coordination",
    ],
    ctaLabel: "Choose Essential",
    ctaHref: "/appointments",
  },
  {
    name: "Family Plus",
    price: "$89",
    period: "month",
    description: "Expanded access for families with children and teens.",
    features: [
      "Everything in Essential",
      "Pediatrics visits included",
      "Priority scheduling",
      "Wellness coaching",
    ],
    ctaLabel: "Choose Family Plus",
    ctaHref: "/appointments",
    highlighted: true,
  },
  {
    name: "Complete Care",
    price: "$149",
    period: "month",
    description: "Comprehensive support for complex or chronic care.",
    features: [
      "Dedicated care coordinator",
      "Specialist referrals",
      "Chronic condition support",
      "24/7 nurse line",
    ],
    ctaLabel: "Choose Complete",
    ctaHref: "/appointments",
  },
];

export default function PricingTable({
  headline = "Care plans that fit your life",
  subheadline = "Choose a plan that delivers the access and support your family needs.",
  tiers = defaultTiers,
}: Partial<PricingTableProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card
                key={i}
                className={
                  "relative flex flex-col " +
                  (tier.highlighted
                    ? "border-primary ring-2 ring-primary scale-105"
                    : "border")
                }
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-muted-foreground">
                        /{tier.period}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
