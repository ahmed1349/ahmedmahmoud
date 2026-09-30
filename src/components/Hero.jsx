import { useEffect, useRef } from "react"
import { linkHref } from "../config.js"
import { useApp } from "../context.jsx"
import { Icon } from "../icons.jsx"

export default function Hero() {
  const { lang, t } = useApp()
  const cameraRef = useRef(null)
  const whatsapp = linkHref("whatsapp", lang)

  useEffect(() => {
    const node = cameraRef.current
    if (!node) return
    const frame = requestAnimationFrame(() => node.classList.add("open"))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="camera" ref={cameraRef}>
          <div className="shutter" aria-hidden="true">
            <span className="blade blade-top" />
            <span className="blade blade-bottom" />
            <span className="flash" />
          </div>
          <div className="camera-corner tl" aria-hidden="true" />
          <div className="camera-corner tr" aria-hidden="true" />
          <div className="camera-corner bl" aria-hidden="true" />
          <div className="camera-corner br" aria-hidden="true" />
          <div className="camera-bar" aria-hidden="true">
            <span className="edit-tools">
              <span className="tool tool-ps">Ps</span>
              <span className="tool tool-ai">Ai</span>
              <span className="tool tool-pr">Pr</span>
            </span>
            <span>16:9</span>
            <span className="latin-name">AHMED MAHMOUD</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-label">{t.hero.label}</p>
              <h1 className="latin-name">
                <span>{t.hero.first}</span>
                <span className="accent-line">{t.hero.last}</span>
              </h1>
              <p className="hero-text">{t.hero.text}</p>
              <div className="hero-actions">
                <a className="btn btn-shutter" href="#work">
                  <span className="btn-shutter-fx" aria-hidden="true">
                    <span className="btn-blade btn-blade-top" />
                    <span className="btn-blade btn-blade-bottom" />
                    <span className="btn-flash" />
                  </span>
                  <span className="btn-shutter-label">{t.hero.work}</span>
                </a>
                <a
                  className="btn btn-wa"
                  href={whatsapp || "#contact"}
                  target={whatsapp ? "_blank" : undefined}
                  rel={whatsapp ? "noreferrer" : undefined}
                >
                  <Icon name="whatsapp" size={16} />
                  {t.hero.contact}
                </a>
              </div>
            </div>
            <figure className="hero-frame">
              <img
                src="/images/hero-imag.jpeg"
                width="1600"
                height="900"
                alt={t.hero.imageAlt}
                fetchPriority="high"
                decoding="async"
              />
              <span className="orb orb-a" aria-hidden="true">
                Ps
              </span>
              <span className="orb orb-b" aria-hidden="true">
                <PlayMark />
              </span>
              <span className="orb orb-c" aria-hidden="true">
                <FilmMark />
              </span>
              <span className="orb orb-d" aria-hidden="true">
                <ApertureMark />
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8.2 5.8v12.4L19 12 8.2 5.8Z" />
    </svg>
  )
}

function FilmMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" />
      <path d="M4 9h16M4 15h16M8 5v14M16 5v14" />
    </svg>
  )
}

function ApertureMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5v4M12 15v4M5 12h4M15 12h4" />
    </svg>
  )
}
