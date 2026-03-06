import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaBandProps {
  heading: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  className?: string
}

export default function CtaBand({
  heading = 'Ready to build a consistent wellness routine?',
  description = 'Start with a complimentary intro session and we will tailor a class plan that fits your body, goals, and schedule.',
  primaryCtaLabel = 'Book Free Intro',
  primaryCtaHref = '#contact',
  secondaryCtaLabel = 'View Memberships',
  secondaryCtaHref = '#pricing',
  className = '',
}: Partial<CtaBandProps>) {
  return (
    <section className={cn('bg-gradient-to-r from-[#0077B6] via-[#48CAE4] to-[#0077B6]', className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-16 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-white/90">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-lg bg-white px-6 py-3 font-medium text-[#0077B6] hover:bg-white/90">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-white px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
