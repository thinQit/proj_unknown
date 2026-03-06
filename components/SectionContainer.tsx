import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children?: ReactNode
  className?: string
  background?: 'default' | 'muted' | 'gradient'
  id?: string
}

export default function SectionContainer({
  children = null,
  className = '',
  background = 'default',
  id = '',
}: Partial<SectionContainerProps>) {
  const backgroundClass =
    background === 'muted'
      ? 'bg-muted/50'
      : background === 'gradient'
      ? 'bg-gradient-to-b from-white via-[#F0F4F8] to-white'
      : 'bg-background'

  return (
    <section id={id} className={cn('py-20 md:py-24', backgroundClass, className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
