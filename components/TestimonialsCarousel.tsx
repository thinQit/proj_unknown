'use client'

import Link from 'next/link'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialItem {
  quote: string
  name: string
  designation: string
  src: string
}

interface TestimonialsCarouselProps {
  heading: string
  summary: string
  testimonials: TestimonialItem[]
  ctaLabel: string
  ctaHref: string
  className?: string
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      'The instructors are thoughtful and encouraging. I leave every class calmer and stronger.',
    name: 'Lena M.',
    designation: 'Member since 2022',
    src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    quote:
      'The heated flow classes have transformed my energy levels. The studio feels like a retreat.',
    name: 'Jordan K.',
    designation: 'Unlimited member',
    src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    quote:
      'I appreciate the attention to alignment and the wellness tips in every class. Highly recommend.',
    name: 'Priya S.',
    designation: 'Monthly plan',
    src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
]

export default function TestimonialsCarousel({
  heading = 'What our members are saying',
  summary = '4.9 out of 5 stars from 240+ verified reviews',
  testimonials = defaultTestimonials,
  ctaLabel = 'Read more reviews',
  ctaHref = '#contact',
  className = '',
}: Partial<TestimonialsCarouselProps>) {
  return (
    <section id="testimonials" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-[#0077B6]">
                <Star className="h-4 w-4 fill-[#0077B6] text-[#0077B6]" />
                <Star className="h-4 w-4 fill-[#0077B6] text-[#0077B6]" />
                <Star className="h-4 w-4 fill-[#0077B6] text-[#0077B6]" />
                <Star className="h-4 w-4 fill-[#0077B6] text-[#0077B6]" />
                <Star className="h-4 w-4 fill-[#0077B6] text-[#0077B6]" />
              </div>
              <Badge variant="secondary">{summary}</Badge>
            </div>
          </div>
          <Button asChild variant="outline" className="rounded-lg border-border px-6 py-3 font-medium">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
