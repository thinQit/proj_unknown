import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  Flame,
  Clock,
  ThermometerSun,
  HeartPulse,
  Sparkles,
  Dumbbell,
  Leaf,
  Focus,
} from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  intensity: string
  duration: string
  temperature: string
  goodFor: string[]
  icon: string
}

interface ServicesGridProps {
  heading: string
  subheading: string
  services: ServiceItem[]
  className?: string
}

const iconMap = {
  Flame,
  Clock,
  ThermometerSun,
  HeartPulse,
  Dumbbell,
  Leaf,
  Focus,
  Sparkles,
}

const defaultServices: ServiceItem[] = [
  {
    title: 'Heated Vinyasa Flow',
    description: 'Dynamic sequences to build strength and flexibility in a softly heated room.',
    intensity: 'Medium',
    duration: '60 min',
    temperature: '90°F',
    goodFor: ['Strength', 'Mobility', 'Stress relief'],
    icon: 'Flame',
  },
  {
    title: 'Restore & Renew',
    description: 'Slow, supportive poses with breathwork to reset your nervous system.',
    intensity: 'Low',
    duration: '75 min',
    temperature: '78°F',
    goodFor: ['Recovery', 'Sleep', 'Gentle stretch'],
    icon: 'Leaf',
  },
  {
    title: 'Mindful Strength',
    description: 'Yoga-inspired conditioning with light weights and core-focused flows.',
    intensity: 'High',
    duration: '50 min',
    temperature: '84°F',
    goodFor: ['Tone', 'Endurance', 'Balance'],
    icon: 'Dumbbell',
  },
  {
    title: 'Breath & Meditation Lab',
    description: 'Guided breathing and meditation to help you stay grounded and present.',
    intensity: 'Low',
    duration: '40 min',
    temperature: 'Room temp',
    goodFor: ['Focus', 'Calm', 'Clarity'],
    icon: 'Focus',
  },
]

export default function ServicesGrid({
  heading = 'Classes designed for every body',
  subheading = 'Explore our signature yoga and wellness offerings, each led by certified instructors focused on safe, supportive movement.',
  services = defaultServices,
  className = '',
}: Partial<ServicesGridProps>) {
  return (
    <section id="classes" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Sparkles
            return (
              <Card
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#E8F4FA] p-3 text-[#0077B6]">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary">Intensity: {service.intensity}</Badge>
                      <Badge variant="secondary">Duration: {service.duration}</Badge>
                      <Badge variant="secondary">Temp: {service.temperature}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.goodFor.map((chip) => (
                        <Badge key={chip} variant="outline">
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
