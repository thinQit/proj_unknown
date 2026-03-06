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

const defaultMembers: TeamMember[] = [
  {
    name: "Dr. Elena Park",
    title: "Family Medicine",
    imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
    bio: "15+ years in primary care with a focus on preventive health and women’s wellness.",
  },
  {
    name: "Dr. Miguel Santos",
    title: "Cardiology",
    imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
    bio: "Specialist in heart health, diagnostics, and lifestyle-based care plans.",
  },
  {
    name: "Dr. Priya Desai",
    title: "Pediatrics",
    imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
    bio: "Compassionate pediatric care from newborn visits to adolescent health.",
  },
  {
    name: "Jordan Lee, NP",
    title: "Nurse Practitioner",
    imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
    bio: "Telehealth lead focused on chronic care management and patient education.",
  },
];

function isExternal(url?: string) {
  return typeof url === "string" && url.startsWith("http");
}

export default function TeamGrid({
  headline = "Meet our care team",
  subheadline = "Experienced clinicians dedicated to personalized, whole-person healthcare.",
  members = defaultMembers,
}: Partial<TeamGridProps>) {
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card
                key={i}
                className="overflow-hidden border-0 bg-background shadow-md text-center"
              >
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      unoptimized={isExternal(member.imageUrl)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
