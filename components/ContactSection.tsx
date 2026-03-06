import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactDetail {
  label: string
  value: string
  href: string
  icon: 'MapPin' | 'Phone' | 'Mail'
}

interface ContactSectionProps {
  heading: string
  subheading: string
  details: ContactDetail[]
  className?: string
}

const defaultDetails: ContactDetail[] = [
  {
    label: 'Visit us',
    value: '245 Seaside Avenue, Suite 210, Clearwater, FL 33767',
    href: 'https://maps.google.com',
    icon: 'MapPin',
  },
  {
    label: 'Call the studio',
    value: '(727) 555-0142',
    href: 'tel:7275550142',
    icon: 'Phone',
  },
  {
    label: 'Email the team',
    value: 'hello@harborwellness.com',
    href: 'mailto:hello@harborwellness.com',
    icon: 'Mail',
  },
]

const iconMap = {
  MapPin,
  Phone,
  Mail,
}

export default function ContactSection({
  heading = 'Let’s plan your wellness journey',
  subheading = 'Reach out for a complimentary consult, class recommendations, or billing support.',
  details = defaultDetails,
  className = '',
}: Partial<ContactSectionProps>) {
  return (
    <section id="contact" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {details.map((detail) => {
              const IconComponent = iconMap[detail.icon]
              return (
                <Card
                  key={detail.label}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#E8F4FA] p-3 text-[#0077B6]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{detail.label}</p>
                      <Link href={detail.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {detail.value}
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
            <div className="rounded-xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Need help with:</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="#consult" className="text-[#0077B6]">
                    Complimentary consult
                  </Link>
                </li>
                <li>
                  <Link href="#intro" className="text-[#0077B6]">
                    New member intro
                  </Link>
                </li>
                <li>
                  <Link href="#billing" className="text-[#0077B6]">
                    Billing & reimbursements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Card className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Amelia" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Rivers" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="amelia@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" placeholder="Tell us about your goals or questions." />
              </div>
              <Button className="w-full rounded-lg px-6 py-3 font-medium">Send message</Button>
              <div className="grid gap-3 text-xs text-muted-foreground md:grid-cols-3">
                <div id="consult" className="rounded-lg border border-border/60 p-3">
                  Complimentary consults
                </div>
                <div id="intro" className="rounded-lg border border-border/60 p-3">
                  Intro offers for new members
                </div>
                <div id="billing" className="rounded-lg border border-border/60 p-3">
                  Billing & reimbursement help
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
