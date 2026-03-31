export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery'
import FeaturedWorkSlide from '@/components/FeaturedWorkSlide'
import TestimonialCardCinematic from '@/components/TestimonialCardCinematic'
import CTAParallaxPanel from '@/components/CTAParallaxPanel'

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="Work that looks premium—and performs."
          subheadline="A cinematic reel of recent launches, built with performance budgets and conversion structure."
          primaryCta={{ label: 'Book a Call', href: '/contact' }}
          secondaryCta={{ label: 'See Services', href: '/services' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577673/site-images/automotive/10490623.jpg"
        />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <HorizontalScrollGallery>
          <FeaturedWorkSlide />
          <FeaturedWorkSlide />
          <FeaturedWorkSlide />
        </HorizontalScrollGallery>
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <TestimonialCardCinematic />
          <TestimonialCardCinematic />
        </div>
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up">
        <CTAParallaxPanel />
      </AnimatedContent>
    </div>
  )
}
