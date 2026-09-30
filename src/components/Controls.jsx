import { Icon } from "../icons.jsx"
import { useApp } from "../context.jsx"

export default function Controls() {
  const { lang, theme, t, setLang, toggleTheme } = useApp()

  return (
    <div className="controls">
      <div className="seg" role="group" aria-label={t.langLabel}>
        <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
          EN
        </button>
        <button type="button" aria-pressed={lang === "ar"} onClick={() => setLang("ar")}>
          AR
        </button>
      </div>
      <button
        type="button"
        className="icon-btn"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t.themeLight : t.themeDark}
      >
        <Icon name={theme === "dark" ? "sun" : "moon"} />
      </button>
    </div>
  )
}
