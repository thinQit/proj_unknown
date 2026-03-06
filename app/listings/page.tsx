import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import PropertyGrid from "@/components/PropertyGrid";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function ListingsPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?listings=hero"
        headline="Property listings with the details that matter."
        subheadline="Browse by neighborhood, compare features, and request a tour—no login required."
        primaryCta={{ label: "View Featured", href: "/#featured-listings" }}
        secondaryCta={{ label: "Contact an Agent", href: "/contact" }}
        overlayOpacity="bg-black/40"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <PropertyGrid
              headline="All listings"
              subheadline="Filter and sort to find the right fit."
              primaryCta={{ label: "Schedule a Tour", href: "/contact?intent=tour" }}
              secondaryCta={{
                label: "Mortgage Calculator",
                href: "/mortgage-calculator",
              }}
              sortOptions={[
                "Newest",
                "Price (Low to High)",
                "Price (High to Low)",
                "Square Feet",
                "Beds",
              ]}
              filters={[
                "Neighborhood",
                "Price",
                "Beds",
                "Baths",
                "Type",
                "Features",
              ]}
              listings={[
                {
                  id: "LH-1042",
                  address: "128 Seabright Ave, Harborview",
                  price: 1450000,
                  beds: 4,
                  baths: 3.5,
                  sqft: 3120,
                  type: "Single Family",
                  status: "For Sale",
                  imageUrl: "/images/gallery-1.jpg?grid=1",
                  imageAlt: "Waterfront home exterior with dock access",
                  href: "/listings/128-seabright-ave",
                },
                {
                  id: "LH-0987",
                  address: "44 Juniper Row, North Ridge",
                  price: 895000,
                  beds: 3,
                  baths: 2.5,
                  sqft: 2140,
                  type: "Townhome",
                  status: "For Sale",
                  imageUrl: "/images/about.jpg?grid=2",
                  imageAlt: "End-unit townhome with stone accents",
                  href: "/listings/44-juniper-row",
                },
                {
                  id: "LH-1120",
                  address: "900 Skyline Blvd #18C, Downtown",
                  price: 675000,
                  beds: 2,
                  baths: 2,
                  sqft: 1180,
                  type: "Condo",
                  status: "For Sale",
                  imageUrl: "/images/team.jpg?grid=3",
                  imageAlt: "Condo interior with skyline view",
                  href: "/listings/900-skyline-18c",
                },
                {
                  id: "LH-0903",
                  address: "17 Alder Court, Cedar Park",
                  price: 525000,
                  beds: 3,
                  baths: 2,
                  sqft: 1765,
                  type: "Single Family",
                  status: "For Sale",
                  imageUrl: "/images/hero.jpg?grid=4",
                  imageAlt: "Craftsman home with porch and trees",
                  href: "/listings/17-alder-court",
                },
                {
                  id: "LH-1208",
                  address: "6 Mariner’s Way, Harborview",
                  price: 1895000,
                  beds: 5,
                  baths: 4,
                  sqft: 3820,
                  type: "Single Family",
                  status: "For Sale",
                  imageUrl: "/images/gallery-1.jpg?grid=5",
                  imageAlt: "Luxury home with expansive terrace and water views",
                  href: "/listings/6-mariners-way",
                },
                {
                  id: "LH-0771",
                  address: "210 Orchard Ln, North Ridge",
                  price: 740000,
                  beds: 3,
                  baths: 2,
                  sqft: 1985,
                  type: "Single Family",
                  status: "For Sale",
                  imageUrl: "/images/about.jpg?grid=6",
                  imageAlt: "Suburban home with bright kitchen and backyard",
                  href: "/listings/210-orchard-ln",
                },
              ]}
            />
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Want listings before they hit the market?"
              description="Tell us your criteria and we’ll send a curated shortlist as soon as matches appear."
              ctaLabel="Request a Shortlist"
              ctaHref="/contact?intent=buying"
              secondaryCtaLabel="Meet Agents"
              secondaryCtaHref="/agents"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
