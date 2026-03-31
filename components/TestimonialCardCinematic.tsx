'use client'

import { Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface TestimonialCardCinematicProps {
  quote?: string
  name?: string
  role?: string
  metric?: string
}

export default function TestimonialCardCinematic({
  quote = 'Aurora rebuilt our digital presence into a premium funnel that finally matched our product.',
  name = 'Nina Alvarez',
  role = 'CMO, Apex Mobility',
  metric = '3.2x ROAS',
}: Partial<TestimonialCardCinematicProps>) {
  return (
    <AnimatedContent>
      <Card className="rounded-xl border border-white/10 bg-[#111111] p-6 text-white transition hover:-translate-y-1">
        <Quote className="text-cyan-400" />
        <p className="mt-4 text-white/85">{quote}</p>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-white/60">{role}</p>
          </div>
          <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300">{metric}</span>
        </div>
      </Card>
    </AnimatedContent>
  )
}
