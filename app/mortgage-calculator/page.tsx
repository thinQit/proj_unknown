import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import MortgageCalculator from "@/components/MortgageCalculator";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function MortgageCalculatorPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?calculator=hero"
        headline="Mortgage calculator for realistic monthly estimates."
        subheadline="Model down payment, interest rate, taxes, insurance, and HOA—then adjust until it fits your comfort zone."
        primaryCta={{ label: "Browse Listings", href: "/listings" }}
        secondaryCta={{ label: "Talk to an Agent", href: "/contact" }}
        overlayOpacity="bg-black/40"
      />
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <Container>
            <MortgageCalculator
              headline="Estimate your payment"
              subheadline="This estimate is for planning only and does not constitute a loan offer."
              primaryCta={{ label: "Request a Lender Intro", href: "/contact?intent=buying" }}
              secondaryCta={{ label: "Read Pre-Approval Checklist", href: "/blog/pre-approval-checklist" }}
              defaultScenario={{
                homePrice: 895000,
                downPaymentPercent: 20,
                interestRate: 6.25,
                loanTermYears: 30,
                propertyTaxAnnual: 9800,
                homeInsuranceMonthly: 165,
                hoaMonthly: 95,
              }}
              inputs={[
                {
                  key: "homePrice",
                  label: "Home price",
                  type: "currency",
                  min: 100000,
                  max: 5000000,
                  step: 5000,
                },
                {
                  key: "downPaymentPercent",
                  label: "Down payment (%)",
                  type: "percent",
                  min: 0,
                  max: 50,
                  step: 1,
                },
                {
                  key: "interestRate",
                  label: "Interest rate (%)",
                  type: "percent",
                  min: 2,
                  max: 12,
                  step: 0.05,
                },
                {
                  key: "loanTermYears",
                  label: "Loan term (years)",
                  type: "select",
                  options: [15, 20, 30],
                },
                {
                  key: "propertyTaxAnnual",
                  label: "Annual property tax",
                  type: "currency",
                  min: 0,
                  max: 50000,
                  step: 100,
                },
                {
                  key: "homeInsuranceMonthly",
                  label: "Home insurance (monthly)",
                  type: "currency",
                  min: 0,
                  max: 2000,
                  step: 5,
                },
                {
                  key: "hoaMonthly",
                  label: "HOA dues (monthly)",
                  type: "currency",
                  min: 0,
                  max: 2000,
                  step: 5,
                },
              ]}
              outputs={[
                "monthlyPrincipalAndInterest",
                "monthlyTaxes",
                "monthlyInsurance",
                "monthlyHOA",
                "totalMonthlyPayment",
              ]}
              chart={{
                type: "donut",
                segments: ["Principal & Interest", "Taxes", "Insurance", "HOA"],
              }}
              disclaimer="Estimates assume a fixed-rate mortgage and do not include PMI unless you model it via additional monthly costs."
            />
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <CTABanner
              headline="Want a personalized number?"
              description="We can connect you with a trusted local lender for a no-pressure pre-approval conversation."
              ctaLabel="Request Lender Intro"
              ctaHref="/contact?intent=buying"
              secondaryCtaLabel="Browse Homes Under $900k"
              secondaryCtaHref="/listings?maxPrice=900000"
            />
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
