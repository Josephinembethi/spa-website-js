import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testomonials" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-maroon-dark)] text-[var(--color-white)] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand block */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-3">
            Zeslyn <span className="text-[var(--color-gold)]">Massage & Spa</span>
          </h3>
          <p className="text-sm text-[var(--color-white)]/80 leading-relaxed">
            A tranquil space to relax, restore, and reconnect with yourself.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-[var(--color-gold)]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-white)]/80 hover:text-[var(--color-gold)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-[var(--color-gold)]">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[var(--color-white)]/80">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>123 Wellness Avenue, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="shrink-0" />
              <span>hello@zeslynspa.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={18} className="mt-0.5 shrink-0" />
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-[var(--color-gold)]">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
           <a   
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-[var(--color-white)]/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[var(--color-white)]/20 text-center text-sm text-[var(--color-white)]/60">
        © {new Date().getFullYear()} Zeslyn Massage & Spa. All rights reserved.
      </div>
    </footer>
  );
}