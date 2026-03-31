export const dynamic = 'force-dynamic';

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import ReactBitsHeroStarfield from '@/components/ReactBitsHeroStarfield'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <AnimatedContent className="animate-fade-in-up">
        <ReactBitsHeroStarfield
          headline="Let’s spec your next launch."
          subheadline="Share your goal and timeline. We’ll recommend the best build and send next steps within 1 business day."
          primaryCta={{ label: 'Fill the Intake', href: '/contact#intake' }}
          secondaryCta={{ label: 'Email Us', href: 'mailto:hello@auroradigital.studio' }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,g_auto,q_auto:best,f_auto/v1771577674/site-images/automotive/13065694.jpg"
        />
      </AnimatedContent>
      <AnimatedContent className="animate-fade-in-up bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ContactForm />
        </div>
      </AnimatedContent>
    </div>
  )
}
