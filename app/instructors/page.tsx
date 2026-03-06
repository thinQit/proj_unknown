import HeroSection from "@/components/HeroSection";
import ProfilesGrid from "@/components/ProfilesGrid";
import CtaBand from "@/components/CtaBand";

export default function InstructorsPage() {
  return (
    <>
      <HeroSection
        headline="Instructors who teach with clarity, care, and options"
        subheadline="We prioritize safe alignment, accessible progressions, and a calm studio experience—whether it’s your first class or your hundredth."
        primaryCta={{ label: "See Schedule", href: "/schedule" }}
        secondaryCta={{ label: "Membership Plans", href: "/pricing" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          studioValues: [
            "Trauma-informed language",
            "Consent-based hands-on assists (opt-in)",
            "Inclusive cueing and modifications",
          ],
        }}
      />
      <ProfilesGrid
        headline="Our team"
        subheadline="Get to know the people guiding your practice."
        primaryCta={{ label: "Book a Free Consult", href: "/contact#consult" }}
        secondaryCta={{ label: "Read the Blog", href: "/blog" }}
        content={{
          profiles: [
            {
              name: "Maya Chen, E-RYT 500",
              role: "Studio Director",
              bio: "Maya blends strength training principles with yoga to help students build stability and confidence. Expect thoughtful sequencing and clear options.",
              credentials: ["E-RYT 500", "Yoga for Athletes (100h)", "CPR/AED"],
              specialties: [
                "Strength-based vinyasa",
                "Mobility programming",
                "Shoulder + hip mechanics",
              ],
              availability: "Tue–Sat mornings + evenings",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Jordan Patel, RYT 300",
              role: "Breathwork & Meditation Lead",
              bio: "Jordan teaches practical breathwork and meditation for stress, sleep, and focus. Classes are calm, structured, and beginner-friendly.",
              credentials: [
                "RYT 300",
                "Breathwork Facilitator",
                "Trauma-informed training",
              ],
              specialties: [
                "Nervous system downshifting",
                "Breath mechanics",
                "Mindfulness habits",
              ],
              availability: "Mon/Wed/Fri midday + Sunday",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Elena Ruiz, RYT 200",
              role: "Gentle & Restorative Instructor",
              bio: "Elena’s teaching is supportive and prop-rich, with a focus on comfort and sustainable movement. Perfect for beginners and recovery days.",
              credentials: ["RYT 200", "Restorative Yoga (50h)", "CPR/AED"],
              specialties: [
                "Beginner foundations",
                "Restorative sequencing",
                "Relaxation techniques",
              ],
              availability: "Mon–Sun evenings + weekends",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Samira Khan, RYT 200",
              role: "Flow Instructor",
              bio: "Samira brings upbeat energy and clear transitions to Vinyasa Flow, with plenty of options for building strength over time.",
              credentials: ["RYT 200", "Functional Movement Basics (30h)"],
              specialties: [
                "Foundational strength",
                "Balance work",
                "Breath-to-movement timing",
              ],
              availability: "Substitute + special workshops",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
          ],
        }}
      />
      <CtaBand
        headline="Want personalized guidance?"
        subheadline="A quick consult can help you choose the right class mix and intensity."
        primaryCta={{ label: "Book a Free Consult", href: "/contact#consult" }}
        secondaryCta={{ label: "See Schedule", href: "/schedule" }}
        content={{}}
      />
    </>
  );
}
