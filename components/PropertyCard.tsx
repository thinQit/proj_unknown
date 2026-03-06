import React from "react";
import Image from "next/image";
import { BedDouble, Bath, Ruler, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  imageSrc?: string;
  price?: string;
  address?: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  highlights?: string[];
  openHouse?: string;
  className?: string;
}

export default function PropertyCard({
  imageSrc = "/images/gallery-1.jpg",
  price = "$3,950,000",
  address = "1820 Presidio Avenue, San Francisco, CA",
  beds = 4,
  baths = 3,
  sqft = "3,600",
  highlights = ["Panoramic city views", "Chef's kitchen", "Private garden patio"],
  openHouse = "Sun 1-4 PM",
  className = "",
}: Partial<PropertyCardProps>) {
  return (
    <Card className={cn("overflow-hidden rounded-xl border border-border bg-white shadow-sm", className)}>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={address}
          width={800}
          height={600}
          className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          unoptimized
        />
        {openHouse && (
          <Badge className="absolute left-4 top-4 bg-[#C5A572] text-[#1B2838]">
            <Calendar className="mr-1 h-3 w-3" />
            {openHouse}
          </Badge>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-lg font-semibold text-[#1B2838]">{price}</p>
          <p className="text-sm text-[#1B2838]/70">{address}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#1B2838]/70">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4 text-[#C5A572]" />
            {beds} Beds
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-[#C5A572]" />
            {baths} Baths
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="h-4 w-4 text-[#C5A572]" />
            {sqft} sqft
          </div>
        </div>
        <ul className="space-y-1 text-sm text-[#1B2838]/70">
          {highlights.map((highlight) => (
            <li key={highlight}>• {highlight}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
