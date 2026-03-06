import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import InfoPanel from "@/components/InfoPanel";
import FAQAccordion from "@/components/FAQAccordion";

export default function PricingPage() {
  return (
    <>
      <HeroSection
        headline="Memberships that make consistency easy"
        subheadline="Choose a plan that fits your routine—drop in when you want, or save with monthly memberships."
        primaryCta={{ label: "Start Intro Week ($29)", href: "/contact#intro" }}
        secondaryCta={{ label: "See Schedule", href: "/schedule" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          finePrint:
            "All prices shown in USD. Memberships renew monthly and can be paused with 7 days’ notice.",
        }}
      />
      <PricingCards
        headline="Plans & passes"
        subheadline="Most members choose 8-Class or Unlimited for the best value."
        primaryCta={{ label: "Contact to Join", href: "/contact" }}
        secondaryCta={{ label: "Ask About Discounts", href: "/contact#billing" }}
        content={{
          tiers: [
            {
              name: "Intro Week",
              price: "$29",
              period: "one-time",
              description: "Try as many classes as you’d like for 7 days.",
              features: [
                "Unlimited classes for 7 days",
                "One free mat rental",
                "Free 10-minute consult (optional)",
              ],
              ctaLabel: "Start Intro Week",
              ctaHref: "/contact#intro",
              highlighted: true,
            },
            {
              name: "Drop-In",
              price: "$24",
              period: "per class",
              description: "Flexible option for occasional visits.",
              features: [
                "Any regular class",
                "Valid for 30 days from purchase",
                "Great for visitors",
              ],
              ctaLabel: "Buy a Drop-In",
              ctaHref: "/contact#passes",
              highlighted: false,
            },
            {
              name: "8-Class Pack",
              price: "$149",
              period: "pack",
              description: "Best for 2x/week routines.",
              features: [
                "8 classes",
                "Valid for 60 days",
                "Shareable with one household member",
              ],
              ctaLabel: "Get 8-Class Pack",
              ctaHref: "/contact#passes",
              highlighted: false,
            },
            {
              name: "Unlimited",
              price: "$169",
              period: "per month",
              description: "For consistent practice and maximum flexibility.",
              features: ["Unlimited classes", "Priority waitlist", "10% off workshops"],
              ctaLabel: "Join Unlimited",
              ctaHref: "/contact#membership",
              highlighted: false,
            },
          ],
          addOns: [
            {
              name: "Mat rental",
              price: "$3",
              details: "High-grip studio mats; sanitized after each use.",
            },
            {
              name: "Towel rental",
              price: "$2",
              details: "Recommended for heated classes.",
            },
            {
              name: "Private session",
              price: "$110",
              details:
                "60-minute 1:1 session (movement assessment + personalized plan).",
            },
          ],
        }}
      />
      <InfoPanel
        headline="Using HSA/FSA or wellness stipends?"
        subheadline="We can provide receipts and documentation to support reimbursement requests."
        primaryCta={{ label: "Request Documentation", href: "/contact#billing" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        content={{
          documents: [
            "Itemized receipts",
            "Attendance summaries (upon request)",
            "Membership verification letters",
          ],
        }}
      />
      <FAQAccordion
        headline="Pricing FAQs"
        subheadline="Clear answers so you can choose confidently."
        items={[
          {
            question: "Can I pause my membership?",
            answer:
              "Yes. Memberships can be paused with 7 days’ notice. We’ll confirm the pause dates by email.",
          },
          {
            question: "Do class packs expire?",
            answer:
              "Yes. The 8-Class Pack is valid for 60 days from purchase to encourage consistent practice.",
          },
          {
            question: "Are workshops included?",
            answer:
              "Workshops are priced separately. Unlimited members receive 10% off most workshops.",
          },
        ]}
      />
    </>
  );
}
