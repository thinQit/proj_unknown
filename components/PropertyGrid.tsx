"use client";

import React, { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import { Select } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchFilters from "@/components/SearchFilters";

interface Property {
  imageSrc: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  highlights: string[];
  openHouse?: string;
}

interface PropertyGridProps {
  properties?: Property[];
  className?: string;
}

export default function PropertyGrid({
  properties = [
    {
      imageSrc: "/images/gallery-1.jpg",
      price: "$4,250,000",
      address: "2101 Jackson Street, San Francisco, CA",
      beds: 4,
      baths: 3,
      sqft: "3,950",
      highlights: ["Elevator access", "City skyline views", "Outdoor terrace"],
      openHouse: "Sat 2-5 PM",
    },
    {
      imageSrc: "/images/hero.jpg",
      price: "$3,100,000",
      address: "98 Laurel Avenue, Mill Valley, CA",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      highlights: ["Open floor plan", "Designer finishes", "Steps to hiking trails"],
    },
    {
      imageSrc: "/images/about.jpg",
      price: "$5,750,000",
      address: "1550 Broadway, San Francisco, CA",
      beds: 5,
      baths: 4,
      sqft: "4,600",
      highlights: ["Grand foyer", "Private gym", "Wine cellar"],
      openHouse: "Sun 1-4 PM",
    },
  ],
  className = "",
}: Partial<PropertyGridProps>) {
  const [sort, setSort] = useState("featured");
  const [openFilters, setOpenFilters] = useState(false);

  const sortedProperties = useMemo(() => {
    if (sort === "price-high") {
      return [...properties].sort((a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")));
    }
    if (sort === "price-low") {
      return [...properties].sort((a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, "")));
    }
    return properties;
  }, [properties, sort]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-[#1B2838]/70">
          Showing {sortedProperties.length} luxury listings
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={sort}
            onChange={(value) => setSort(value)}
            options={[
              { label: "Featured", value: "featured" },
              { label: "Price: High to Low", value: "price-high" },
              { label: "Price: Low to High", value: "price-low" },
            ]}
          />
          <div className="md:hidden">
            <Sheet open={openFilters} onOpenChange={setOpenFilters}>
              <SheetTrigger className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-[#1B2838]">
                <SlidersHorizontal className="h-4 w-4 text-[#C5A572]" />
                Filters
              </SheetTrigger>
              <SheetContent side="left">
                <SearchFilters />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProperties.map((property) => (
          <PropertyCard key={property.address} {...property} />
        ))}
      </div>
    </div>
  );
}
