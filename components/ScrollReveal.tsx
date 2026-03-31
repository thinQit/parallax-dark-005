'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
  delayMs?: number
}

export default function ScrollReveal({ children = null, className = '', delayMs = 0 }: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedContent>
      <div
        ref={ref}
        style={{ transitionDelay: delayMs + 'ms' }}
        className={cn(
          'transition-all duration-700',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          className
        )}
      >
        {children}
      </div>
    </AnimatedContent>
  )
}
