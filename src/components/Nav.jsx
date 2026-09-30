import { useEffect, useState } from "react"
import Controls from "./Controls.jsx"
import { Icon } from "../icons.jsx"
import { useApp } from "../context.jsx"

const LINKS = [
  ["home", "home"],
  ["work", "work"],
  ["about", "about"],
  ["contact", "contact"],
]

export default function Nav() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const nodes = LINKS.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <div className="container nav-inner">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          <Icon name="crown" size={16} />
          <span className="latin-name">AHMED</span>
        </a>
        <nav className="nav-links" aria-label={t.navLabel}>
          {LINKS.map(([key, id]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "page" : undefined}>
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="nav-end">
          <Controls />
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-panel">
          {LINKS.map(([key, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[key]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
