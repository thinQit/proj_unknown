"use client";

import React, { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface SearchFiltersProps {
  neighborhoods?: string[];
  features?: string[];
}

export default function SearchFilters({
  neighborhoods = ["Pacific Heights", "Marina", "Nob Hill", "Mill Valley", "Palo Alto"],
  features = ["Pool", "View", "Guest Suite", "Home Office", "Wine Cellar"],
}: Partial<SearchFiltersProps>) {
  const [price, setPrice] = useState(2500000);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#1B2838]">
          <Filter className="h-5 w-5 text-[#C5A572]" />
          <h3 className="text-base font-semibold">Refine your search</h3>
        </div>
        <Badge className="bg-[#8FA98B]/20 text-[#1B2838]">
          {selectedFeatures.length} Features Selected
        </Badge>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_1fr_1fr]">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#1B2838]/70">Neighborhood</label>
          <Select
            value={neighborhoods[0]}
            options={neighborhoods.map((n) => ({ label: n, value: n }))}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#1B2838]/70">
            Max Price
          </label>
          <input
            type="range"
            min={500000}
            max={8000000}
            step={100000}
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
            className="w-full accent-[#C5A572]"
          />
          <div className="text-sm text-[#1B2838]">${price.toLocaleString()}</div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#1B2838]/70">
              Beds
            </label>
            <div className="flex gap-2">
              {[2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => setBeds(value)}
                  className={cn(
                    "flex-1 rounded-lg border px-3 py-2 text-sm font-medium",
                    beds === value ? "border-[#C5A572] bg-[#C5A572]/10 text-[#1B2838]" : "border-border text-[#1B2838]/70"
                  )}
                >
                  {value}+
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#1B2838]/70">
              Baths
            </label>
            <div className="flex gap-2">
              {[2, 3, 4].map((value) => (
                <button
                  key={value}
                  onClick={() => setBaths(value)}
                  className={cn(
                    "flex-1 rounded-lg border px-3 py-2 text-sm font-medium",
                    baths === value ? "border-[#C5A572] bg-[#C5A572]/10 text-[#1B2838]" : "border-border text-[#1B2838]/70"
                  )}
                >
                  {value}+
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center gap-2 text-[#1B2838]">
          <SlidersHorizontal className="h-4 w-4 text-[#C5A572]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[#1B2838]/70">Features</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <label key={feature} className="flex items-center gap-2 text-sm text-[#1B2838]/80">
              <Checkbox checked={selectedFeatures.includes(feature)} onCheckedChange={() => toggleFeature(feature)} />
              {feature}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
