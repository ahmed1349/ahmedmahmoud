import { useEffect, useRef } from "react"

export default function CursorLabel() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!fine.matches) return

    const hide = () => {
      node.hidden = true
    }

    const move = (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-cursor]") : null
      if (!target) {
        hide()
        return
      }
      node.hidden = false
      node.textContent = target.getAttribute("data-cursor") || ""
      const pad = 16
      const maxX = window.innerWidth - node.offsetWidth - 8
      const maxY = window.innerHeight - node.offsetHeight - 8
      node.style.left = `${Math.max(8, Math.min(event.clientX + pad, maxX))}px`
      node.style.top = `${Math.max(8, Math.min(event.clientY + pad, maxY))}px`
    }

    window.addEventListener("pointermove", move)
    window.addEventListener("scroll", hide, true)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("scroll", hide, true)
    }
  }, [])

  return <div ref={ref} className="cursor-label" hidden aria-hidden="true" />
}
