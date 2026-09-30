import { linkHref } from "../config.js"
import { useApp } from "../context.jsx"
import { Icon } from "../icons.jsx"
import Reveal from "./Reveal.jsx"

const ICONS = {
  whatsapp: "whatsapp",
  instagram: "instagram",
  facebook: "facebook",
  behance: "behance",
  linkedin: "linkedin",
  email: "mail",
  youtube: "youtube",
  tiktok: "tiktok",
}

export default function Contact() {
  const { lang, t } = useApp()
  const whatsapp = linkHref("whatsapp", lang)
  const channels = t.contact.channels
    .map((channel) => ({ ...channel, href: linkHref(channel.id, lang) }))
    .filter((channel) => channel.href || ["instagram", "facebook", "behance", "linkedin", "email"].includes(channel.id))

  return (
    <section className="contact" id="contact">
      <div className="container">
          <div className="contact-grid">
            <Reveal>
            <div className="contact-copy">
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
            </div>
            </Reveal>
            <Reveal delay={140}>
            <div className="contact-actions">
              {whatsapp ? (
                <a className="channel channel-wa" href={whatsapp} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" />
                  <span>{t.contact.whatsapp}</span>
                </a>
              ) : (
                <span className="channel channel-wa">
                  <Icon name="whatsapp" />
                  <span>{t.contact.whatsapp}</span>
                </span>
              )}
              <div className="channels">
                {channels.map((channel) =>
                  channel.href ? (
                    <a
                      key={channel.id}
                      className="channel"
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon name={ICONS[channel.id]} />
                      <span>{channel.label}</span>
                    </a>
                  ) : (
                    <span key={channel.id} className="channel">
                      <Icon name={ICONS[channel.id]} />
                      <span>{channel.label}</span>
                    </span>
                  ),
                )}
              </div>
            </div>
            </Reveal>
          </div>
      </div>
    </section>
  )
}
