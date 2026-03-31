export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import ServiceCard3D from '@/components/ServiceCard3D'
import CTAParallaxPanel from '@/components/CTAParallaxPanel'

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="Services built for speed, polish, and conversion."
          subheadline="Cinematic design, motion storytelling, and performance tuning—packaged like a high-end build sheet."
          primaryCta={{ label: 'Get a Recommendation', href: '/contact#intake' }}
          secondaryCta={{ label: 'See Pricing', href: '/pricing' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577668/site-images/automotive/13065693.jpg"
        />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 perspective-1000 preserve-3d">
          <ServiceCard3D />
          <ServiceCard3D />
          <ServiceCard3D />
          <ServiceCard3D />
        </div>
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up">
        <CTAParallaxPanel />
      </AnimatedContent>
    </div>
  )
}
