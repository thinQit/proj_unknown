import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  HeartPulse,
  Shield,
  Pill,
  Baby,
  Activity,
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: "Stethoscope",
    title: "Primary & Preventive Care",
    description:
      "Annual checkups, wellness screenings, and care plans tailored to your health goals.",
  },
  {
    icon: "HeartPulse",
    title: "Cardiology Support",
    description:
      "Heart health assessments, monitoring, and lifestyle coaching for long-term vitality.",
  },
  {
    icon: "Baby",
    title: "Pediatrics",
    description:
      "Gentle, family-centered care for newborns through teens with same-day visits.",
  },
  {
    icon: "Shield",
    title: "Chronic Care Management",
    description:
      "Ongoing support for diabetes, hypertension, and other chronic conditions.",
  },
  {
    icon: "Pill",
    title: "On-site Pharmacy",
    description:
      "Convenient prescriptions and medication counseling right after your visit.",
  },
  {
    icon: "Activity",
    title: "Urgent Care Access",
    description:
      "Extended hours and virtual appointments for unexpected medical needs.",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  HeartPulse,
  Shield,
  Pill,
  Baby,
  Activity,
};

export default function FeaturesGrid({
  badge = "Our Services",
  headline = "Comprehensive care for every stage of life",
  subheadline = "From preventive visits to specialty support, we provide coordinated care designed around you.",
  features = defaultFeatures,
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const IconComponent = iconMap[feature.icon] || Stethoscope;
            return (
              <Card
                key={index}
                className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(IconComponent, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
