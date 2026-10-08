import Image from "next/image";
import Booking from "../components/Home/Booking";

const galleryImages = [
  { src: "/images/Interior5.jpeg", alt: "Zeslyn Massage & Spa interior" },
  { src: "/images/Packages.jpeg", alt: "Prices" },
  { src: "/images/Interior8.jpeg", alt: "Zeslyn Massage & Spa interior" },
  { src: "/images/Interior2.jpeg", alt: "Zeslyn Massage & Spa interior" },
  { src: "/images/Interior.jpeg", alt: "Tranquil spa setting" },
  { src: "/images/massageRoom1.jpeg", alt: "Spa treatment room" },
  { src: "/images/massage.jpg", alt: "Massage therapy session" },
  { src: "/images/swedish_massage.jpg", alt: "Swedish massage session" },
  { src: "/images/Hotstone.jpeg", alt: "Hot stone massage treatment" },
  { src: "/images/Hotstone2.jpeg", alt: "Hot stone massage treatment" },
  { src: "/images/body_treatment.jpg", alt: "Body treatment session" },
  { src: "/images/facial_treatment.jpg", alt: "Facial treatment" },
  { src: "/images/manicure.jpg", alt: "Manicure service" },
  { src: "/images/Pedicure.jpg", alt: "Pedicure service" },
  { src: "/images/Interior3.jpeg", alt: "Swedish massage session" },

];

export default function Gallery() {
  return (
    <main>
      <section className="pt-40 pb-16 px-6 bg-[var(--color-maroon)] text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-white)] mb-3">
          Gallery
        </h1>
        <p className="text-[var(--color-white)]/80 max-w-xl mx-auto">
          A glimpse into our space, treatments, and the experience that awaits you.
        </p>
      </section>

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
                className="object-cover  object-center hover:scale-105 transition-transform duration-500"
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