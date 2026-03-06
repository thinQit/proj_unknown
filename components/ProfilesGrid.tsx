import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface InstructorProfile {
  name: string
  title: string
  credentials: string
  specialties: string[]
  featuredClasses: string[]
  imageSrc: string
}

interface ProfilesGridProps {
  heading: string
  subheading: string
  profiles: InstructorProfile[]
  className?: string
}

const defaultProfiles: InstructorProfile[] = [
  {
    name: 'Janelle Park',
    title: 'Lead Flow Instructor',
    credentials: 'RYT 500, Yoga Therapy Certified',
    specialties: ['Heated Vinyasa', 'Mobility', 'Breathwork'],
    featuredClasses: ['Heated Vinyasa Flow', 'Mindful Strength'],
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    name: 'Mateo Alvarez',
    title: 'Restorative Specialist',
    credentials: 'E-RYT 200, Trauma-Informed Yoga',
    specialties: ['Restorative', 'Meditation', 'Sleep support'],
    featuredClasses: ['Restore & Renew', 'Breath & Meditation Lab'],
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    name: 'Priya Desai',
    title: 'Wellness Coach',
    credentials: 'NASM CPT, Ayurveda Practitioner',
    specialties: ['Functional movement', 'Stress management', 'Core'],
    featuredClasses: ['Mindful Strength', 'Slow Flow Basics'],
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
]

export default function ProfilesGrid({
  heading = 'Meet your instructors',
  subheading = 'Our team blends yoga expertise with wellness coaching so you feel supported in every class.',
  profiles = defaultProfiles,
  className = '',
}: Partial<ProfilesGridProps>) {
  return (
    <section id="instructors" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((profile) => (
            <Card
              key={profile.name}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image
                    src={profile.imageSrc}
                    alt={profile.name}
                    width={800}
                    height={600}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">{profile.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{profile.credentials}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialties.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Featured Classes</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {profile.featuredClasses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
