import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet the Coaching Squad",
  subheadline = "Certified trainers who bring the energy, accountability, and precision you need to level up.",
  members = [
    {
      name: "Jordan Blaze",
      title: "Head Strength Coach",
      imageUrl: "/images/team.jpg",
      bio: "Powerlifting specialist focused on form, progress, and grit.",
    },
    {
      name: "Avery Knox",
      title: "HIIT Performance Coach",
      imageUrl: "/images/team.jpg",
      bio: "High-intensity circuits designed to maximize calorie burn.",
    },
    {
      name: "Riley Stone",
      title: "Mobility & Recovery",
      imageUrl: "/images/team.jpg",
      bio: "Mobility flows and recovery sessions to keep you moving.",
    },
    {
      name: "Casey Vega",
      title: "Nutrition Strategist",
      imageUrl: "/images/team.jpg",
      bio: "Fuel plans that align with your training cycle.",
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="trainers">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background shadow-md text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary uppercase">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
