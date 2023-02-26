import Header from "./Sections/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Portfolio from "./Sections/Portfolio/Portfolio"
import "./styles/Main.scss"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Blog from "./Sections/Blog/Blog"
import Testimonials from "./Sections/Testimonials/Testimonials"
import Contact from "./Sections/Contact/Contact"

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Experience />
      <Blog />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
