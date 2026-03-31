'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface FeaturedWorkSlideProps {
  imageSrc?: string
  client?: string
  services?: string[]
  metric?: string
}

export default function FeaturedWorkSlide({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577674/site-images/automotive/13065694.jpg',
  client = 'Vanta Motors',
  services = ['Brand Film', 'Paid Social', 'Landing Funnel'],
  metric = '+62% test-drive inquiries',
}: Partial<FeaturedWorkSlideProps>) {
  return (
    <AnimatedContent>
      <Card className="overflow-hidden rounded-xl border border-white/10 bg-[#111111] text-white">
        <div className="relative h-64">
          <Image src={imageSrc} alt={client} fill unoptimized className="object-cover" />
        </div>
        <div className="p-5">
          <p className="text-sm text-cyan-300">{client}</p>
          <h4 className="mt-1 text-lg font-semibold">{metric}</h4>
          <p className="mt-2 text-sm text-white/70">{services.join(' · ')}</p>
        </div>
      </Card>
    </AnimatedContent>
  )
}
