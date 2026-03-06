import HeroSection from "@/components/HeroSection";
import ScheduleTable from "@/components/ScheduleTable";
import CtaBand from "@/components/CtaBand";

export default function SchedulePage() {
  return (
    <>
      <HeroSection
        headline="Class schedule"
        subheadline="Plan your week with a mix of movement, strength, and recovery. Arrive 10 minutes early for your first visit."
        primaryCta={{ label: "Try Intro Week", href: "/pricing" }}
        secondaryCta={{ label: "Questions? Contact Us", href: "/contact" }}
        content={{
          imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
          timezone: "Pacific Time (PT)",
          note: "Schedule updates weekly; holiday hours posted on the blog.",
        }}
      />
      <ScheduleTable
        headline="This week at CalmWave"
        subheadline="A sample weekly schedule (subject to instructor availability)."
        primaryCta={{ label: "Choose a Membership", href: "/pricing" }}
        secondaryCta={{ label: "Meet Instructors", href: "/instructors" }}
        content={{
          days: [
            {
              day: "Monday",
              classes: [
                {
                  time: "6:45am",
                  name: "Vinyasa Flow",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Warm Studio",
                },
                {
                  time: "12:10pm",
                  name: "Breathwork & Meditation",
                  duration: "45 min",
                  instructor: "Jordan Patel",
                  room: "Quiet Studio",
                },
                {
                  time: "6:15pm",
                  name: "Gentle Flow",
                  duration: "60 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
                {
                  time: "7:30pm",
                  name: "Yin + Restore",
                  duration: "75 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
              ],
            },
            {
              day: "Tuesday",
              classes: [
                {
                  time: "6:45am",
                  name: "Heated Power",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Heated Studio",
                },
                {
                  time: "12:10pm",
                  name: "Mobility Lab",
                  duration: "50 min",
                  instructor: "Maya Chen",
                  room: "Quiet Studio",
                },
                {
                  time: "6:15pm",
                  name: "Vinyasa Flow",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Warm Studio",
                },
              ],
            },
            {
              day: "Wednesday",
              classes: [
                {
                  time: "6:45am",
                  name: "Gentle Flow",
                  duration: "60 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
                {
                  time: "12:10pm",
                  name: "Breathwork & Meditation",
                  duration: "45 min",
                  instructor: "Jordan Patel",
                  room: "Quiet Studio",
                },
                {
                  time: "6:15pm",
                  name: "Heated Power",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Heated Studio",
                },
              ],
            },
            {
              day: "Thursday",
              classes: [
                {
                  time: "6:45am",
                  name: "Vinyasa Flow",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Warm Studio",
                },
                {
                  time: "12:10pm",
                  name: "Mobility Lab",
                  duration: "50 min",
                  instructor: "Maya Chen",
                  room: "Quiet Studio",
                },
                {
                  time: "7:15pm",
                  name: "Yin + Restore",
                  duration: "75 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
              ],
            },
            {
              day: "Friday",
              classes: [
                {
                  time: "6:45am",
                  name: "Heated Power",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Heated Studio",
                },
                {
                  time: "12:10pm",
                  name: "Breathwork & Meditation",
                  duration: "45 min",
                  instructor: "Jordan Patel",
                  room: "Quiet Studio",
                },
                {
                  time: "5:45pm",
                  name: "Gentle Flow",
                  duration: "60 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
              ],
            },
            {
              day: "Saturday",
              classes: [
                {
                  time: "9:00am",
                  name: "Vinyasa Flow",
                  duration: "60 min",
                  instructor: "Maya Chen",
                  room: "Warm Studio",
                },
                {
                  time: "10:30am",
                  name: "Mobility Lab",
                  duration: "50 min",
                  instructor: "Maya Chen",
                  room: "Quiet Studio",
                },
                {
                  time: "12:00pm",
                  name: "Yin + Restore",
                  duration: "75 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
              ],
            },
            {
              day: "Sunday",
              classes: [
                {
                  time: "9:00am",
                  name: "Gentle Flow",
                  duration: "60 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
                {
                  time: "10:30am",
                  name: "Breathwork & Meditation",
                  duration: "45 min",
                  instructor: "Jordan Patel",
                  room: "Quiet Studio",
                },
                {
                  time: "12:00pm",
                  name: "Yin + Restore",
                  duration: "75 min",
                  instructor: "Elena Ruiz",
                  room: "Quiet Studio",
                },
              ],
            },
          ],
          bookingInfo: {
            howToBook:
              "This website is informational; booking is handled via phone or email.",
            phone: "(206) 555-0148",
            email: "hello@calmwaveyoga.com",
            arrival:
              "Doors open 15 minutes before class; please arrive early to settle in.",
          },
        }}
      />
      <CtaBand
        headline="Make it a routine—memberships save the most"
        subheadline="If you come 2+ times per week, a membership is typically the best value."
        primaryCta={{ label: "View Memberships", href: "/pricing" }}
        secondaryCta={{ label: "Contact for Help", href: "/contact" }}
        content={{}}
      />
    </>
  );
}
