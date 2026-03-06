import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBand from "@/components/CtaBand";

export default function ClassesPage() {
  return (
    <>
      <HeroSection
        headline="Find the class that fits your body and your week"
        subheadline="From gentle foundations to heated power, our classes are designed to be safe, clear, and supportive—every time you step on the mat."
        primaryCta={{ label: "See Schedule", href: "/schedule" }}
        secondaryCta={{ label: "Membership Plans", href: "/pricing" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          highlights: [
            "Small groups (average 14–18 students)",
            "Props included in every room",
            "Options offered without pressure",
          ],
        }}
      />
      <ServicesGrid
        headline="Class types"
        subheadline="Choose by intensity, temperature, or goal."
        primaryCta={{ label: "Book a Free Consult", href: "/contact#consult" }}
        secondaryCta={{ label: "Meet Instructors", href: "/instructors" }}
        content={{
          services: [
            {
              title: "Gentle Flow",
              description:
                "Slow flow with supportive transitions, breath pacing, and accessible shapes.",
              details: {
                intensity: "Low",
                duration: "60 min",
                room: "Non-heated",
                goodFor: ["Beginners", "Recovery", "Stress relief"],
              },
            },
            {
              title: "Yin + Restore",
              description:
                "Long holds and deep rest using bolsters and blankets to downshift the nervous system.",
              details: {
                intensity: "Low",
                duration: "75 min",
                room: "Non-heated",
                goodFor: ["Sleep support", "Flexibility", "Recovery days"],
              },
            },
            {
              title: "Vinyasa Flow",
              description:
                "Balanced flow with strength, mobility, and clear alignment cues.",
              details: {
                intensity: "Moderate",
                duration: "60 min",
                room: "Warm (80–84°F)",
                goodFor: ["Strength", "Mobility", "Consistency"],
              },
            },
            {
              title: "Heated Power",
              description:
                "Sweat-forward power flow with smart progressions and core work.",
              details: {
                intensity: "High",
                duration: "60 min",
                room: "Heated (92–95°F)",
                goodFor: ["Endurance", "Energy", "Confidence"],
              },
            },
            {
              title: "Breathwork & Meditation",
              description:
                "Guided breath practices and meditation to improve calm, focus, and resilience.",
              details: {
                intensity: "Low",
                duration: "45 min",
                room: "Non-heated",
                goodFor: ["Stress", "Focus", "Emotional regulation"],
              },
            },
            {
              title: "Mobility Lab",
              description:
                "Mobility and stability drills for hips, shoulders, and spine—great cross-training.",
              details: {
                intensity: "Moderate",
                duration: "50 min",
                room: "Non-heated",
                goodFor: ["Range of motion", "Injury prevention", "Athletes"],
              },
            },
          ],
          policies: [
            "Late entry: allowed up to 5 minutes after start time to protect class flow.",
            "Cancellation: free up to 4 hours before class; late cancels may forfeit a credit.",
            "Heated classes: hydrate and pace yourself; step out anytime.",
          ],
        }}
      />
      <CtaBand
        headline="Ready to build a weekly practice?"
        subheadline="Start with the Intro Week or choose a membership that matches your routine."
        primaryCta={{ label: "View Pricing", href: "/pricing" }}
        secondaryCta={{ label: "See Schedule", href: "/schedule" }}
        content={{}}
      />
    </>
  );
}
