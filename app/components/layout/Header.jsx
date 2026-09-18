"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-maroon)] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif font-semibold text-[var(--color-white)] tracking-wide"
        >
          Zeslyn <span className="text-[var(--color-gold)]">Massage & Spa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-[var(--color-gold)] text-[var(--color-charcoal)] px-5 py-2 rounded-full font-medium hover:bg-[var(--color-white)] transition-colors duration-200"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--color-white)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-maroon)] px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--color-gold)] text-[var(--color-charcoal)] px-5 py-2 rounded-full font-medium text-center"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}