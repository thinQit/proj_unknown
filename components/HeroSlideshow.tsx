"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Slide {
  imageSrc: string;
  title: string;
  location: string;
  price: string;
  meta: string[];
}

interface HeroSlideshowProps {
  slides?: Slide[];
  intervalMs?: number;
}

export default function HeroSlideshow({
  slides = [
    {
      imageSrc: "/images/hero.jpg",
      title: "Pacific Heights Modern Estate",
      location: "San Francisco, CA",
      price: "$6.4M",
      meta: ["5 Beds", "4.5 Baths", "5,200 sqft"],
    },
    {
      imageSrc: "/images/gallery-1.jpg",
      title: "Marin Hillside Retreat",
      location: "Mill Valley, CA",
      price: "$4.8M",
      meta: ["4 Beds", "4 Baths", "4,100 sqft"],
    },
  ],
  intervalMs = 6000,
}: Partial<HeroSlideshowProps>) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, idx) => (
        <div
          key={slide.title + idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            idx === active ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.imageSrc}
            alt={slide.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2838]/80 via-[#1B2838]/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col justify-end gap-6 p-8 md:p-12 text-white">
        <div className="flex flex-wrap gap-2">
          {slides[active]?.meta.map((item) => (
            <Badge key={item} className="bg-white/20 text-white backdrop-blur">
              {item}
            </Badge>
          ))}
        </div>
        <div className="max-w-xl space-y-3">
          <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "DM Serif Display" }}>
            {slides[active]?.title}
          </h1>
          <p className="text-sm md:text-base text-white/80">{slides[active]?.location}</p>
          <p className="text-xl font-semibold text-[#C5A572]">{slides[active]?.price}</p>
        </div>
      </div>
    </div>
  );
}
