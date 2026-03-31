'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AuroraBackground from '@/components/ui/backgrounds/aurora-background'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface ReactBitsHeroStarfieldProps {
  imageSrc?: string
}

export default function ReactBitsHeroStarfield({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577645/site-images/automotive/11167873.jpg',
}: Partial<ReactBitsHeroStarfieldProps>) {
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 800], [0, 180])
  const yCar = useTransform(scrollY, [0, 800], [0, -60])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <AuroraBackground className="h-full w-full" />
      </motion.div>
      <motion.div style={{ y: yCar }} className="absolute inset-0">
        <Image src={imageSrc} alt="hero vehicle" fill unoptimized className="object-cover opacity-35" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-[#09090b]" />
      <AnimatedContent>
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Cinematic Growth Systems for <span className="text-cyan-400">Performance Brands</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Aurora Digital Studio blends strategy, design, and immersive motion to turn attention into booked revenue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Start Project</Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Case Studies</Button>
          </div>
        </div>
      </AnimatedContent>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
        <ChevronDown className="animate-bounce" />
      </div>
    </section>
  )
}
