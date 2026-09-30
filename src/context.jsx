import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { content } from "./content.js"

const AppContext = createContext(null)

function readStore(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => readStore("lang", "en"))
  const [theme, setTheme] = useState(() => readStore("theme", "dark"))

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === "ar" ? "rtl" : "ltr"
    root.dataset.theme = theme
    localStorage.setItem("lang", lang)
    localStorage.setItem("theme", theme)
    document.title =
      lang === "ar"
        ? "أحمد محمود — مصمم جرافيك ومونتير فيديو"
        : "Ahmed Mahmoud — Graphic Designer & Video Editor"
    const themeMeta = document.querySelector('meta[name="theme-color"]')
    if (themeMeta) themeMeta.content = theme === "light" ? "#f3f4f7" : "#050509"
  }, [lang, theme])

  const value = useMemo(
    () => ({
      lang,
      theme,
      t: content[lang],
      setLang,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [lang, theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const value = useContext(AppContext)
  if (!value) throw new Error("useApp must be used inside AppProvider")
  return value
}
