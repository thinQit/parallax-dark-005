"use client";
import { Particles } from "@/components/ui/backgrounds/particles";
import { GlitchText } from "@/components/ui/text/glitch-text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroStarfieldProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroStarfield({
  headline = "Precision Performance. Premium Inventory.",
  subheadline = "Discover handpicked luxury and performance vehicles, flexible financing, and expert service built for serious drivers.",
  primaryCta = { label: "Explore Inventory", href: "#inventory" },
  secondaryCta = { label: "Get Pre-Approved", href: "#financing" },
}: Partial<HeroStarfieldProps>) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Particles particleCount={120} particleColor="#a855f7" trailColor="#06b6d4" maxSize={2} />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-foreground animate-fade-in-up">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <GlitchText>{headline}</GlitchText>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center"
        >
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta?.href || "#"}>{primaryCta?.label || ""}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border text-foreground hover:bg-accent transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
