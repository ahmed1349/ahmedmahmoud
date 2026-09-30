import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Work from "./components/Work.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import WhatsAppFloat from "./components/WhatsAppFloat.jsx"
import CursorLabel from "./components/CursorLabel.jsx"
import { useApp } from "./context.jsx"

export default function App() {
  const { t } = useApp()

  return (
    <>
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <Nav />
      <main id="content">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CursorLabel />
    </>
  )
}
