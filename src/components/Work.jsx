import { useEffect, useRef, useState } from "react"
import { photos, videos } from "../config.js"
import { useApp } from "../context.jsx"
import { Icon } from "../icons.jsx"
import Reveal from "./Reveal.jsx"

function useDialogKeys(onClose, onPrev, onNext) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const actions = useRef({ onClose, onPrev, onNext })

  useEffect(() => {
    actions.current = { onClose, onPrev, onNext }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    const previous = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKey = (event) => {
      const dir = document.documentElement.dir
      const { onClose: close, onPrev: prev, onNext: next } = actions.current
      if (event.key === "Escape") close()
      const forward = dir === "rtl" ? event.key === "ArrowLeft" : event.key === "ArrowRight"
      const back = dir === "rtl" ? event.key === "ArrowRight" : event.key === "ArrowLeft"
      if (forward) next()
      if (back) prev()
      if (event.key !== "Tab" || !dialogRef.current) return
      const nodes = [...dialogRef.current.querySelectorAll("button, video")]
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])

  return { closeRef, dialogRef }
}

function pad(index) {
  return String(index + 1).padStart(2, "0")
}

export default function Work() {
  const { lang, t } = useApp()
  const [tab, setTab] = useState("photos")
  const [photoIndex, setPhotoIndex] = useState(-1)
  const [videoIndex, setVideoIndex] = useState(-1)

  const photo = photoIndex >= 0 ? photos[photoIndex] : null
  const video = videoIndex >= 0 ? videos[videoIndex] : null

  return (
    <section className="work" id="work">
      <div className="container">
        <Reveal>
          <div className="work-head">
            <div>
              <p className="work-kicker">{t.work.kicker}</p>
              <h2>
                <span>{t.work.titleLine1}</span>
                {t.work.titleLine2 ? <span>{t.work.titleLine2}</span> : null}
              </h2>
              <p className="work-lede">{t.work.lede}</p>
            </div>
            <div className="tabs" role="tablist" aria-label={t.work.titleLine1}>
              <button
                type="button"
                role="tab"
                id="tab-photos"
                aria-selected={tab === "photos"}
                aria-controls="panel-photos"
                onClick={() => setTab("photos")}
              >
                {t.work.photos}
              </button>
              <button
                type="button"
                role="tab"
                id="tab-videos"
                aria-selected={tab === "videos"}
                aria-controls="panel-videos"
                onClick={() => setTab("videos")}
              >
                {t.work.videos}
              </button>
            </div>
          </div>
        </Reveal>

          {tab === "photos" ? (
            <div key="photos" className="wall" role="tabpanel" id="panel-photos" aria-labelledby="tab-photos">
              {photos.map((item, index) => (
                <Reveal key={item.id} delay={index * 120}>
                <button
                  type="button"
                  className="piece"
                  data-size={item.size}
                  data-cursor={t.work.view}
                  aria-label={`${pad(index)} ${item.title[lang]}, ${item.category[lang]}`}
                  onClick={() => setPhotoIndex(index)}
                >
                  <span className="piece-media">
                    <span className="mark tl" aria-hidden="true" />
                    <span className="mark tr" aria-hidden="true" />
                    <span className="mark bl" aria-hidden="true" />
                    <span className="mark br" aria-hidden="true" />
                    <img
                      src={item.thumb}
                      width={item.width}
                      height={item.height}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="piece-hover" aria-hidden="true">
                      <span className="piece-no latin-name">{pad(index)}</span>
                      {item.featured ? <span className="piece-flag">{t.work.featured}</span> : null}
                      <span className="piece-title">{item.title[lang]}</span>
                      <span className="piece-meta">
                        <span>{item.category[lang]}</span>
                        <span className="latin-name">{item.year}</span>
                      </span>
                      <span className="piece-view">
                        {t.work.viewProject}
                        <Arrow />
                      </span>
                    </span>
                  </span>
                  <span className="piece-caption" aria-hidden="true">
                    <span className="latin-name">{pad(index)}</span>
                    <span>{item.category[lang]}</span>
                  </span>
                </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
            <div key="videos" role="tabpanel" id="panel-videos" aria-labelledby="tab-videos">
              {videos.length === 0 ? (
                <div className="reel-empty">
                  <span className="play-orb" aria-hidden="true">
                    <Icon name="play" size={18} />
                  </span>
                  <p>{t.work.emptyVideos}</p>
                </div>
              ) : (
                <div className="reels">
                  {videos.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className="reel"
                      data-cursor={t.work.play}
                      aria-label={`${t.work.videoLabel} ${pad(index)} ${item.title[lang]}`}
                      onClick={() => setVideoIndex(index)}
                    >
                      <span className="reel-frame">
                        <img src={item.poster} alt="" />
                        <span className="play-orb">
                          <Icon name="play" size={20} />
                        </span>
                      </span>
                      <span className="reel-copy">
                        <span className="piece-no latin-name">
                          {t.work.videoLabel} {pad(index)}
                        </span>
                        <span className="piece-title">{item.title[lang]}</span>
                        <span className="piece-meta">
                          <span>{item.category[lang]}</span>
                          <span className="latin-name">{item.year}</span>
                        </span>
                        <span className="reel-line" aria-hidden="true">
                          <span className="latin-name">00:00</span>
                          <span className="reel-track">
                            <i />
                          </span>
                          <span className="latin-name">00:32</span>
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            </Reveal>
          )}
      </div>

      {photo && (
        <Lightbox
          item={photo}
          index={photoIndex}
          total={photos.length}
          lang={lang}
          labels={t.work}
          onClose={() => setPhotoIndex(-1)}
          onPrev={() => setPhotoIndex((index) => (index - 1 + photos.length) % photos.length)}
          onNext={() => setPhotoIndex((index) => (index + 1) % photos.length)}
        />
      )}
      {video && (
        <VideoDialog
          item={video}
          lang={lang}
          labels={t.work}
          onClose={() => setVideoIndex(-1)}
          onPrev={() => setVideoIndex((index) => (index - 1 + videos.length) % videos.length)}
          onNext={() => setVideoIndex((index) => (index + 1) % videos.length)}
        />
      )}
    </section>
  )
}

function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Lightbox({ item, index, total, lang, labels, onClose, onPrev, onNext }) {
  const { closeRef, dialogRef } = useDialogKeys(onClose, onPrev, onNext)

  return (
    <div className="modal" role="presentation" onClick={onClose}>
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="icon-btn modal-close" onClick={onClose} aria-label={labels.close}>
          <Icon name="close" />
        </button>
        <div className="modal-stage">
          <button type="button" className="icon-btn" onClick={onPrev} aria-label={labels.prev}>
            <span className="flip-icon">
              <Icon name="chevron" />
            </span>
          </button>
          <img src={item.src} alt={item.title[lang]} />
          <button type="button" className="icon-btn" onClick={onNext} aria-label={labels.next}>
            <Icon name="chevron" />
          </button>
        </div>
        <div className="modal-copy">
          <p className="latin-name">
            {pad(index)} / {pad(total - 1)}
          </p>
          <h3 id="lightbox-title">{item.title[lang]}</h3>
          <p>{item.category[lang]}</p>
          <p>{item.description[lang]}</p>
        </div>
      </div>
    </div>
  )
}

function VideoDialog({ item, lang, labels, onClose, onPrev, onNext }) {
  const { closeRef, dialogRef } = useDialogKeys(onClose, onPrev, onNext)
  const videoRef = useRef(null)

  return (
    <div className="modal" role="presentation" onClick={onClose}>
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="icon-btn modal-close" onClick={onClose} aria-label={labels.close}>
          <Icon name="close" />
        </button>
        <div className="modal-stage">
          <button type="button" className="icon-btn" onClick={onPrev} aria-label={labels.prev}>
            <span className="flip-icon">
              <Icon name="chevron" />
            </span>
          </button>
          <video
            key={item.id}
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
          />
          <button type="button" className="icon-btn" onClick={onNext} aria-label={labels.next}>
            <Icon name="chevron" />
          </button>
        </div>
        <div className="modal-copy">
          <p>{item.category[lang]}</p>
          <h3 id="video-title">{item.title[lang]}</h3>
          <p>{item.description[lang]}</p>
        </div>
      </div>
    </div>
  )
}
