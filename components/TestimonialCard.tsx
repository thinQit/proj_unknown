import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote?: string;
  name?: string;
  context?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote = "Aurelia Estates delivered a seamless purchase with market insight and impeccable attention to detail.",
  name = "James & Priya Sullivan",
  context = "Closed on a 4-bedroom estate in Pacific Heights",
  rating = 5,
}: Partial<TestimonialCardProps>) {
  return (
    <Card className="rounded-xl border border-border bg-[#FAF9F6] p-6">
      <div className="flex items-center gap-1 text-[#C5A572]">
        {Array.from({ length: rating }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-[#C5A572]" />
        ))}
      </div>
      <p className="mt-4 text-sm text-[#1B2838]/80">“{quote}”</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-[#1B2838]">{name}</p>
        <p className="text-xs text-[#1B2838]/60">{context}</p>
      </div>
    </Card>
  );
}
