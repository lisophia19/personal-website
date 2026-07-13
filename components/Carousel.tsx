"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (dir: number) => {
    setCurrent(i => (i + dir + slides.length) % slides.length);
  };

  return (
    <div
      className="relative max-w-xl mx-auto my-8 rounded-xl overflow-hidden"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
    >
      <div className="relative w-full h-[500px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover rounded-xl"
              style={{ objectPosition: slide.objectPosition ?? "center" }}
              sizes="(max-width: 768px) 100vw, 576px"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-4 text-white text-center font-medium rounded-b-xl"
              style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
            >
              {slide.caption}
            </div>
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={() => go(-1)}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 z-10"
          style={{ backgroundColor: "rgba(255,255,255,0.8)", color: "var(--dark)", border: "none", cursor: "pointer" }}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 z-10"
          style={{ backgroundColor: "rgba(255,255,255,0.8)", color: "var(--dark)", border: "none", cursor: "pointer" }}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                transform: i === current ? "scale(1.2)" : "scale(1)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
