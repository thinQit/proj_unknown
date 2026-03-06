import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPostCardProps {
  imageSrc?: string;
  category?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  readingTime?: string;
}

export default function BlogPostCard({
  imageSrc = "/images/about.jpg",
  category = "Market Insight",
  title = "2024 Luxury Market Outlook for San Francisco",
  excerpt = "Discover how interest rates, inventory, and buyer demand are shaping the city's premier neighborhoods.",
  author = "Isabelle Grant",
  date = "March 12, 2024",
  readingTime = "6 min read",
}: Partial<BlogPostCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <Image src={imageSrc} alt={title} width={800} height={520} className="h-48 w-full object-cover" unoptimized />
      <div className="space-y-4 p-5">
        <Badge className="bg-[#8FA98B]/20 text-[#1B2838]">{category}</Badge>
        <div>
          <h3 className="text-lg font-semibold text-[#1B2838]">{title}</h3>
          <p className="text-sm text-[#1B2838]/70">{excerpt}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#1B2838]/60">
          <span>{author}</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-[#C5A572]" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-[#C5A572]" />
            {readingTime}
          </span>
        </div>
      </div>
    </Card>
  );
}
