"use client";

import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = "Ready to Drive Your Next Performance Machine?",
  description = "Get pre-approved in minutes and unlock exclusive pricing on premium inventory.",
  ctaLabel = "Start Financing",
  ctaHref = "#financing",
  secondaryCtaLabel = "Browse Inventory",
  secondaryCtaHref = "#inventory",
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{headline}</h2>
        {description && <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8 transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
