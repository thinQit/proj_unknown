"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "The care team listened to my concerns and built a plan that actually fit my schedule. I finally feel supported.",
    name: "Sophia Reynolds",
    designation: "Primary Care Patient",
    src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
  },
  {
    quote:
      "Booking an appointment was effortless, and the telehealth visit was just as thorough as an in-person visit.",
    name: "Marcus Lee",
    designation: "Telehealth Member",
    src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
  },
  {
    quote:
      "Our pediatrician was incredible with our toddler and explained every step. We feel confident in our care.",
    name: "Jenna Patel",
    designation: "Parent & Caregiver",
    src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg",
  },
];

export default function TestimonialsAnimated({
  headline = "Patients who feel seen and cared for",
  subheadline = "Real stories from families who trust Harborview Health.",
  testimonials = defaultTestimonials,
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
