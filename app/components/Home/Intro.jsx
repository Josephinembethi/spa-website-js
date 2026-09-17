"use client";

import { useState, useEffect, useRef } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 bg-[var(--color-cream)] text-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <span className="uppercase tracking-widest text-sm text-[var(--color-gold)] font-medium">
          Welcome to Zeslyn
        </span>

        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mt-3 mb-6">
          Your Sanctuary for Relaxation
        </h2>

        <div className="w-16 h-[2px] bg-[var(--color-gold)] mx-auto mb-6" />

        <p className="text-[var(--color-charcoal)]/80 leading-relaxed">
          At Zeslyn Massage & Spa, we believe true relaxation is more than a treatment —
          it&apos;s an experience. Step into a space designed to quiet the mind, ease the
          body, and restore balance to your everyday life. Every visit is crafted around
          you, with care, intention, and a touch of quiet luxury.
        </p>
      </div>
    </section>
  );
}