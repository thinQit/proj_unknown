import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?services=hero"
        headline="Real estate services built around clarity and results."
        subheadline="From first tour to final signature, we manage the details and protect your leverage."
        primaryCta={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Browse Listings", href: "/listings" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeader
              headline="What we do"
              subheadline="A boutique approach with enterprise-level execution."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Buyer representation",
                  items: [
                    "Tour planning and neighborhood guidance",
                    "Offer strategy, comps packet, and pricing analysis",
                    "Inspection coordination and repair negotiation",
                    "Closing timeline management with lender and escrow",
                  ],
                },
                {
                  title: "Seller representation",
                  items: [
                    "Pre-listing walkthrough and prep plan",
                    "Staging consult and vendor coordination",
                    "Premium photography and video walkthrough",
                    "Pricing strategy and offer review with net sheet",
                  ],
                },
                {
                  title: "Investment support",
                  items: [
                    "Rent comps and demand indicators",
                    "Renovation ROI guidance",
                    "1031 exchange-friendly coordination",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-serif text-xl text-foreground">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Let’s talk timeline and next steps."
              description="A 15-minute call can save weeks of uncertainty."
              ctaLabel="Schedule a Call"
              ctaHref="/contact"
              secondaryCtaLabel="Read the Blog"
              secondaryCtaHref="/blog"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
