"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Swedish Massage",
    description: "A gentle, flowing massage that eases tension and promotes deep relaxation.",
    image: "/images/swedish_massage.jpg",
    href: "/services",
  },
  {
    name: "Hot Stone Massage",
    description: "Warm stones melt away muscle stiffness while soothing your mind and body.",
    image: "/images/stone_massage.jpg",
    href: "/services",
  },
  {
    name: "Facials",
    description: "Rejuvenating treatments that cleanse, hydrate, and restore your skin's natural glow.",
    image: "/images/facial_treatment.jpg",
    href: "/services",
  },
];

export default function ServicesPreview() {
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
      className={`py-24 px-6 bg-[var(--color-white)] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="uppercase tracking-widest text-sm text-[var(--color-gold)] font-medium">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mt-3">
          Treatments Designed for You
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-[var(--color-cream)]">
              <h3 className="text-xl font-serif font-semibold text-[var(--color-maroon)] mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/80 leading-relaxed">
                {service.description}
              </p>
            </div>
            
          </Link>
          
        ))}
      </div>
       <div className="text-center mt-14">
        <Link
          href="/services"
          className="inline-block border-2 border-[var(--color-maroon)] text-[var(--color-maroon)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-maroon)] hover:text-[var(--color-white)] transition-colors duration-300"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}