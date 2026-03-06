import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import HeroSlideshow from "@/components/HeroSlideshow";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import AgentCard from "@/components/AgentCard";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  const featuredListings = [
    {
      id: "LH-1042",
      status: "For Sale",
      address: "128 Seabright Ave, Harborview",
      price: 1450000,
      beds: 4,
      baths: 3.5,
      sqft: 3120,
      type: "Single Family",
      highlights: [
        "Private dock rights",
        "Chef’s kitchen with quartz island",
        "Primary suite with balcony",
      ],
      openHouse: "Sat 1–3 PM",
      imageUrl: "/images/gallery-1.jpg?listing=1",
      imageAlt: "Waterfront exterior with modern lines and warm interior glow",
      href: "/listings/128-seabright-ave",
    },
    {
      id: "LH-0987",
      status: "For Sale",
      address: "44 Juniper Row, North Ridge",
      price: 895000,
      beds: 3,
      baths: 2.5,
      sqft: 2140,
      type: "Townhome",
      highlights: [
        "End-unit with natural light",
        "Two-car garage",
        "Walk to Ridge Market",
      ],
      openHouse: "Sun 12–2 PM",
      imageUrl: "/images/about.jpg?listing=2",
      imageAlt: "Townhome facade with landscaped walkway and stone accents",
      href: "/listings/44-juniper-row",
    },
    {
      id: "LH-1120",
      status: "For Sale",
      address: "900 Skyline Blvd #18C, Downtown",
      price: 675000,
      beds: 2,
      baths: 2,
      sqft: 1180,
      type: "Condo",
      highlights: [
        "Corner unit skyline views",
        "24/7 concierge",
        "Gym + rooftop lounge",
      ],
      openHouse: "By appointment",
      imageUrl: "/images/team.jpg?listing=3",
      imageAlt: "High-rise condo living room with skyline view and open kitchen",
      href: "/listings/900-skyline-18c",
    },
    {
      id: "LH-0903",
      status: "For Sale",
      address: "17 Alder Court, Cedar Park",
      price: 525000,
      beds: 3,
      baths: 2,
      sqft: 1765,
      type: "Single Family",
      highlights: [
        "Renovated 2022",
        "Large fenced yard",
        "Dedicated home office",
      ],
      openHouse: "Sat 11 AM–1 PM",
      imageUrl: "/images/hero.jpg?listing=4",
      imageAlt: "Cozy craftsman home with front porch and mature trees",
      href: "/listings/17-alder-court",
    },
  ];

  return (
    <main className="flex flex-col">
      <HeroSlideshow
        headline="Find your next address in the city’s most coveted neighborhoods."
        subheadline="Curated listings, local expertise, and a white-glove buying experience from first tour to closing. Serving Harborview, North Ridge, and Old Town."
        primaryCta={{ label: "Browse Listings", href: "/listings" }}
        secondaryCta={{ label: "Meet Our Agents", href: "/agents" }}
        slides={[
          {
            imageUrl: "/images/hero.jpg?slide=1",
            imageAlt:
              "Modern waterfront home with floor-to-ceiling windows at sunset",
            tag: "Waterfront",
            headline: "Harborview Modern",
            details: "4 bed • 3.5 bath • 3,120 sq ft",
          },
          {
            imageUrl: "/images/gallery-1.jpg?slide=2",
            imageAlt:
              "Classic brick townhome with manicured entry and warm lighting",
            tag: "Old Town",
            headline: "Brick Townhome",
            details: "3 bed • 2.5 bath • 2,040 sq ft",
          },
          {
            imageUrl: "/images/about.jpg?slide=3",
            imageAlt:
              "Contemporary condo interior with skyline view and open kitchen",
            tag: "Downtown",
            headline: "Skyline Condo",
            details: "2 bed • 2 bath • 1,180 sq ft",
          },
        ]}
        trustBadges={[
          "Top 1% Local Brokerage (2025)",
          "4.9★ Average Client Rating",
          "Same-day Tour Scheduling",
        ]}
      />
      <section className="py-12">
        <Container>
          <StatsCounter
            stats={[
              { label: "Avg. days on market", value: "18" },
              { label: "Homes sold in 2024", value: "312" },
              { label: "Client referrals", value: "67%" },
            ]}
          />
        </Container>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <SectionHeader
              headline="Search homes the way you actually shop."
              subheadline="Filter by neighborhood, price, beds, and key features—then save your favorites to compare."
            />
            <SearchFilters
              filters={[
                {
                  label: "Neighborhood",
                  type: "select",
                  options: [
                    "Harborview",
                    "North Ridge",
                    "Old Town",
                    "Cedar Park",
                    "Downtown",
                  ],
                },
                {
                  label: "Price",
                  type: "range",
                  min: 250000,
                  max: 2500000,
                  step: 25000,
                  defaultMin: 450000,
                  defaultMax: 1250000,
                },
                {
                  label: "Beds",
                  type: "segmented",
                  options: ["1+", "2+", "3+", "4+", "5+"],
                  default: "3+",
                },
                {
                  label: "Baths",
                  type: "segmented",
                  options: ["1+", "2+", "3+"],
                  default: "2+",
                },
                {
                  label: "Property Type",
                  type: "select",
                  options: ["Single Family", "Townhome", "Condo", "Multi-Family"],
                },
                {
                  label: "Features",
                  type: "checkboxes",
                  options: [
                    "Waterfront",
                    "Garage",
                    "Home Office",
                    "New Construction",
                    "Pool",
                    "Walkable",
                  ],
                },
              ]}
              primaryCta={{ label: "Open Advanced Search", href: "/listings" }}
              secondaryCta={{ label: "Talk to an Agent", href: "/contact" }}
              searchHint="Tip: Start with neighborhood + budget, then refine by features like office space or waterfront."
            />
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeader
              headline="Featured listings handpicked this week."
              subheadline="A mix of signature homes and smart buys—updated every Friday."
            />
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {featuredListings.map((listing) => (
                <PropertyCard key={listing.id} {...listing} />
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <SectionHeader
              headline="A full-service team for buyers, sellers, and investors."
              subheadline="Strategy, staging, negotiation, and closing coordination—handled with calm precision."
            />
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Buy with confidence",
                  description:
                    "Neighborhood-by-neighborhood guidance, tour planning, offer strategy, and inspection support.",
                  bullets: [
                    "Tour scheduling within 24 hours",
                    "Offer comps + pricing analysis",
                    "Inspection negotiation playbook",
                  ],
                },
                {
                  title: "Sell for top value",
                  description:
                    "Premium photography, staging consults, and targeted marketing to qualified buyers.",
                  bullets: [
                    "Staging + prep checklist",
                    "Pro photo + video walkthrough",
                    "Weekly performance reporting",
                  ],
                },
                {
                  title: "Invest smarter",
                  description:
                    "Cap-rate snapshots, rent comps, and long-term neighborhood trend insights.",
                  bullets: [
                    "Rental demand indicators",
                    "Renovation ROI guidance",
                    "1031 exchange-friendly coordination",
                  ],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-serif text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeader
              headline="Meet the agents clients recommend to friends."
              subheadline="Local specialists with a reputation for responsiveness and sharp negotiation."
            />
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Amelia Hart",
                  title: "Principal Broker",
                  phone: "(206) 555-0147",
                  email: "amelia@luxeharborrealty.com",
                  specialties: ["Luxury waterfront", "Relocation", "Negotiation"],
                  neighborhoods: ["Harborview", "Old Town"],
                  bio: "Amelia is known for calm, data-backed guidance and a discreet, high-touch client experience. She’s represented over $180M in residential sales.",
                  headshotUrl: "/images/team.jpg?agent=1",
                  headshotAlt:
                    "Portrait of Amelia Hart in navy blazer with warm neutral background",
                  href: "/agents/amelia-hart",
                },
                {
                  name: "Noah Kim",
                  title: "Senior Agent",
                  phone: "(206) 555-0192",
                  email: "noah@luxeharborrealty.com",
                  specialties: ["First-time buyers", "Condos", "Downtown"],
                  neighborhoods: ["Downtown", "North Ridge"],
                  bio: "Noah brings a modern approach to tours and comps, helping buyers move quickly without overpaying.",
                  headshotUrl: "/images/about.jpg?agent=2",
                  headshotAlt:
                    "Portrait of Noah Kim smiling in a modern office setting",
                  href: "/agents/noah-kim",
                },
                {
                  name: "Sofia Alvarez",
                  title: "Listing Specialist",
                  phone: "(206) 555-0179",
                  email: "sofia@luxeharborrealty.com",
                  specialties: [
                    "Staging strategy",
                    "Marketing",
                    "Seller representation",
                  ],
                  neighborhoods: ["Cedar Park", "Old Town"],
                  bio: "Sofia’s listings stand out with editorial photography and precise pricing strategy—designed to attract the right buyers fast.",
                  headshotUrl: "/images/gallery-1.jpg?agent=3",
                  headshotAlt:
                    "Portrait of Sofia Alvarez with soft natural light and neutral tones",
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
            <TestimonialsGrid
              headline="Trusted for the moments that matter."
              subheadline="Real words from buyers and sellers we’ve guided through competitive markets."
              testimonials={[
                {
                  quote:
                    "We toured five homes in one afternoon and had a clear offer strategy by dinner. Amelia negotiated repairs and credits that saved us thousands.",
                  name: "Jordan & Priya S.",
                  title: "Bought in Harborview",
                  rating: 5,
                  avatarUrl: "/images/team.jpg?testimonial=1",
                },
                {
                  quote:
                    "Sofia’s prep plan was spot-on. The photography was stunning and we received two strong offers in 48 hours.",
                  name: "Megan R.",
                  title: "Sold in Cedar Park",
                  rating: 5,
                  avatarUrl: "/images/about.jpg?testimonial=2",
                },
                {
                  quote:
                    "Noah made the condo process simple—HOA docs, lender coordination, everything. We felt informed at every step.",
                  name: "Ethan L.",
                  title: "Bought downtown",
                  rating: 5,
                  avatarUrl: "/images/gallery-1.jpg?testimonial=3",
                },
              ]}
            />
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <CTABanner
              headline="Estimate your monthly payment in under a minute."
              description="Use our mortgage calculator to explore scenarios—down payment, interest rate, taxes, and HOA—before you tour."
              ctaLabel="Open Mortgage Calculator"
              ctaHref="/mortgage-calculator"
              secondaryCtaLabel="Get Pre-Approval Tips"
              secondaryCtaHref="/blog/pre-approval-checklist"
            />
          </Container>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <ContactForm
              headline="Tell us what you’re looking for—we’ll do the legwork."
              subheadline="Book a call, request a tour, or ask for a pricing opinion. We respond within one business day."
              contactInfo={[
                {
                  icon: "MapPin",
                  label: "Office",
                  value:
                    "214 Goldfinch St, Suite 300, Harborview, WA 98109",
                },
                {
                  icon: "Phone",
                  label: "Phone",
                  value: "(206) 555-0113",
                },
                {
                  icon: "Mail",
                  label: "Email",
                  value: "hello@luxeharborrealty.com",
                },
              ]}
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
