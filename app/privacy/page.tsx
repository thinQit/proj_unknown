import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        headline="Privacy Policy"
        subheadline="How we handle contact requests and website analytics."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          lastUpdated: "2026-02-01",
        }}
      />
      <ContentSection
        headline="Summary"
        subheadline="We collect only what we need to respond to you and improve the site experience."
        primaryCta={{ label: "Email Us", href: "mailto:hello@calmwaveyoga.com" }}
        secondaryCta={{ label: "Call Us", href: "tel:+12065550148" }}
        content={{
          sections: [
            {
              title: "Information you provide",
              body: "If you contact us, we may collect your name, email, phone number (optional), and message content to respond to your request.",
            },
            {
              title: "Website analytics",
              body: "We may use privacy-friendly analytics to understand page performance and improve content. We do not sell personal information.",
            },
            {
              title: "Data retention",
              body: "We retain messages as long as needed to provide support and maintain business records.",
            },
            {
              title: "Contact",
              body: "Questions about this policy? Email hello@calmwaveyoga.com.",
            },
          ],
        }}
      />
    </>
  );
}
