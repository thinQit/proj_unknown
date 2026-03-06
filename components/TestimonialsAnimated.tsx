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

export default function TestimonialsAnimated({
  headline = "Member Transformations That Speak",
  subheadline = "Real stories from athletes who showed up, trained hard, and changed their lives.",
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  const safeTestimonials =
    testimonials.length > 0
      ? testimonials
      : [
          {
            quote:
              "The coaches pushed me past limits I didn't know existed. Six weeks in and my strength is up, body fat down, and confidence through the roof.",
            name: "Maya Ortiz",
            designation: "Unlimited Member",
            src: "/images/gallery-1.jpg",
          },
        ];

  return (
    <section className="py-20 md:py-28" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={safeTestimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
