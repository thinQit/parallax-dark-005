"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Wrench, Gauge, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ParallaxFeatureSectionProps {
  headline: string;
  description: string;
  imageUrl: string;
  imageOnRight?: boolean;
  features?: { icon: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ParallaxFeatureSection({
  headline = "Performance Services, Engineered for Precision",
  description = "From diagnostics to complete performance upgrades, our certified technicians combine motorsport-grade expertise with transparent service.",
  imageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577674/site-images/automotive/13065694.jpg",
  imageOnRight = true,
  features = [
    { icon: "Wrench", title: "Certified Performance Tuning", description: "Custom ECU mapping and dyno-tested calibrations." },
    { icon: "ShieldCheck", title: "Warranty-Backed Service", description: "Every major service includes documented quality checks." },
    { icon: "Gauge", title: "Advanced Diagnostics", description: "Dealer-level scan tools and real-time telemetry analysis." },
  ],
  ctaLabel = "Book Service",
  ctaHref = "#contact",
}: Partial<ParallaxFeatureSectionProps>) {
  var ref = useRef<HTMLDivElement>(null);
  var { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  var imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  var textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const iconMap: Record<string, React.ElementType> = {
    Wrench,
    ShieldCheck,
    Gauge,
    Sparkles,
  };

  var imageCol = (
    <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card card-hover">
      <Image src={imageUrl} alt={headline} fill unoptimized className="object-cover transition-transform duration-500 hover:scale-105" />
    </motion.div>
  );

  var textCol = (
    <motion.div style={{ y: textY }} className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">{headline}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      {features && features.length > 0 && (
        <div className="mt-8 grid gap-4">
          {features.map(function (f, i) {
            const IconComp = iconMap[f.icon] || Sparkles;
            return (
              <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-4 card-hover">
                <span className="text-primary">
                  <IconComp className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <Button className="transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden bg-muted">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className={"grid items-center gap-12 md:gap-16 md:grid-cols-2 " + (imageOnRight ? "" : "md:[direction:rtl] md:[&>*]:[direction:ltr]")}>
          {imageOnRight ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
