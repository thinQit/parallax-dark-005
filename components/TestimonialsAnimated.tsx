"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "What Drivers Say",
  subheadline = "Real feedback from owners who chose us for their next vehicle and long-term service.",
  testimonials = [
    {
      quote: "The buying process was fast, transparent, and premium from first call to delivery.",
      name: "Marcus Reed",
      designation: "M4 Competition Owner",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577321/site-images/team-people/1181622.jpg",
    },
    {
      quote: "Their team found the exact spec I wanted and handled financing in one afternoon.",
      name: "Elena Brooks",
      designation: "AMG C63 Owner",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577363/site-images/team-people/12903169.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  var [current, setCurrent] = useState(0);

  useEffect(
    function () {
      if (!autoplay || testimonials.length === 0) return;
      var timer = setInterval(function () {
        setCurrent(function (c) {
          return (c + 1) % testimonials.length;
        });
      }, 5000);
      return function () {
        clearInterval(timer);
      };
    },
    [autoplay, testimonials.length]
  );

  var t = testimonials[current];

  if (!t) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <AnimatedContent animation="fadeUp">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
        </AnimatedContent>
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 card-hover">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full border border-border">
                <Image src={t.src} alt={t.name} width={64} height={64} unoptimized className="h-full w-full object-cover" />
              </div>
              <blockquote className="text-lg md:text-xl italic text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.designation}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map(function (_, i) {
              return (
                <button
                  key={i}
                  onClick={function () {
                    setCurrent(i);
                  }}
                  className={"h-2 rounded-full transition-all " + (i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30")}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
