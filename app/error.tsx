'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <h2 className="text-3xl font-semibold">Something went off track.</h2>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </div>
  )
}
