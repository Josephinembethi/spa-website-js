"use client";

import { useState } from "react";

const services = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Hot Stone Massage",
  "Body Treatment",
  "Facial Treatment",
  "Manicure and Pedicure",
  "Hand and Foot Care",
];

const WHATSAPP_NUMBER = "254141608535";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Zeslyn Massage & Spa, I'd like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Notes: ${formData.notes || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main>
      <section className="pt-40 pb-16 px-6 bg-[var(--color-maroon)] text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-white)] mb-3">
          Book Your Session
        </h1>
        <p className="text-[var(--color-white)]/80 max-w-xl mx-auto">
          Fill in your details below and we'll confirm your appointment over WhatsApp.
        </p>
      </section>

      {/* ---------- Booking Form ---------- */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                Full Name
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
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-charcoal)] mb-1">
                Additional Notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-maroon)] resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--color-maroon)] text-[var(--color-white)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-maroon-dark)] transition-colors duration-300"
            >
              Book via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}