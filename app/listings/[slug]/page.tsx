import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import PropertyGallery from "@/components/PropertyGallery";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function ListingDetailPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?listing=detail"
        headline="128 Seabright Ave, Harborview"
        subheadline="A modern waterfront retreat with dock rights, a sunlit great room, and a chef’s kitchen designed for entertaining."
        primaryCta={{ label: "Request a Tour", href: "/contact?intent=tour" }}
        secondaryCta={{
          label: "Mortgage Estimate",
          href: "/mortgage-calculator?price=1450000",
        }}
        overlayOpacity="bg-black/45"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <PropertyGallery
              images={[
                {
                  url: "/images/gallery-1.jpg?detail=1",
                  alt: "Front exterior with modern facade and warm lighting",
                },
                {
                  url: "/images/about.jpg?detail=2",
                  alt: "Open living room with fireplace and water views",
                },
                {
                  url: "/images/team.jpg?detail=3",
                  alt: "Chef’s kitchen with quartz island and brass fixtures",
                },
                {
                  url: "/images/hero.jpg?detail=4",
                  alt: "Primary bedroom with balcony overlooking the water",
                },
              ]}
            />
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <SectionHeader
              headline="Highlights"
              subheadline="Thoughtful upgrades and a layout that lives beautifully year-round."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">
                  Property features
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>Dock rights and easy water access for paddleboards and kayaks</li>
                  <li>Quartz waterfall island, gas range, and walk-in pantry</li>
                  <li>Primary suite with balcony, spa bath, and custom closet</li>
                  <li>Dedicated office with built-ins and privacy doors</li>
                  <li>Covered patio with heater line and outdoor kitchen rough-in</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">
                  Neighborhood notes
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li>7-minute walk to Harborview Marina</li>
                  <li>Top-rated Seabright Elementary (0.8 mi)</li>
                  <li>Weekend farmers market at Goldfinch Square</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <CTABanner
              headline="Ready to see it in person?"
              description="We’ll coordinate a private tour and provide a comps packet so you can make a confident decision."
              ctaLabel="Schedule a Private Tour"
              ctaHref="/contact?intent=tour"
              secondaryCtaLabel="Browse More Homes"
              secondaryCtaHref="/listings"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
