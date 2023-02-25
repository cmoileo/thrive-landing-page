import Header from "./Sections/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Portfolio from "./Sections/Portfolio/Portfolio"
import "./styles/Main.scss"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Blog from "./Sections/Blog/Blog"

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
    </div>
  )
}

export default App
