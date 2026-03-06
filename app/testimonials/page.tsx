import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?testimonials=hero"
        headline="Client stories from real closings."
        subheadline="From first tours to final signatures—here’s what it felt like to work with Luxe Harbor."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Meet Agents", href: "/agents" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <TestimonialsGrid
              headline="Reviews"
              subheadline="A few highlights from recent clients."
              testimonials={[
                {
                  quote:
                    "Amelia’s comps packet was the clearest we’ve ever seen. We offered confidently and closed on time with no surprises.",
                  name: "Samantha W.",
                  title: "Bought in Old Town",
                  rating: 5,
                  avatarUrl: "/images/gallery-1.jpg?review=1",
                },
                {
                  quote:
                    "Sofia’s staging guidance was practical and cost-effective. The home photographed beautifully and we had strong traffic all weekend.",
                  name: "Derek & Linh P.",
                  title: "Sold in North Ridge",
                  rating: 5,
                  avatarUrl: "/images/about.jpg?review=2",
                },
                {
                  quote:
                    "Noah explained HOA finances in plain English. We avoided a building with looming assessments and found a better fit.",
                  name: "Claire M.",
                  title: "Bought downtown",
                  rating: 5,
                  avatarUrl: "/images/team.jpg?review=3",
                },
                {
                  quote:
                    "The team handled every detail with professionalism. We felt protected during negotiations and supported through closing.",
                  name: "Anthony G.",
                  title: "Sold in Harborview",
                  rating: 5,
                  avatarUrl: "/images/hero.jpg?review=4",
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
              headline="Let’s make your next move feel simple."
              description="Tell us your timeline and we’ll recommend the best next step—tour, valuation, or strategy call."
              ctaLabel="Contact Luxe Harbor"
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
