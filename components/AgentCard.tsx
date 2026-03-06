import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AgentCardProps {
  name?: string;
  title?: string;
  imageSrc?: string;
  specialties?: string[];
  neighborhoods?: string[];
  email?: string;
  phone?: string;
}

export default function AgentCard({
  name = "Sofia Ramirez",
  title = "Luxury Property Advisor",
  imageSrc = "/images/team.jpg",
  specialties = ["Luxury Estates", "Private Sales", "Relocation"],
  neighborhoods = ["Pacific Heights", "Marina", "Presidio"],
  email = "sofia@aureliaestates.com",
  phone = "(415) 555-9876",
}: Partial<AgentCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-full border border-border">
          <Image src={imageSrc} alt={name} width={160} height={160} className="h-full w-full object-cover" unoptimized />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1B2838]">{name}</h3>
          <p className="text-sm text-[#1B2838]/70">{title}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <Badge key={specialty} className="bg-[#8FA98B]/15 text-[#1B2838]">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-[#1B2838]/70">
          <MapPin className="h-4 w-4 text-[#C5A572]" />
          {neighborhoods.join(" · ")}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#1B2838]/70">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#C5A572]" />
            {phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#C5A572]" />
            {email}
          </span>
        </div>
      </div>
    </Card>
  );
}
