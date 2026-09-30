// Change the number and links here. Leave a value empty to hide that link.
// WhatsApp: digits only, with country code. Example: "201012345678"
export const WHATSAPP_NUMBER = "201018570982"

export const socials = {
  instagram: "",
  facebook: "",
  behance: "",
  linkedin: "",
  youtube: "",
  tiktok: "",
  email: "",
}

export function whatsappHref(lang) {
  const digits = String(WHATSAPP_NUMBER).replace(/\D/g, "")
  if (!digits) return ""
  const text =
    lang === "ar"
      ? "مرحباً أحمد، أود التحدث عن مشروع."
      : "Hi Ahmed, I would like to talk about a project."
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}

export function linkHref(id, lang) {
  if (id === "whatsapp") return whatsappHref(lang)
  if (id === "email") return socials.email ? `mailto:${socials.email}` : ""
  return socials[id] || ""
}

export const photos = [
  {
    id: "coffee",
    type: "photo",
    src: "/images/img1.jpeg",
    thumb: "/images/thumbs/img1.jpeg",
    width: 1200,
    height: 1600,
    size: "featured",
    year: "2026",
    featured: true,
    title: { en: "Coffee Campaign", ar: "حملة القهوة" },
    category: { en: "Graphic Design", ar: "تصميم جرافيك" },
    description: {
      en: "Social poster built around a coffee cup, a splash, and Arabic lettering.",
      ar: "بوستر سوشيال مبني على فنجان قهوة، رشة سائل، وخط عربي.",
    },
  },
  {
    id: "v7",
    type: "photo",
    src: "/images/img.jpeg",
    thumb: "/images/thumbs/img.jpeg",
    width: 2560,
    height: 1708,
    size: "wide",
    year: "2026",
    featured: false,
    title: { en: "V7 Lemon", ar: "V7 Lemon" },
    category: { en: "Social Media", ar: "سوشيال ميديا" },
    description: {
      en: "Product poster for V7 Lemon Mint: the can, citrus, and an Arabic headline on a flat blue field.",
      ar: "بوستر منتج لـ V7 Lemon Mint: العلبة، الحمضيات، وعنوان عربي على خلفية زرقاء.",
    },
  },
  {
    id: "brand",
    type: "photo",
    src: "/images/img2.jpeg",
    thumb: "/images/thumbs/img2.jpeg",
    width: 1536,
    height: 1024,
    size: "wide",
    year: "2026",
    featured: false,
    title: { en: "Brand Mark", ar: "العلامة" },
    category: { en: "Branding", ar: "هوية بصرية" },
    description: {
      en: "Personal brand system: a portrait emblem and the AM monogram.",
      ar: "نظام الهوية الشخصية: شارة البورتريه وحرف AM.",
    },
  },
]

// Add a video by pushing an object:
// {
//   id: "spot-01",
//   src: "/videos/spot.mp4",
//   poster: "/images/thumbs/img2.jpeg",
//   title: { en: "Campaign spot", ar: "إعلان الحملة" },
//   category: { en: "Commercial", ar: "إعلان" },
//   description: { en: "Short description.", ar: "وصف قصير." },
// }
export const videos = []
