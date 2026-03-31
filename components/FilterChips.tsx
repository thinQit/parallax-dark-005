'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface FilterChipsProps {
  chips?: string[]
}

export default function FilterChips({
  chips = ['Lead Gen', '4-6 Weeks', 'Video + Ads', 'Web Funnel', 'Brand Sprint'],
}: Partial<FilterChipsProps>) {
  const [active, setActive] = useState<string[]>([])

  const toggle = (chip: string) => {
    setActive((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]))
  }

  return (
    <AnimatedContent>
      <div className="flex flex-wrap gap-3">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => toggle(chip)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition',
              active.includes(chip)
                ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300'
                : 'border-white/15 bg-white/5 text-white/75 hover:border-white/30'
            )}
          >
            {chip}
          </button>
        ))}
      </div>
    </AnimatedContent>
  )
}
