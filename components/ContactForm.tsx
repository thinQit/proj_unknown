"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AceternityInput } from "@/components/ui/aceternity-input";
import { AceternityLabel } from "@/components/ui/aceternity-label";
import { Mail, MapPin, Phone, Clock, Stethoscope } from "lucide-react";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const defaultContactInfo: ContactInfo[] = [
  {
    icon: "Phone",
    label: "Call us",
    value: "(800) 555-0199",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "care@harborviewhealth.com",
  },
  {
    icon: "MapPin",
    label: "Visit",
    value: "1420 Harbor Street, Suite 200, Seattle, WA",
  },
  {
    icon: "Clock",
    label: "Hours",
    value: "Mon–Fri 8am–7pm, Sat 9am–2pm",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
};

export default function ContactForm({
  headline = "Connect with our care team",
  subheadline = "Send a message and we’ll respond within one business day.",
  contactInfo = defaultContactInfo,
}: Partial<ContactFormProps>) {
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
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="name">Name</AceternityLabel>
                    <AceternityInput id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="email">Email</AceternityLabel>
                    <AceternityInput
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="subject">Subject</AceternityLabel>
                  <AceternityInput
                    id="subject"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="message">Message</AceternityLabel>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                const IconComponent = iconMap[info.icon] || Stethoscope;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-primary">
                      {React.createElement(IconComponent, { className: "h-6 w-6" })}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
