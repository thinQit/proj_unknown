import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText: string
  logoHref: string
  links: NavLink[]
  ctaLabel: string
  ctaHref: string
  className?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({
  logoText = 'Harbor Wellness Studio',
  logoHref = '/',
  links = defaultLinks,
  ctaLabel = 'Book a Class',
  ctaHref = '#contact',
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white/80 backdrop-blur', className)}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={logoHref} className="text-lg font-semibold text-foreground">
          {logoText}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="rounded-lg px-6 py-3 font-medium">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
