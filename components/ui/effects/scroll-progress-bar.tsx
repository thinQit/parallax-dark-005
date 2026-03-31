'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollProgressBarProps {
  className?: string
}

export function ScrollProgressBar({ className }: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const current = doc.scrollTop
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className={cn('h-1 w-full origin-left', className)} style={{ width: `${progress}%` }} />
}

export default ScrollProgressBar
