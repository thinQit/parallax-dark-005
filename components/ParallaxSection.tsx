'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface Layer {
  imageSrc: string
  speed?: number
  opacity?: number
}

interface ParallaxSectionProps {
  layers?: Layer[]
  children?: React.ReactNode
  className?: string
}

export default function ParallaxSection({
  layers = [
    {
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577653/site-images/automotive/15684925.jpg',
      speed: 0.25,
      opacity: 0.25,
    },
  ],
  children = null,
  className = '',
}: Partial<ParallaxSectionProps>) {
  const { scrollY } = useScroll()

  return (
    <section className={'relative overflow-hidden ' + className}>
      {layers.map((layer, i) => {
        const y = useTransform(scrollY, [0, 1200], [0, (layer.speed || 0.2) * 220])
        return (
          <motion.div key={i} style={{ y }} className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: 'url(' + layer.imageSrc + ')', opacity: layer.opacity || 0.3 }}
            />
          </motion.div>
        )
      })}
      <div className="relative z-10">
        <AnimatedContent>{children}</AnimatedContent>
      </div>
    </section>
  )
}
