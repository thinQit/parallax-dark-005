'use client'

import type { ReactNode } from 'react'

interface AnimatedContentProps {
  children: ReactNode
  className?: string
}

export function AnimatedContent({ children, className = '' }: AnimatedContentProps) {
  return <div className={className}>{children}</div>
}

export default AnimatedContent
