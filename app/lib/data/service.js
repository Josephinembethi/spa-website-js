export const siteConfig = {
  name: "Zeslyn Massage & Spa",
  shortName: "Zeslyn",
  tagline: "Relax. Restore. Renew.",
  phone: "+254 700 000 000",       // ← change me
  email: "hello@zeslynspa.com",     // ← change me
  address: "Westlands, Nairobi, Kenya", // ← change me
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

export const services = [
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    description:
      "A gentle, flowing full-body massage that eases tension and calms the mind.",
    duration: 60,
    price: 4500,
    image: "/images/massage.jpg",
    featured: true,
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    description:
      "Firm, targeted pressure to release chronic knots and restore mobility.",
    duration: 60,
    price: 5500,
    image: "/images/Deep_tissue_massage.jpg",
    featured: true,
  },
  {
    slug: "facial-treatment",
    name: "Signature Facial",
    description:
      "A nourishing facial tailored to your skin, leaving you refreshed and glowing.",
    duration: 45,
    price: 4000,
    image: "/images/facial_treatment.jpg",
    featured: true,
  },
  {
    slug: "body-treatment",
    name: "Body Treatment",
    description:
      "Exfoliation, wrap, and hydration to soften and renew your skin from head to toe.",
    duration: 75,
    price: 6000,
    image: "/images/Body treatment.jpg",
    featured: false,
  },
  {
    slug: "manicure",
    name: "Luxury Manicure",
    description:
      "Precision nail care with a relaxing hand massage and premium polish.",
    duration: 45,
    price: 2500,
    image: "/images/manicure.jpg",
    featured: false,
  },
  {
    slug: "pedicure",
    name: "Spa Pedicure",
    description:
      "A soothing foot ritual with exfoliation, massage, and flawless finish.",
    duration: 50,
    price: 3000,
    image: "/images/Pedicure.jpg",
    featured: false,
  },
];
