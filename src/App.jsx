import Header from "./Sections/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Portfolio from "./Sections/Portfolio/Portfolio"
import "./styles/Main.scss"
import Skills from "./Sections/Skills/Skills"

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
    </div>
  )
}

export default App
