'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface FooterProps {
  companyName?: string
}

export default function Footer({ companyName = 'Aurora Digital Studio' }: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] text-white">
      <AnimatedContent>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">{companyName}</h3>
            <p className="mt-3 text-sm text-white/70">Cinematic digital experiences for performance-first brands.</p>
          </div>
          <div>
            <h4 className="font-medium">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li className="flex items-center gap-2"><Mail size={14} /> hello@auroradigital.studio</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +1 (415) 555-0199</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#inventory">Featured Work</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Social</h4>
            <div className="mt-3 flex gap-3">
              <Link href="#" className="rounded-lg border border-white/15 p-2 hover:border-cyan-400"><Instagram size={16} /></Link>
              <Link href="#" className="rounded-lg border border-white/15 p-2 hover:border-cyan-400"><Linkedin size={16} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/55">
          © {new Date().getFullYear()} {companyName}. All rights reserved. Privacy · Terms
        </div>
      </AnimatedContent>
    </footer>
  )
}
