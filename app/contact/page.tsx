import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Contact CalmWave"
        subheadline="Reach out for class recommendations, membership questions, accessibility needs, or private sessions."
        primaryCta={{
          label: "Email hello@calmwaveyoga.com",
          href: "mailto:hello@calmwaveyoga.com",
        }}
        secondaryCta={{ label: "Call (206) 555-0148", href: "tel:+12065550148" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          responseTime: "We respond within 1 business day.",
        }}
      />
      <ContactSection
        headline="Send a message"
        subheadline="Tell us what you’re looking for and we’ll help you choose the right next step."
        primaryCta={{ label: "View Schedule", href: "/schedule" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        content={{
          formFields: [
            "Full name",
            "Email",
            "Phone (optional)",
            "What are you interested in? (Classes / Membership / Private session / Accessibility / Other)",
            "Message",
          ],
          anchors: [
            { id: "consult", label: "Free consult" },
            { id: "intro", label: "Intro Week" },
            { id: "membership", label: "Memberships" },
            { id: "passes", label: "Class passes" },
            { id: "billing", label: "Reimbursement & discounts" },
          ],
          location: {
            address: "214 Pine St, Seattle, WA 98101",
            parking: "Street parking + 2-hour garage at Pine & 3rd.",
            transit: "5-minute walk from Westlake Station.",
          },
        }}
      />
    </>
  );
}
