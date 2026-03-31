'use client'

import { Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface ServiceCard3DProps {
  title?: string
  description?: string
  items?: string[]
}

export default function ServiceCard3D({
  title = 'Creative Direction',
  description = 'From concept to rollout, we shape an aesthetic that performs across channels.',
  items = ['Narrative Blueprint', 'Visual Language', 'Campaign Playbook'],
}: Partial<ServiceCard3DProps>) {
  return (
    <AnimatedContent>
      <div className="[perspective:1000px]">
        <Card className="group rounded-xl border border-cyan-500/25 bg-[#111111] p-6 text-white transition duration-300 hover:rotate-x-2 hover:-rotate-y-2 hover:shadow-[0_18px_50px_-24px_rgba(34,211,238,0.55)]">
          <div className="mb-4 inline-flex rounded-lg bg-cyan-500/15 p-2 text-cyan-300"><Sparkles size={16} /></div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-white/75">{description}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {items.map((item, idx) => <li key={idx}>• {item}</li>)}
          </ul>
        </Card>
      </div>
    </AnimatedContent>
  )
}
