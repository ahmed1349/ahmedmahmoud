export function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  }

  if (name === "whatsapp") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 3.2A8.7 8.7 0 0 0 4.6 16.3L3.4 20.6l4.4-1.15A8.72 8.72 0 1 0 12.04 3.2Zm5.05 12.28c-.21.6-1.23 1.1-1.72 1.17-.44.07-.99.1-1.6-.1-.37-.12-.84-.27-1.45-.53-2.55-1.1-4.21-3.67-4.34-3.84-.13-.17-1.03-1.37-1.03-2.61 0-1.24.65-1.85.88-2.1.23-.25.5-.31.67-.31h.48c.15 0 .36-.06.56.43.21.64.72 2.2.78 2.36.07.16.11.35.02.56-.09.21-.14.34-.27.52-.13.18-.28.4-.4.54-.13.14-.26.29-.11.57.15.27.66 1.09 1.42 1.76.98.87 1.8 1.14 2.06 1.27.26.13.41.11.56-.07.15-.18.63-.73.8-.98.17-.25.34-.21.56-.13.23.08 1.44.68 1.69.8.25.13.41.19.47.3.07.1.07.6-.1 1.2Z"
        />
      </svg>
    )
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h2V6h-2c-2.2 0-3.5 1.4-3.5 3.6V12H8v3h2.5v6H14v-6h2.2l.4-3H14V9.8c0-.5.2-.8.9-.8Z" />
      </svg>
    )
  }

  if (name === "behance") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Sora, sans-serif"
          fontWeight="700"
          fill="currentColor"
        >
          Be
        </text>
      </svg>
    )
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10.5V16M8 7.8h.01M12 16v-3.2a1.6 1.6 0 0 1 3.2 0V16M12 12.5V16" />
      </svg>
    )
  }

  if (name === "youtube") {
    return (
      <svg {...common}>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" />
        <path d="M11 10.2v3.6l3.2-1.8L11 10.2Z" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === "tiktok") {
    return (
      <svg {...common}>
        <path d="M14 6v8.2a2.8 2.8 0 1 1-2-2.66V8.7a5 5 0 0 0 2-.7 4.2 4.2 0 0 0 2.4-2Z" />
      </svg>
    )
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3.5v1.8M12 18.7v1.8M3.5 12h1.8M18.7 12h1.8M6 6l1.3 1.3M16.7 16.7 18 18M18 6l-1.3 1.3M7.3 16.7 6 18" />
      </svg>
    )
  }

  if (name === "moon") {
    return (
      <svg {...common}>
        <path d="M15.5 4.5a7.2 7.2 0 1 0 4 10.2A6.4 6.4 0 0 1 15.5 4.5Z" />
      </svg>
    )
  }

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    )
  }

  if (name === "play") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8.2 5.8v12.4L19 12 8.2 5.8Z" />
      </svg>
    )
  }

  if (name === "chevron") {
    return (
      <svg {...common}>
        <path d="m9 6 6 6-6 6" />
      </svg>
    )
  }

  if (name === "crown") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 17.5h18l-1.4-9.2-4.6 3.8L12 6.2 8 12.1 3.4 8.3 3 17.5Z" />
      </svg>
    )
  }

  return null
}
