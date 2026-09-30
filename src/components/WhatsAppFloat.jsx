import { linkHref } from "../config.js"
import { useApp } from "../context.jsx"
import { Icon } from "../icons.jsx"

export default function WhatsAppFloat() {
  const { lang, t } = useApp()
  const href = linkHref("whatsapp", lang)

  if (href) {
    return (
      <a className="wa-float" href={href} target="_blank" rel="noreferrer" aria-label={t.contact.whatsapp}>
        <Icon name="whatsapp" size={22} />
      </a>
    )
  }

  return (
    <a className="wa-float" href="#contact" aria-label={t.contact.whatsapp}>
      <Icon name="whatsapp" size={22} />
    </a>
  )
}
