'use client'

import { Gauge, Timer } from 'lucide-react'
import { Card } from '@/components/ui/card'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface VehicleCardProps {
  name?: string
  price?: string
  timeline?: string
  specs?: string[]
  target?: string
}

export default function VehicleCard({
  name = 'Performance Launch Package',
  price = '$8,500',
  timeline = '4-6 Weeks',
  specs = ['Cinematic Brand Film', 'Landing Page', 'Paid Ad Stack', 'Analytics Setup'],
  target = '+35% Qualified Leads',
}: Partial<VehicleCardProps>) {
  return (
    <AnimatedContent>
      <Card className="rounded-xl border border-white/10 bg-[#111111] p-6 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-3xl font-bold text-cyan-400">{price}</p>
        <div className="mt-4 flex gap-4 text-sm text-white/75">
          <span className="flex items-center gap-1"><Timer size={14} /> {timeline}</span>
          <span className="flex items-center gap-1"><Gauge size={14} /> {target}</span>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-white/80">
          {specs.map((s, i) => <li key={i}>• {s}</li>)}
        </ul>
      </Card>
    </AnimatedContent>
  )
}
