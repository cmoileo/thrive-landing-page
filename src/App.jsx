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
import NavBar from "./Sections/NavBar/Navbar"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="round round1"></div>
      <About />
      <Services />
      <div className="round round2"></div>
      <Portfolio />
      <div className="round round3"></div>
      <Skills />
      <Experience />
      <div className="round round4"></div>
      <Blog />
      <div className="round round5"></div>
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
