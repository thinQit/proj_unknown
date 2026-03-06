"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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

export default function PricingTable({
  headline = "Memberships Built for Momentum",
  subheadline = "Choose a plan that matches your training intensity and schedule.",
  tiers = [
    {
      name: "Starter",
      price: "$59",
      period: "mo",
      description: "Perfect for building consistency.",
      features: ["4 classes per month", "Strength assessment", "Access to locker rooms"],
      ctaLabel: "Join Starter",
      ctaHref: "#trial",
      highlighted: false,
    },
    {
      name: "Unlimited",
      price: "$129",
      period: "mo",
      description: "Train as often as you want.",
      features: ["Unlimited classes", "Performance tracking", "Recovery lounge access"],
      ctaLabel: "Go Unlimited",
      ctaHref: "#trial",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$189",
      period: "mo",
      description: "Next-level coaching and accountability.",
      features: ["Unlimited classes", "Monthly 1:1 coaching", "Nutrition strategy plan"],
      ctaLabel: "Become Elite",
      ctaHref: "#trial",
      highlighted: false,
    },
  ],
}: Partial<PricingTableProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="pricing">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card
                key={i}
                className={"relative flex flex-col " + (tier.highlighted ? "border-primary ring-2 ring-primary scale-105" : "border")}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl uppercase">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.highlighted ? "default" : "outline"} asChild>
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
