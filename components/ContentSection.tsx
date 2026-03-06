import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface ContentBlock {
  heading: string
  body: string | string[]
}

interface ContentSectionProps {
  title: string
  intro: string
  sections: ContentBlock[]
  className?: string
}

const defaultSections: ContentBlock[] = [
  {
    heading: 'Your data and privacy',
    body:
      'We collect only the information needed to schedule classes, manage memberships, and provide a safe studio experience.',
  },
  {
    heading: 'Communications',
    body: [
      'Email updates are optional and can be disabled at any time.',
      'We never sell personal information or share it with third parties without consent.',
    ],
  },
  {
    heading: 'Billing security',
    body: 'Payments are processed securely through our trusted payment partners.',
  },
]

export default function ContentSection({
  title = 'Privacy Policy',
  intro = 'This policy explains how Harbor Wellness Studio collects, uses, and protects your information.',
  sections = defaultSections,
  className = '',
}: Partial<ContentSectionProps>) {
  return (
    <section className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h1>
          <p className="text-muted-foreground">{intro}</p>
        </div>
        <Separator className="my-8" />
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
              {Array.isArray(section.body) ? (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">{section.body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
