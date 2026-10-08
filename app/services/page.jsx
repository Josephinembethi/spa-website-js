import Image from "next/image";
import Link from "next/link";
import Booking from "../components/Home/Booking";

const massageServices = [
  {
    name: "Swedish Massage",
    description:
      "A gentle, flowing massage using long strokes and kneading to ease tension and promote deep relaxation. Ideal for first-time visitors or anyone looking to unwind after a long week.",
    image: "/images/swedish_massage.jpg",
    price:"KSH 8600",
  },
  {
    name: "Deep Tissue Massage",
    description:
      "Targets deeper layers of muscle and connective tissue to relieve chronic tension and stiffness. A firmer-pressure treatment, best suited for those with specific areas of muscle tightness.",
    image: "/images/deep_tissue_massage.jpg",
    price:"KSH 8600",
  },
  {
    name: "Hot Stone Massage",
    description:
      "Warm, smooth stones are placed on key points of the body to melt away muscle stiffness while soothing both body and mind. A deeply calming experience from start to finish.",
    image: "/images/stone_massage.jpg",
    price:"KSH 10000",
  },
  {
    name: "Body Scrub",
    description:
      "A full-body treatment combining exfoliation and nourishing application to leave your skin feeling smooth, refreshed, and revitalized from head to toe.",
    image: "/images/body_treatment.jpg",
    price:"KSH 6500",
  },
];

const facialServices = [
  {
    name: "Facial Steaming",
    description:
      "Uses steam to open up the pores of the skin, allowing for deep cleansing and hydration. It helps to remove impurities, excess oil, and dead skin cells, promoting a clearer and healthier complexion. The steam also increases blood circulation, which can enhance the delivery of nutrients to the skin and improve its overall appearance.",
    image: "/images/steaming.jpg",
    price:"KSH 6500",
  },
   {
    name: "Facial Cleansing",
    description:
      "A gentle, non-invasive treatment that removes impurities and excess oil from the skin, leaving it feeling clean and refreshed.",
    image: "/images/FacialCleansing.jpg",
    price:"KSH 6500",
  },
   {
    name: "Full Facial Treatment",
    description:
      "A comprehensive facial treatment that combines cleansing, exfoliation, and moisturizing to leave your skin looking radiant and feeling refreshed.",
    image: "/images/facial_treatment.jpg",
    price:"KSH 9000",
  },
];

const HandAndFootServices = [
  {
    name: "Pedicure",
    description:
      "A complete nail care service covering shaping, cuticle care, and polish for both hands and feet. A relaxing finishing touch to any spa visit.",
    image: "/images/pedicure.jpg",
    price:"KSH 6500",
  },
  {
    name: "Manicure",
    description:
      "A soothing treatment focused on softening and nourishing tired hands and feet, combining gentle massage with moisturizing care for lasting comfort.",
    image: "/images/manicure.jpg",
    price:"KSH 6500",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-[var(--color-cream)]">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
          {service.price && (
          <span className="absolute bottom-3 right-3 bg-[var(--color-white)] text-[var(--color-maroon)] text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
            KSh {service.price}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-[var(--color-maroon)] mb-2">
          {service.name}
        </h3>
        <p className="text-sm text-[var(--color-charcoal)]/80 leading-relaxed mb-5">
          {service.description}
        </p>
        <Link
          href="/booking"
          className="inline-block bg-[var(--color-maroon)] text-[var(--color-white)] px-6 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-maroon-dark)] transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

function ServiceCategory({ title, services }) {
  return (
    <section className="py-16 px-6 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-charcoal)] mb-10 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/images/hero3.jpg"
          alt="Our Services"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-kenBurns"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[var(--color-white)] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[var(--color-white)]/90 max-w-xl">
            Thoughtfully curated treatments designed to help you relax, restore, and feel your best.
          </p>
        </div>
      </section>

      {/* ---------- Categorized Services ---------- */}
      <ServiceCategory title="Massage Treatment" services={massageServices} />
      <ServiceCategory title="Facial" services={facialServices} />
      <ServiceCategory title="Foot and Hand Care" services={HandAndFootServices} />

      {/* ---------- Booking CTA ---------- */}
      <Booking />
    </main>
  );
}