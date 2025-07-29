'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl',
      glass: 'glass-card',
      gradient: 'gradient-border bg-white/5 backdrop-blur-lg rounded-2xl'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'p-6 transition-all duration-300 hover:shadow-xl',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card } 