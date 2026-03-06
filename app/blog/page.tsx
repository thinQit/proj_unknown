import HeroSection from "@/components/HeroSection";
import BlogIndex from "@/components/BlogIndex";
import CtaBand from "@/components/CtaBand";

export default function BlogPage() {
  return (
    <>
      <HeroSection
        headline="Wellness, explained—simple guidance you can use this week"
        subheadline="Short reads on mobility, stress management, breathwork, and building a sustainable practice."
        primaryCta={{ label: "Browse Articles", href: "/blog#posts" }}
        secondaryCta={{ label: "Start with Intro Week", href: "/pricing" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          featured: {
            title: "A 10-minute evening reset: breath + gentle mobility",
            date: "2026-02-12",
            category: "Stress & Sleep",
            excerpt:
              "A simple routine to downshift after work—no equipment required, beginner-friendly, and easy to repeat.",
          },
        }}
      />
      <BlogIndex
        headline="Latest posts"
        subheadline="Evidence-informed, studio-tested, and written for busy people."
        primaryCta={{ label: "Contact the Studio", href: "/contact" }}
        secondaryCta={{ label: "See Schedule", href: "/schedule" }}
        content={{
          posts: [
            {
              slug: "breathwork-for-better-sleep",
              title: "Breathwork for better sleep: 3 cues that actually help",
              date: "2026-01-28",
              category: "Stress & Sleep",
              readingTime: "6 min",
              excerpt:
                "Learn how nasal breathing, longer exhales, and a simple cadence can help you fall asleep faster.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              slug: "hips-and-low-back-relief",
              title:
                "Tight hips and low back tension: what to try before stretching harder",
              date: "2026-01-10",
              category: "Mobility",
              readingTime: "7 min",
              excerpt:
                "Why stability and breath matter—and a few gentle drills we use in Mobility Lab.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              slug: "beginner-yoga-what-to-expect",
              title: "Beginner yoga: what to expect in your first class",
              date: "2025-12-18",
              category: "Getting Started",
              readingTime: "5 min",
              excerpt:
                "From what to wear to how modifications work—so you can walk in feeling prepared.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              slug: "heated-yoga-safety-tips",
              title:
                "Heated yoga safety: hydration, pacing, and when to choose non-heated",
              date: "2025-11-30",
              category: "Safety",
              readingTime: "6 min",
              excerpt:
                "Heated classes can feel great—here’s how to approach them safely and comfortably.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
          ],
          categories: [
            "Getting Started",
            "Mobility",
            "Stress & Sleep",
            "Safety",
            "Mindfulness",
          ],
        }}
      />
      <CtaBand
        headline="Want guidance tailored to you?"
        subheadline="Book a free consult and we’ll recommend a weekly plan based on your goals."
        primaryCta={{ label: "Book a Free Consult", href: "/contact#consult" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        content={{}}
      />
    </>
  );
}
