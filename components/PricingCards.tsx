import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
}

interface PricingCardsProps {
  heading: string
  subheading: string
  tiers: PricingTier[]
  addonText: string
  ctaLabel: string
  ctaHref: string
  className?: string
}

const defaultTiers: PricingTier[] = [
  {
    name: 'Starter Pack',
    price: '$89/mo',
    description: '4 classes per month for flexible schedules.',
    features: ['One guest pass', 'Access to all class types', 'Rolling credits'],
    highlighted: false,
  },
  {
    name: 'Unlimited',
    price: '$159/mo',
    description: 'Unlimited classes plus priority booking.',
    features: ['Unlimited in-studio classes', 'Priority waitlist', 'One free workshop'],
    highlighted: true,
  },
  {
    name: 'Wellness Plus',
    price: '$219/mo',
    description: 'Includes wellness coaching and recovery sessions.',
    features: ['Unlimited classes', 'Monthly wellness consult', '2 private sessions'],
    highlighted: false,
  },
]

export default function PricingCards({
  heading = 'Memberships and class packs',
  subheading = 'Choose the plan that supports your practice and wellness goals.',
  tiers = defaultTiers,
  addonText = 'Add-ons: Drop-in $28 · Private Session $95 · Workshop Series from $49',
  ctaLabel = 'Start Membership',
  ctaHref = '#contact',
  className = '',
}: Partial<PricingCardsProps>) {
  return (
    <section id="pricing" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md',
                tier.highlighted ? 'border-[#48CAE4] bg-[#F0F9FC]' : ''
              )}
            >
              <div className="space-y-4">
                {tier.highlighted && <Badge>Most Popular</Badge>}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="text-3xl font-semibold text-foreground">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-[#0077B6]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-lg px-6 py-3 font-medium">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">{addonText}</p>
      </div>
    </section>
  )
}
