import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="py-24 px-6 bg-[var(--color-maroon)] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-white)] mb-4">
          Ready to Relax?
        </h2>
        <p className="text-[var(--color-white)]/80 mb-8">
          Book your session today and take the first step toward calm, balance, and renewal.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-[var(--color-gold)] text-[var(--color-charcoal)] px-10 py-4 rounded-full font-medium text-lg hover:bg-[var(--color-white)] transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}