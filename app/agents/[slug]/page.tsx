import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import SectionHeader from "@/components/SectionHeader";
import PropertyCard from "@/components/PropertyCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function AgentProfilePage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/team.jpg?agent=profile"
        headline="Amelia Hart"
        subheadline="Principal Broker specializing in Harborview waterfront and Old Town historic homes."
        primaryCta={{ label: "Email Amelia", href: "mailto:amelia@luxeharborrealty.com" }}
        secondaryCta={{ label: "Call (206) 555-0147", href: "tel:+12065550147" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeader
              headline="How Amelia works"
              subheadline="A discreet, data-driven approach that keeps decisions clear and timelines calm."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Client focus</h3>
                <p className="mt-3 text-muted-foreground">
                  Amelia has represented buyers and sellers across Harborview for over a decade,
                  with a focus on waterfront properties and architecturally significant homes.
                </p>
                <p className="mt-3 text-muted-foreground">
                  Clients appreciate her straightforward comps, strong vendor network, and negotiation
                  style that protects value without creating unnecessary friction.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">Services</h3>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>Offer strategy and escalation planning</li>
                  <li>Inspection and repair negotiation</li>
                  <li>Seller prep plans and staging coordination</li>
                  <li>Closing timeline management</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <SectionHeader
              headline="Featured listings"
              subheadline="A selection of homes Amelia is currently showcasing."
            />
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {[
                {
                  id: "LH-1042",
                  address: "128 Seabright Ave, Harborview",
                  price: 1450000,
                  beds: 4,
                  baths: 3.5,
                  sqft: 3120,
                  type: "Single Family",
                  imageUrl: "/images/gallery-1.jpg?agent=listing1",
                  imageAlt: "Waterfront home exterior",
                  href: "/listings/128-seabright-ave",
                },
                {
                  id: "LH-1208",
                  address: "6 Mariner’s Way, Harborview",
                  price: 1895000,
                  beds: 5,
                  baths: 4,
                  sqft: 3820,
                  type: "Single Family",
                  imageUrl: "/images/about.jpg?agent=listing2",
                  imageAlt: "Luxury home with terrace and water views",
                  href: "/listings/6-mariners-way",
                },
              ].map((listing) => (
                <PropertyCard key={listing.id} {...listing} />
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <CTABanner
              headline="Let’s build your plan."
              description="Share your budget range and must-haves—Amelia will reply with next steps and a curated shortlist."
              ctaLabel="Send a Message"
              ctaHref="/contact"
              secondaryCtaLabel="Mortgage Calculator"
              secondaryCtaHref="/mortgage-calculator"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
