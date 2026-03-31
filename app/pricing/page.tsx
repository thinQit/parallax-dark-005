export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import VehicleCard from '@/components/VehicleCard'
import CTAParallaxPanel from '@/components/CTAParallaxPanel'

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="Clear pricing. Premium execution."
          subheadline="Choose a package or request a custom build. Every project includes performance budgets and cinematic polish."
          primaryCta={{ label: 'Get a Recommendation', href: '/contact#intake' }}
          secondaryCta={{ label: 'View Work', href: '/work' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577660/site-images/automotive/28852335.jpg"
        />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <VehicleCard name="Ignition Sprint" price="$6,800" timeline="2–3 weeks" />
          <VehicleCard name="Apex Website" price="$12,500" timeline="4–6 weeks" />
          <VehicleCard name="Night Run Brand System" price="From $22,000" timeline="6–10 weeks" />
        </div>
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up">
        <CTAParallaxPanel />
      </AnimatedContent>
    </div>
  )
}
