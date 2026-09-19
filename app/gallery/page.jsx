import Image from "next/image";
import Booking from "../components/Home/Booking";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "Zeslyn Massage & Spa interior" },
  { src: "/images/hero3.jpg", alt: "Tranquil spa setting" },
  { src: "/images/massage_room.jpg", alt: "Spa treatment room" },
  { src: "/images/massage_bed.jpg", alt: "Massage treatment bed setup" },
  { src: "/images/massage.jpg", alt: "Massage therapy session" },
  { src: "/images/massageA.jpg", alt: "Massage treatment in progress" },
  { src: "/images/swedish_massage.jpg", alt: "Swedish massage session" },
  { src: "/images/Deep_tissue_massage.jpg", alt: "Deep tissue massage therapy" },
  { src: "/images/stone_massage.jpg", alt: "Hot stone massage treatment" },
  { src: "/images/body_treatment.jpg", alt: "Body treatment session" },
  { src: "/images/facial_treatment.jpg", alt: "Facial treatment" },
  { src: "/images/manicure.jpg", alt: "Manicure service" },
  { src: "/images/Pedicure.jpg", alt: "Pedicure service" },
];

export default function Gallery() {
  return (
    <main>
      {/* ---------- Heading Strip ---------- */}
      <section className="pt-40 pb-16 px-6 bg-[var(--color-maroon)] text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-white)] mb-3">
          Gallery
        </h1>
        <p className="text-[var(--color-white)]/80 max-w-xl mx-auto">
          A glimpse into our space, treatments, and the experience that awaits you.
        </p>
      </section>

      {/* ---------- Image Grid ---------- */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative h-64 rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
      {/* ---------- Booking CTA ---------- */}
      <Booking />
    </main>
  );
}