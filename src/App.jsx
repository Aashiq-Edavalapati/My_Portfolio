import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
