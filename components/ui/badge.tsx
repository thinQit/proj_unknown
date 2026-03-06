import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline'
}

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const variantClass =
    variant === 'secondary'
      ? 'bg-muted text-muted-foreground'
      : variant === 'outline'
      ? 'border border-border text-foreground'
      : 'bg-[#0077B6] text-white'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantClass,
        className
      )}
      {...props}
    />
  )
}
