"use client";
import React from "react";
import { CountUp } from "@/components/ui/text/count-up";
import { AnimatedContent } from "@/components/ui/effects/animated-content";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsRibbonProps {
  stats: Stat[];
  headline?: string;
}

export default function StatsRibbon({
  stats = [
    { value: 2500, suffix: "+", label: "Vehicles Delivered" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Availability" },
    { value: 120, suffix: "+", label: "Performance Builds" },
  ],
  headline = "Trusted by Drivers Who Demand More",
}: Partial<StatsRibbonProps>) {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        {headline && (
          <AnimatedContent animation="fadeUp">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          </AnimatedContent>
        )}
        <div className={"grid gap-8 text-center " + (stats.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-4")}>
          {stats.map(function (stat, i) {
            return (
              <AnimatedContent key={i} animation="fadeUp" delay={i * 0.15}>
                <div className="card-hover flex flex-col items-center rounded-xl border border-border bg-card p-6">
                  <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    <CountUp target={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} duration={2.5} />
                  </span>
                  <span className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{stat.label}</span>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
