'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AnimatedContent from '@/components/ui/effects/animated-content'

interface ContactFormProps {
  heading?: string
}

export default function ContactForm({ heading = 'Start Your Project' }: Partial<ContactFormProps>) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-[#09090b] py-20 text-white">
      <AnimatedContent>
        <div className="mx-auto max-w-2xl px-6">
          <h3 className="text-3xl font-bold">{heading}</h3>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              if (name && email && message) setSubmitted(true)
            }}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-white/5 text-white" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-white/5 text-white" />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Project goals"
              className="min-h-[120px] w-full rounded-md border border-white/15 bg-white/5 p-3 text-sm text-white outline-none focus:border-cyan-400"
            />
            <Button type="submit" className="w-full bg-cyan-500 text-black hover:bg-cyan-400">Send Inquiry</Button>
            {submitted && <p className="text-sm text-cyan-300">Thanks! Your message is ready for backend wiring.</p>}
          </form>
        </div>
      </AnimatedContent>
    </section>
  )
}
