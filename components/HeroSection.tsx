import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface HeroFact {
  label: string
  value: string
}

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  facts: HeroFact[]
  trustBadges: string[]
  imageSrc: string
  className?: string
}

const defaultFacts: HeroFact[] = [
  { label: 'Classes weekly', value: '45+' },
  { label: 'Certified instructors', value: '12' },
  { label: 'Average rating', value: '4.9/5' },
]

const defaultBadges = ['Holistic care', 'Beginner friendly', 'Warm studio']

export default function HeroSection({
  headline = 'Breathe, move, and restore at Harbor Wellness Studio',
  subheadline = 'A modern yoga and wellness studio offering heated flows, restorative sessions, and mindful strength classes in a calming medical-blue space.',
  primaryCtaLabel = 'View Schedule',
  primaryCtaHref = '#schedule',
  secondaryCtaLabel = 'Meet the Instructors',
  secondaryCtaHref = '#instructors',
  facts = defaultFacts,
  trustBadges = defaultBadges,
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroSectionProps>) {
  return (
    <section className={cn('bg-gradient-to-b from-white via-[#F0F4F8] to-white', className)}>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">{headline}</h1>
          <p className="text-lg text-muted-foreground">{subheadline}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-lg px-6 py-3 font-medium">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-border px-6 py-3 font-medium text-foreground"
            >
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <p className="text-xl font-semibold text-foreground">{fact.value}</p>
                <p className="text-sm text-muted-foreground">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-sm">
          <Image
            src={imageSrc}
            alt="Yoga class in studio"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
