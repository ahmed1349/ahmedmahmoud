import Controls from "./Controls.jsx"
import Reveal from "./Reveal.jsx"
import { linkHref, socials } from "../config.js"
import { useApp } from "../context.jsx"
import { Icon } from "../icons.jsx"

const ICONS = {
  instagram: "instagram",
  facebook: "facebook",
  behance: "behance",
  linkedin: "linkedin",
  youtube: "youtube",
  tiktok: "tiktok",
  email: "mail",
}

export default function Footer() {
  const { lang, t } = useApp()
  const links = Object.keys(socials)
    .map((id) => ({ id, href: linkHref(id, lang) }))
    .filter((item) => item.href)

  return (
    <footer className="footer">
      <Reveal>
      <div className="container footer-grid">
        <div>
          <p className="footer-name latin-name">{t.footer.name}</p>
          <p className="footer-role">{t.footer.role}</p>
          <p className="footer-line">{t.footer.line}</p>
        </div>
        {links.length > 0 && (
          <div className="footer-socials">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-label={item.id}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon name={ICONS[item.id]} />
              </a>
            ))}
          </div>
        )}
        <div className="footer-meta">
          <p>
            © {new Date().getFullYear()} {t.footer.name}. {t.footer.rights}
          </p>
          <Controls />
        </div>
      </div>
      </Reveal>
    </footer>
  )
}
