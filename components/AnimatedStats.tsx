'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface StatItem {
  label: string
  value: number
  suffix?: string
}
interface AnimatedStatsProps {
  stats?: StatItem[]
}

export default function AnimatedStats({
  stats = [
    { label: 'Campaigns Shipped', value: 180, suffix: '+' },
    { label: 'Avg ROAS Lift', value: 240, suffix: '%' },
    { label: 'Qualified Leads', value: 12000, suffix: '+' },
  ],
}: Partial<AnimatedStatsProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStart(true), { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <AnimatedContent>
      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-[#111111] p-6 text-center text-white">
            <p className="text-4xl font-bold text-cyan-300">{start ? s.value : 0}{s.suffix || ''}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </AnimatedContent>
  )
}
