import './globals.css'
import { Rajdhani, Barlow } from 'next/font/google'
import { ScrollProgressBar } from '@/components/ui/effects/scroll-progress-bar'
import { SmoothScroll } from '@/components/ui/effects/smooth-scroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const heading = Rajdhani({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const body = Barlow({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const footerColumns = [
    {
      title: 'Studio',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Work', href: '/work' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'hello@auroradigital.studio', href: 'mailto:hello@auroradigital.studio' },
        { label: '+1 (323) 555-0188', href: 'tel:+13235550188' },
        { label: 'Los Angeles, CA', href: '/contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com/' },
        { label: 'Behance', href: 'https://www.behance.net/' },
        { label: 'Vimeo', href: 'https://vimeo.com/' },
      ],
    },
  ]

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="film-grain pointer-events-none fixed inset-0 z-[60] opacity-30" />
        <Navbar logo="Aurora Digital Studio" navItems={navItems} ctaLabel="Book a Call" ctaHref="/contact" />
        <ScrollProgressBar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <Footer
          brand="Aurora Digital Studio"
          description="Cinematic websites with performance under the hood."
          columns={footerColumns}
          copyright="© 2026 Aurora Digital Studio. All rights reserved."
        />
      </body>
    </html>
  )
}
