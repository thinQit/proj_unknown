import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBand from "@/components/CtaBand";
import ProfilesGrid from "@/components/ProfilesGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import InfoPanel from "@/components/InfoPanel";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="A calm, clinical-grade approach to yoga—built for real bodies and real life"
        subheadline="CalmWave is a modern yoga and wellness studio in Seattle offering small-group classes, breathwork, and recovery sessions. Beginner-friendly, trauma-informed, and guided by experienced instructors."
        primaryCta={{ label: "View Class Schedule", href: "/schedule" }}
        secondaryCta={{ label: "Try a $29 Intro Week", href: "/pricing" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          quickFacts: [
            "Open daily • 6:30am–8:30pm",
            "Heated + non-heated rooms",
            "Mat rentals $3 • Towels $2",
            "Located at 214 Pine St, Seattle, WA 98101",
          ],
          trustBadges: [
            "CPR/AED certified staff",
            "Trauma-informed teaching",
            "Accessible options in every class",
          ],
        }}
      />
      <ServicesGrid
        headline="Classes designed to reduce stress, improve mobility, and build strength safely"
        subheadline="Choose the pace that fits your day—then progress with consistent guidance."
        primaryCta={{ label: "Explore All Classes", href: "/classes" }}
        secondaryCta={{ label: "Meet the Instructors", href: "/instructors" }}
        content={{
          services: [
            {
              title: "Gentle Flow",
              description:
                "Slow, supportive sequences focused on joint-friendly mobility and breath. Great for beginners, recovery, and stress relief.",
              details: {
                intensity: "Low",
                duration: "60 min",
                room: "Non-heated",
                goodFor: ["Beginners", "Low back tension", "Desk posture"],
              },
            },
            {
              title: "Vinyasa Flow",
              description:
                "A balanced flow class that builds strength and stamina with clear alignment cues and options for every level.",
              details: {
                intensity: "Moderate",
                duration: "60 min",
                room: "Warm (80–84°F)",
                goodFor: ["Full-body strength", "Cardio + breath", "Consistency"],
              },
            },
            {
              title: "Yin + Restore",
              description:
                "Longer holds and deep relaxation to calm the nervous system. Props provided; perfect for sleep support.",
              details: {
                intensity: "Low",
                duration: "75 min",
                room: "Non-heated",
                goodFor: ["Stress reduction", "Flexibility", "Recovery days"],
              },
            },
            {
              title: "Breathwork & Meditation",
              description:
                "Guided breath practices and mindfulness training to improve focus and resilience—no experience required.",
              details: {
                intensity: "Low",
                duration: "45 min",
                room: "Non-heated",
                goodFor: ["Anxiety management", "Focus", "Emotional regulation"],
              },
            },
            {
              title: "Mobility Lab",
              description:
                "Evidence-informed mobility and stability work for hips, shoulders, and spine—ideal for runners and desk workers.",
              details: {
                intensity: "Moderate",
                duration: "50 min",
                room: "Non-heated",
                goodFor: ["Range of motion", "Injury prevention", "Athletes"],
              },
            },
            {
              title: "Heated Power",
              description:
                "A stronger, sweatier flow with smart progressions. Expect strength blocks, core work, and breath pacing.",
              details: {
                intensity: "High",
                duration: "60 min",
                room: "Heated (92–95°F)",
                goodFor: ["Strength + endurance", "Confidence", "Energy boost"],
              },
            },
          ],
        }}
      />
      <CtaBand
        headline="Not sure where to start? Book a 10-minute studio consult (free)."
        subheadline="We’ll recommend the best class type and weekly plan based on your goals, schedule, and any movement considerations."
        primaryCta={{ label: "Book a Free Consult", href: "/contact#consult" }}
        secondaryCta={{ label: "See Membership Plans", href: "/pricing" }}
        content={{
          availability:
            "Consults available Mon–Thu, 12:00pm–6:00pm (phone or in-studio).",
          whatToExpect: [
            "Quick intake: goals, injuries, stress/sleep",
            "Class recommendations + modifications",
            "Membership guidance (no pressure)",
          ],
        }}
      />
      <ProfilesGrid
        headline="Meet your instructors—experienced, approachable, and alignment-focused"
        subheadline="Our team blends yoga tradition with modern movement education to help you feel safe and supported."
        primaryCta={{ label: "View All Instructors", href: "/instructors" }}
        secondaryCta={{ label: "See Today’s Classes", href: "/schedule" }}
        content={{
          profiles: [
            {
              name: "Maya Chen, E-RYT 500",
              role: "Studio Director • Vinyasa & Mobility",
              bio: "Maya specializes in strength-forward vinyasa with precise alignment cues. She’s known for making challenging classes feel accessible and empowering.",
              credentials: ["E-RYT 500", "Yoga for Athletes (100h)", "CPR/AED"],
              specialties: [
                "Shoulder mechanics",
                "Core stability",
                "Sustainable progressions",
              ],
              featuredClasses: ["Vinyasa Flow", "Heated Power", "Mobility Lab"],
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Jordan Patel, RYT 300",
              role: "Breathwork & Meditation Lead",
              bio: "Jordan teaches breathwork and mindfulness with a calm, practical approach. Expect clear guidance, nervous-system education, and a welcoming space.",
              credentials: [
                "RYT 300",
                "Breathwork Facilitator",
                "Trauma-informed training",
              ],
              specialties: [
                "Stress reduction",
                "Sleep support",
                "Mindfulness for busy professionals",
              ],
              featuredClasses: ["Breathwork & Meditation", "Yin + Restore"],
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Elena Ruiz, RYT 200",
              role: "Gentle & Restorative Instructor",
              bio: "Elena’s classes are slow, supportive, and prop-rich. She’s passionate about helping beginners feel confident and comfortable from day one.",
              credentials: ["RYT 200", "Restorative Yoga (50h)", "CPR/AED"],
              specialties: [
                "Beginner foundations",
                "Low back comfort",
                "Relaxation practices",
              ],
              featuredClasses: ["Gentle Flow", "Yin + Restore"],
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
          ],
        }}
      />
      <TestimonialsCarousel
        headline="A studio that feels calm, clean, and genuinely supportive"
        subheadline="Real feedback from members who wanted a healthier routine without the pressure."
        primaryCta={{ label: "Join as a Member", href: "/pricing" }}
        secondaryCta={{ label: "Read the Blog", href: "/blog" }}
        content={{
          items: [
            {
              name: "Alyssa K.",
              title: "Desk worker • 3x/week member",
              quote:
                "I came in with tight hips and constant neck tension. The Gentle Flow + Mobility Lab combo has been a game-changer—my posture is better and I sleep more deeply.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Marcus T.",
              title: "Runner • Drop-in regular",
              quote:
                "The instructors give options without making it awkward. Mobility Lab helped my ankles and calves more than anything else I’ve tried.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
            {
              name: "Priya S.",
              title: "New to yoga • Intro Week",
              quote:
                "I was nervous, but the studio felt welcoming and clean. The consult helped me pick the right classes, and I never felt behind.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
            },
          ],
          ratingSummary: {
            average: "4.9/5",
            source: "Google Reviews",
            count: 214,
          },
        }}
      />
      <InfoPanel
        headline="Wellness benefits & reimbursement support"
        subheadline="While yoga memberships aren’t typically billed to insurance, many members use HSA/FSA or employer wellness stipends."
        primaryCta={{ label: "Ask About Reimbursement", href: "/contact#billing" }}
        secondaryCta={{ label: "View Membership Options", href: "/pricing" }}
        content={{
          options: [
            {
              title: "HSA/FSA",
              description:
                "Some plans allow movement and stress-management programs with a Letter of Medical Necessity (LMN). Check with your provider.",
            },
            {
              title: "Employer Wellness Stipends",
              description:
                "We can provide receipts and attendance summaries for reimbursement programs.",
            },
            {
              title: "Student & Healthcare Worker Discount",
              description:
                "10% off monthly memberships with valid ID (in-studio verification).",
            },
          ],
          note: "We’re happy to provide itemized receipts and membership documentation upon request.",
        }}
      />
      <FAQAccordion
        headline="Questions, answered"
        subheadline="Everything you need to feel prepared for your first class."
        items={[
          {
            question: "Do I need to be flexible to start?",
            answer:
              "No. Flexibility is a result, not a requirement. Our instructors offer options and props so you can work safely at your current range of motion.",
          },
          {
            question: "What should I bring?",
            answer:
              "Wear comfortable clothing you can move in. Bring a water bottle. Mats are available to rent for $3; towels are $2.",
          },
          {
            question: "Are classes beginner-friendly?",
            answer:
              "Yes. Gentle Flow, Yin + Restore, and Breathwork & Meditation are ideal for beginners. Vinyasa Flow includes modifications and clear alignment cues.",
          },
          {
            question: "How early should I arrive?",
            answer:
              "Arrive 10 minutes early for your first visit to get oriented and set up. Doors open 15 minutes before class.",
          },
          {
            question: "Is the heated room safe?",
            answer:
              "Heated classes are optional. If you’re pregnant, have cardiovascular concerns, or feel lightheaded easily, we recommend starting with non-heated classes and consulting your clinician if needed.",
          },
        ]}
      />
      <ContactSection
        headline="Visit CalmWave in downtown Seattle"
        subheadline="Questions about classes, memberships, or accessibility? We’re here to help."
        primaryCta={{ label: "Email Us", href: "mailto:hello@calmwaveyoga.com" }}
        secondaryCta={{ label: "Call (206) 555-0148", href: "tel:+12065550148" }}
        content={{
          address: "214 Pine St, Seattle, WA 98101",
          hours: [
            "Mon–Fri: 6:30am–8:30pm",
            "Sat: 8:00am–6:00pm",
            "Sun: 8:00am–5:00pm",
          ],
          contactDetails: {
            email: "hello@calmwaveyoga.com",
            phone: "(206) 555-0148",
          },
          consultAnchorId: "consult",
          billingAnchorId: "billing",
          accessibility: [
            "Step-free entry",
            "Restroom on main level",
            "Props available (blocks, bolsters, straps)",
            "Please email for scent-sensitive accommodations",
          ],
        }}
      />
    </>
  );
}
