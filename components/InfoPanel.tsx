import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Shield, HeartPulse, CheckCircle2, Sparkles } from 'lucide-react'

interface InfoItem {
  title: string
  description: string
  icon: string
}

interface InfoPanelProps {
  heading: string
  description: string
  items: InfoItem[]
  note: string
  className?: string
}

const iconMap = {
  Shield,
  HeartPulse,
  CheckCircle2,
  Sparkles,
}

const defaultItems: InfoItem[] = [
  {
    title: 'HSA & FSA eligible',
    description: 'Use wellness funds to cover memberships and private sessions.',
    icon: 'Shield',
  },
  {
    title: 'Insurance-friendly receipts',
    description: 'We provide itemized statements for reimbursement programs.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Mind-body wellness focus',
    description: 'Programs aligned with stress reduction and recovery benefits.',
    icon: 'HeartPulse',
  },
]

export default function InfoPanel({
  heading = 'Wellness reimbursement support',
  description = 'We help you maximize wellness benefits through employer and insurer programs.',
  items = defaultItems,
  note = 'Ask our front desk about documentation and eligibility. We are happy to help.',
  className = '',
}: Partial<InfoPanelProps>) {
  return (
    <section id="insurance" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <Badge variant="secondary">Insurance & Wellness</Badge>
              <h2 className="text-3xl font-semibold text-foreground">{heading}</h2>
              <p className="text-muted-foreground">{description}</p>
              <p className="text-sm text-muted-foreground">{note}</p>
            </div>
            <div className="space-y-4">
              {items.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#E8F4FA] p-3 text-[#0077B6]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
