import Reveal from "./Reveal.jsx"
import { useApp } from "../context.jsx"

export default function About() {
  const { t } = useApp()

  return (
    <section className="section" id="about">
      <div className="container">
          <div className="about-grid">
            <Reveal>
            <figure className="about-visual">
              <img
                src="/images/thumbs/img2.jpeg"
                width="1536"
                height="1024"
                alt={t.about.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{t.about.caption}</figcaption>
            </figure>
            </Reveal>
            <Reveal delay={140}>
            <div className="about-copy">
              <h2>{t.about.title}</h2>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <ul className="caps">
                {t.about.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            </Reveal>
          </div>
      </div>
    </section>
  )
}
