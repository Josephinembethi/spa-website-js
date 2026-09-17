"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero.jpg",
    tagline: "Relax.",
    subtext: "Let go of stress in a space designed for stillness.",
  },
  {
    image: "/images/hero3.jpg",
    tagline: "Restore.",
    subtext: "Skilled hands, healing touch, renewed energy.",
  },
  {
    image: "/images/massage.jpg",
    tagline: "Rejuvenate.",
    subtext: "Leave feeling lighter, calmer, and recharged.",
  },
  {
    image: "/images/massageA.jpg",
    tagline: "Unwind.",
    subtext: "Every session is a step back to yourself.",
  },
  {
    image: "/images/stone_massage.jpg",
    tagline: "Reconnect.",
    subtext: "Mind and body, brought back into balance.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image layers, stacked and faded in/out */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
         <Image
  src={slide.image}
  alt={slide.tagline}
  fill
  priority={index === 0}
  sizes="100vw"
  className="object-cover"
/>
          {/* Dark overlay so text stays readable over any image */}
          <div className="absolute inset-0 bg-[var(--color-charcoal)]/40" />
        </div>
      ))}

      {/* Text content, sits above the image layers */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          key={currentIndex}
          className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-white)] mb-4 transition-opacity duration-1000 animate-fadeIn"
        >
          {slides[currentIndex].tagline}
        </h1>
        <p
          key={`${currentIndex}-subtext`}
          className="text-lg md:text-xl text-[var(--color-white)]/90 mb-8 max-w-xl animate-fadeIn"
        >
          {slides[currentIndex].subtext}
        </p>
        <Link
          href="/booking"
          className="bg-[var(--color-gold)] text-[var(--color-charcoal)] px-8 py-3 rounded-full font-medium text-lg hover:bg-[var(--color-white)] transition-colors duration-300"
        >
          Book Your Session
        </Link>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-[var(--color-gold)]"
                : "bg-[var(--color-white)]/50"
            }`}
          />
        ))}
      </div>
    </section>
    
  );
}