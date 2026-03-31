export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import HorizontalScrollGallery from '@/components/HorizontalScrollGallery'
import VehicleCard from '@/components/VehicleCard'
import ServiceCard3D from '@/components/ServiceCard3D'
import FilterChips from '@/components/FilterChips'
import FeaturedWorkSlide from '@/components/FeaturedWorkSlide'
import TestimonialCardCinematic from '@/components/TestimonialCardCinematic'
import AnimatedStats from '@/components/AnimatedStats'
import CTAParallaxPanel from '@/components/CTAParallaxPanel'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="Launch brands like performance machines."
          subheadline="Cinematic brand launches engineered for speed, clarity, and conversion."
          primaryCta={{ label: 'Book a 20‑min Strategy Call', href: '/contact' }}
          secondaryCta={{ label: 'View Work Reel', href: '/work' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577645/site-images/automotive/11167873.jpg"
        />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <VehicleCard name="Ignition Sprint" price="$6,800" timeline="2–3 weeks" />
          <VehicleCard name="Apex Website" price="$12,500" timeline="4–6 weeks" />
          <VehicleCard name="Night Run Brand System" price="From $22,000" timeline="6–10 weeks" />
        </div>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FilterChips />
        </div>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <HorizontalScrollGallery>
          <FeaturedWorkSlide />
          <FeaturedWorkSlide />
          <FeaturedWorkSlide />
        </HorizontalScrollGallery>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedStats />
        </div>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4 perspective-1000 preserve-3d">
          <ServiceCard3D />
          <ServiceCard3D />
          <ServiceCard3D />
          <ServiceCard3D />
        </div>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          <TestimonialCardCinematic />
          <TestimonialCardCinematic />
          <TestimonialCardCinematic />
          <TestimonialCardCinematic />
        </div>
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up">
        <CTAParallaxPanel />
      </AnimatedContent>

      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ContactForm />
        </div>
      </AnimatedContent>
    </div>
  )
}
