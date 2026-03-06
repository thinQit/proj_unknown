import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlogPostPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?post=hero"
        headline="Pre-Approval Checklist: What to Prepare Before You Tour"
        subheadline="A practical checklist that helps you move quickly when the right home appears—without feeling rushed."
        primaryCta={{ label: "Talk to an Agent", href: "/contact" }}
        secondaryCta={{ label: "Mortgage Calculator", href: "/mortgage-calculator" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeader
              headline="Checklist"
              subheadline="Bring these items to your lender conversation to get a clean, reliable pre-approval."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Income and employment",
                  bullets: [
                    "Last 2 pay stubs (or proof of income if self-employed)",
                    "Last 2 years of W-2s (or 1099s)",
                    "Employer contact info and start date (if recently changed jobs)",
                  ],
                },
                {
                  title: "Assets and down payment",
                  bullets: [
                    "Last 2 months of bank statements (checking/savings)",
                    "Retirement account statements (if applicable)",
                    "Gift funds letter (if family is contributing)",
                  ],
                },
                {
                  title: "Credit and debts",
                  bullets: [
                    "List of monthly debts (auto, student loans, credit cards)",
                    "Any recent credit inquiries explained",
                    "Avoid opening new credit lines during your search",
                  ],
                },
                {
                  title: "Home search parameters",
                  bullets: [
                    "Target neighborhoods and price range",
                    "Condo vs. single-family (HOA dues matter)",
                    "Comfortable monthly payment range (not just max approval)",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-serif text-xl text-foreground">
                    {section.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              A strong pre-approval makes your offer cleaner and can shorten
              negotiation time—especially in competitive neighborhoods.
            </p>
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Want a curated shortlist that matches your pre-approval?"
              description="Tell us your neighborhood and must-haves—we’ll send a focused set of options to tour."
              ctaLabel="Request Shortlist"
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
