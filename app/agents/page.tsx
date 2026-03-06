import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import AgentCard from "@/components/AgentCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentsPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/team.jpg?agents=hero"
        headline="Local experts with a luxury standard of care."
        subheadline="Whether you’re buying your first condo or selling a waterfront home, our agents bring strategy, discretion, and speed."
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Browse Listings", href: "/listings" }}
        overlayOpacity="bg-black/30"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Amelia Hart",
                  title: "Principal Broker",
                  phone: "(206) 555-0147",
                  email: "amelia@luxeharborrealty.com",
                  specialties: ["Luxury waterfront", "Relocation", "Negotiation"],
                  bio: "Amelia leads Luxe Harbor with a calm, analytical approach and a deep network of local vendors—from inspectors to designers.",
                  headshotUrl: "/images/gallery-1.jpg?agent=page1",
                  headshotAlt: "Portrait of Amelia Hart",
                  href: "/agents/amelia-hart",
                },
                {
                  name: "Noah Kim",
                  title: "Senior Agent",
                  phone: "(206) 555-0192",
                  email: "noah@luxeharborrealty.com",
                  specialties: ["Condos", "First-time buyers", "Downtown"],
                  bio: "Noah specializes in fast-moving markets and helps buyers understand HOA docs and building financials with clarity.",
                  headshotUrl: "/images/about.jpg?agent=page2",
                  headshotAlt: "Portrait of Noah Kim",
                  href: "/agents/noah-kim",
                },
                {
                  name: "Sofia Alvarez",
                  title: "Listing Specialist",
                  phone: "(206) 555-0179",
                  email: "sofia@luxeharborrealty.com",
                  specialties: ["Seller strategy", "Staging", "Marketing"],
                  bio: "Sofia’s listings are known for editorial visuals and disciplined pricing—designed to attract qualified buyers quickly.",
                  headshotUrl: "/images/hero.jpg?agent=page3",
                  headshotAlt: "Portrait of Sofia Alvarez",
                  href: "/agents/sofia-alvarez",
                },
              ].map((agent) => (
                <AgentCard key={agent.email} {...agent} />
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Not sure where to start?"
              description="Tell us your timeline and ideal neighborhood—we’ll match you with the right specialist."
              ctaLabel="Get Matched"
              ctaHref="/contact?intent=buying"
              secondaryCtaLabel="Read the Blog"
              secondaryCtaHref="/blog"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
