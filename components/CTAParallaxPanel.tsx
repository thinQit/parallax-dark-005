'use client'

import { Button } from '@/components/ui/button'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface CTAParallaxPanelProps {
  title?: string
  subtitle?: string
}

export default function CTAParallaxPanel({
  title = 'Ready to Build Your Next Performance Engine?',
  subtitle = 'Book a strategy call and get a custom growth roadmap in 48 hours.',
}: Partial<CTAParallaxPanelProps>) {
  return (
    <ParallaxSection className="py-24">
      <AnimatedContent>
        <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-400/25 bg-[#0A0A0A]/80 p-10 text-center text-white shadow-[0_0_100px_-50px_rgba(6,182,212,0.7)]">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="mt-3 text-white/75">{subtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Book Strategy Call</Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">See Pricing</Button>
          </div>
        </div>
      </AnimatedContent>
    </ParallaxSection>
  )
}
