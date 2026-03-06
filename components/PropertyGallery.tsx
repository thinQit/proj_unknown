"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
  images?: string[];
  className?: string;
}

export default function PropertyGallery({
  images = ["/images/gallery-1.jpg", "/images/hero.jpg", "/images/about.jpg"],
  className = "",
}: Partial<PropertyGalleryProps>) {
  const [active, setActive] = useState(images[0] || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className={cn("space-y-4", className)}>
      <button
        onClick={() => setLightboxOpen(true)}
        className="relative block w-full overflow-hidden rounded-2xl"
      >
        <Image src={active} alt="Property gallery" width={1400} height={900} className="w-full object-cover" unoptimized />
      </button>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img) => (
          <button key={img} onClick={() => setActive(img)} className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg">
            <Image src={img} alt="Thumbnail" width={200} height={140} className="h-full w-full object-cover" unoptimized />
            <span
              className={cn(
                "absolute inset-0 border-2 transition",
                active === img ? "border-[#C5A572]" : "border-transparent"
              )}
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 rounded-full bg-white/90 p-2 text-[#1B2838]"
            >
              <X className="h-5 w-5" />
            </button>
            <Image src={active} alt="Full view" width={1600} height={900} className="w-full rounded-2xl object-cover" unoptimized />
          </div>
        </div>
      )}
    </div>
  );
}
