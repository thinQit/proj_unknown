import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import BlogPostCard from "@/components/BlogPostCard";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?blog=hero"
        headline="Real estate guidance you can use immediately."
        subheadline="Neighborhood spotlights, buyer and seller playbooks, and market notes from the Luxe Harbor team."
        primaryCta={{ label: "Read Latest Posts", href: "/blog#posts" }}
        secondaryCta={{ label: "Ask a Question", href: "/contact" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section id="posts" className="py-20 md:py-28">
          <Container>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
              {[
                {
                  title:
                    "Pre-Approval Checklist: What to Prepare Before You Tour",
                  slug: "pre-approval-checklist",
                  date: "2026-01-18",
                  readingTime: "6 min",
                  excerpt:
                    "A lender-ready checklist that speeds up your offer timeline—income docs, credit considerations, and how to choose the right loan term.",
                  category: "Financing",
                  author: "Noah Kim",
                },
                {
                  title:
                    "Harborview Buyer Guide: Streets, Schools, and Waterfront Rules",
                  slug: "buyer-guide-harborview",
                  date: "2025-12-02",
                  readingTime: "8 min",
                  excerpt:
                    "A neighborhood-by-neighborhood overview of Harborview, including commute patterns, school zones, and dock rights basics.",
                  category: "Neighborhoods",
                  author: "Amelia Hart",
                },
                {
                  title:
                    "Seller Prep Checklist: The 14-Day Plan That Protects Your Price",
                  slug: "seller-prep-checklist",
                  date: "2025-11-10",
                  readingTime: "7 min",
                  excerpt:
                    "A realistic two-week plan for cleaning, repairs, staging, and photography—plus what not to spend money on.",
                  category: "Selling",
                  author: "Sofia Alvarez",
                },
                {
                  title:
                    "Condo Due Diligence: HOA Docs You Should Actually Read",
                  slug: "condo-hoa-docs-to-read",
                  date: "2025-10-21",
                  readingTime: "9 min",
                  excerpt:
                    "Reserve studies, special assessments, rental caps, and meeting minutes—what they mean and why they matter.",
                  category: "Buying",
                  author: "Noah Kim",
                },
              ].map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Want advice tailored to your situation?"
              description="Send your budget range and neighborhood preferences—we’ll reply with a clear next-step plan."
              ctaLabel="Contact Us"
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
