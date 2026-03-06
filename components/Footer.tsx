import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  studioName: string
  address: string
  phone: string
  email: string
  hours: string[]
  quickLinks: FooterLink[]
  primaryCtaLabel: string
  primaryCtaHref: string
  className?: string
}

const defaultHours = ['Mon–Fri: 6:00am – 8:30pm', 'Sat: 7:00am – 5:00pm', 'Sun: 8:00am – 3:00pm']

const defaultLinks: FooterLink[] = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Memberships', href: '#pricing' },
  { label: 'Our Instructors', href: '#instructors' },
  { label: 'Wellness Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer({
  studioName = 'Harbor Wellness Studio',
  address = '245 Seaside Avenue, Suite 210, Clearwater, FL 33767',
  phone = '(727) 555-0142',
  email = 'hello@harborwellness.com',
  hours = defaultHours,
  quickLinks = defaultLinks,
  primaryCtaLabel = 'Schedule a Consultation',
  primaryCtaHref = '#contact',
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t bg-muted/40', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{studioName}</h3>
            <p className="text-sm text-muted-foreground">{address}</p>
            <p className="text-sm text-muted-foreground">{phone}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Studio Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {hours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h4 className="text-base font-semibold text-foreground">Start your wellness plan</h4>
            <p className="text-sm text-muted-foreground">
              Book a free intro or claim your first class and get a personalized plan from our team.
            </p>
            <Button asChild className="w-full rounded-lg px-6 py-3 font-medium">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
          </div>
        </div>
        <Separator className="my-10" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© 2024 Harbor Wellness Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
