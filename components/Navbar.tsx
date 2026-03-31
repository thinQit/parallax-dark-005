'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import AnimatedContent from '@/components/ui/effects/animated-content'
import ScrollProgressBar from '@/components/ui/effects/scroll-progress-bar'

interface NavbarProps {
  logoText?: string
  links?: { label: string; href: string }[]
}

export default function Navbar({
  logoText = 'Aurora Digital Studio',
  links = [
    { label: 'Hero', href: '#hero' },
    { label: 'Inventory', href: '#inventory' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}: Partial<NavbarProps>) {
  const [active, setActive] = useState('#hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
      let current = '#hero'
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) current = '#' + section.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <ScrollProgressBar className="h-1 bg-cyan-500/80" />
      <AnimatedContent>
        <nav className="mx-auto mt-3 w-[95%] max-w-7xl rounded-xl border border-white/10 bg-[#09090b]/80 px-4 py-3 backdrop-blur-md md:px-6">
          <div className="flex items-center justify-between">
            <Link href="#hero" className="font-semibold tracking-wide text-white">
              {logoText}
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-sm text-white/75 transition hover:text-white',
                    active === link.href && 'text-white'
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute -bottom-2 left-0 h-[2px] w-full bg-cyan-400"
                    />
                  )}
                </Link>
              ))}
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Book Strategy Call</Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
          {open && (
            <div className="mt-4 space-y-3 md:hidden">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="block text-white/85" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </AnimatedContent>
    </header>
  )
}
