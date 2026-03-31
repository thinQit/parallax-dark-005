'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface HorizontalScrollGalleryProps {
  images?: string[]
}

export default function HorizontalScrollGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577668/site-images/automotive/13065693.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577673/site-images/automotive/10490623.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577660/site-images/automotive/28852335.jpg',
  ],
}: Partial<HorizontalScrollGalleryProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      el.scrollLeft += e.deltaY
      setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth || 1))
    }
    el.addEventListener('wheel', onWheel)
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className="bg-[#0A0A0A] py-20">
      <AnimatedContent>
        <div className="mx-auto max-w-7xl px-6">
          <div ref={ref} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {images.map((src, idx) => (
              <div key={idx} className="relative h-[320px] min-w-[85%] snap-center overflow-hidden rounded-xl border border-white/10 md:min-w-[50%]">
                <Image src={src} alt={'gallery-' + idx} fill unoptimized className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-4 h-1 rounded bg-white/10">
            <div className={cn('h-1 rounded bg-cyan-400')} style={{ width: progress * 100 + '%' }} />
          </div>
        </div>
      </AnimatedContent>
    </section>
  )
}
