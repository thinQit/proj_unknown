import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export default function TermsPage() {
  return (
    <>
      <HeroSection
        headline="Terms"
        subheadline="Studio policies and website terms for CalmWave Yoga & Wellness."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          lastUpdated: "2026-02-01",
        }}
      />
      <ContentSection
        headline="Studio policies"
        subheadline="A few guidelines to keep the space calm and safe for everyone."
        primaryCta={{ label: "View Pricing", href: "/pricing" }}
        secondaryCta={{ label: "View Schedule", href: "/schedule" }}
        content={{
          sections: [
            {
              title: "Health & safety",
              body: "Yoga and movement carry inherent risk. Please practice within your limits and inform your instructor of any injuries or concerns. If you have a medical condition, consult your clinician before starting a new exercise program.",
            },
            {
              title: "Heated classes",
              body: "Hydrate and pace yourself. You may step out at any time. We recommend non-heated classes if you are new to exercise, pregnant, or have heat sensitivity.",
            },
            {
              title: "Late arrival & cancellations",
              body: "To protect the class experience, late entry is allowed up to 5 minutes after start time. Cancellations are free up to 4 hours before class.",
            },
            {
              title: "Membership changes",
              body: "Memberships renew monthly and can be paused with 7 days’ notice. Discounts require valid verification in-studio.",
            },
          ],
        }}
      />
    </>
  );
}
