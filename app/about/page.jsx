"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, ShieldCheck, Clock } from "lucide-react";
import Booking from "../components/Home/Booking";

const stats = [
  { number: "2+", label: "Years of Experience" },
  { number: "400+", label: "Clients Served" },
];

const reasons = [
  { icon: Heart, title: "Personalized Care", description: "Every treatment is tailored to your unique needs and preferences." },
  { icon: Sparkles, title: "Premium Products", description: "We use only quality oils, tools, and products for every session." },
  { icon: ShieldCheck, title: "Certified Therapists", description: "Our team is trained, experienced, and passionate about wellness." },
  { icon: Clock, title: "Flexible Booking", description: "Book a session that fits your schedule, with easy rescheduling." },
];

const testimonials = [
  { quote: "The most relaxing experience I've had in years. The staff truly cares about their clients.", name: "Amina W." },
  { quote: "Booked a hot stone massage and left feeling like a completely new person. Highly recommend!", name: "James K." },
  { quote: "Clean, calming, and professional. Zeslyn has become my monthly self-care ritual.", name: "Grace M." },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Zeslyn Massage & Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenBurns"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[var(--color-white)] mb-4">
            Our Story
          </h1>
          <p className="text-lg text-[var(--color-white)]/90 mb-8 max-w-xl">
            Discover the passion and care behind every treatment at Zeslyn Massage & Spa.
          </p>
          <Link
            href="/booking"
            className="bg-[var(--color-gold)] text-[var(--color-charcoal)] px-8 py-3 rounded-full font-medium text-lg hover:bg-[var(--color-white)] transition-colors duration-300"
          >
            Book Your Session
          </Link>
        </div>
      </section>

      {/* ---------- Our Story ---------- */}
      <section className="py-24 px-6 bg-[var(--color-cream)] animate-fadeIn">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/massage_bed.jpg"
              alt="Our Story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="uppercase tracking-widest text-sm text-[var(--color-gold)] font-medium">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mt-3 mb-6">
              A Legacy of Relaxation
            </h2>
            <p className="text-[var(--color-charcoal)]/80 leading-relaxed mb-4">
              Zeslyn Massage & Spa was founded on a simple belief: everyone deserves a
              space to slow down, breathe, and reconnect with themselves. What started
              as a small, humble practice has grown into a sanctuary trusted by clients
              who value genuine care over rushed routines.
            </p>
            <p className="text-[var(--color-charcoal)]/80 leading-relaxed">
              Every treatment we offer is rooted in traditional techniques, refined
              through years of practice, and delivered with a personal touch that
              makes each visit feel like coming home.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="py-20 px-6 bg-[var(--color-white)] animate-fadeIn">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-black)] mb-2">
                {stat.number}
              </p>
              <p className="text-[var(--color-blacl)]/80 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="py-24 px-6 bg-[var(--color-white)] animate-fadeIn">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="uppercase tracking-widest text-sm text-[var(--color-gold)] font-medium">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mt-3">
            The Zeslyn Difference
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-cream)] flex items-center justify-center mx-auto mb-4">
                <Icon size={28} className="text-[var(--color-maroon)]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[var(--color-charcoal)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="py-24 px-6 bg-[var(--color-cream)] text-center">
        <div className="max-w-2xl mx-auto">
          <span className="uppercase tracking-widest text-sm text-[var(--color-gold)] font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mt-3 mb-10">
            What Our Clients Say
          </h2>

          <p
            key={currentIndex}
            className="text-lg md:text-xl text-[var(--color-charcoal)]/80 italic leading-relaxed mb-6 animate-fadeIn"
          >
            "{testimonials[currentIndex].quote}"
          </p>
          <p className="text-[var(--color-maroon)] font-medium">
            — {testimonials[currentIndex].name}
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-[var(--color-gold)]"
                    : "bg-[var(--color-maroon)]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Booking CTA ---------- */}
      <Booking />
    </main>
  );
}