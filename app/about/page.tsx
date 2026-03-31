export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import AnimatedStats from '@/components/AnimatedStats'
import CTAParallaxPanel from '@/components/CTAParallaxPanel'

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="A studio built on precision and pace."
          subheadline="We borrow from performance design: clear systems, tight execution, and cinematic storytelling."
          primaryCta={{ label: 'Meet the Team', href: '/about#team' }}
          secondaryCta={{ label: 'How We Work', href: '/about#process' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577653/site-images/automotive/15684925.jpg"
        />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <AnimatedStats />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up">
        <CTAParallaxPanel />
      </AnimatedContent>
    </div>
  )
}
