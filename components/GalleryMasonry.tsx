"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Behind the Build",
  subheadline = "A closer look at our featured performance vehicles, detailing studio, and delivery moments.",
  images = [
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577668/site-images/automotive/13065693.jpg",
      alt: "Sports coupe in showroom lighting",
      caption: "Premium indoor delivery bay",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577673/site-images/automotive/10490623.jpg",
      alt: "Luxury vehicle exterior detail",
      caption: "Ceramic coating finish",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577657/site-images/automotive/14781912.jpg",
      alt: "Performance sedan on road",
      caption: "Road-tested precision",
    },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function (img, i) {
            return (
              <div
                key={i}
                className="card-hover group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-primary-foreground">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={1400}
                height={900}
                unoptimized
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
