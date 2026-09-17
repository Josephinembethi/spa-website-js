"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      {/* ---------- Heading Strip ---------- */}
      <section className="pt-40 pb-16 px-6 bg-[var(--color-maroon)] text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-white)] mb-3">
          Get in Touch
        </h1>
        <p className="text-[var(--color-white)]/80 max-w-xl mx-auto">
          Have a question, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      {/* ---------- Contact Details + Form ---------- */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-[var(--color-charcoal)] mb-8">
              Contact Details
            </h2>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-[var(--color-maroon)] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Address</p>
                  <p className="text-[var(--color-charcoal)]/70 text-sm">
                    Kamakis,Ruiru
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={24} className="text-[var(--color-maroon)] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Phone</p>
                  <p className="text-[var(--color-charcoal)]/70 text-sm">0141608535</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={24} className="text-[var(--color-maroon)] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Email</p>
                  <p className="text-[var(--color-charcoal)]/70 text-sm">zeslynspa@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={24} className="text-[var(--color-maroon)] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Hours</p>
                  <p className="text-[var(--color-charcoal)]/70 text-sm">
                    Mon–Sat: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </li>
            </ul>

            {/* Prefer to book instead nudge */}
            <div className="mt-10 p-6 rounded-2xl bg-[var(--color-white)] shadow-sm">
              <p className="text-[var(--color-charcoal)] mb-4">
                Prefer to book a session directly?
              </p>
              <Link
                href="/booking"
                className="inline-block bg-[var(--color-maroon)] text-[var(--color-white)] px-6 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-maroon-dark)] transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-[var(--color-charcoal)] mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--color-maroon)] text-[var(--color-white)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-maroon-dark)] transition-colors duration-300 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}