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
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)

function App() {
  const round1Ref = useRef(null)
  const round2Ref = useRef(null)
  const round3Ref = useRef(null)
  const round4Ref = useRef(null)
  const round5Ref = useRef(null)


  useEffect(() => {
    const el1 = round1Ref.current
    const el2 = round2Ref.current
    const el3 = round3Ref.current
    const el4 = round4Ref.current
    const el5 = round5Ref.current
    gsap.fromTo(el1, {x: 180}, {x: 0, duration: 1, scrollTrigger: {
      trigger: el1
    }})
    gsap.fromTo(el2, {x: -280}, {x: 0, duration: .5, scrollTrigger: {
      trigger: el2
    }})
    gsap.fromTo(el3, {x: 100}, {x: 0, duration: .3, scrollTrigger: {
      trigger: el3
    }})
    gsap.fromTo(el4, {x: -180}, {x: 0, duration: 1, scrollTrigger: {
      trigger: el4
    }})
    gsap.fromTo(el5, {x: 130}, {x: 0, duration: .7, scrollTrigger: {
      trigger: el5
    }})
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Header />
      <div ref={round1Ref} className="round round1"></div>
      <About />
      <Services />
      <div ref={round2Ref} className="round round2"></div>
      <Portfolio />
      <div ref={round3Ref} className="round round3"></div>
      <Skills />
      <Experience />
      <div ref={round4Ref} className="round round4"></div>
      <Blog />
      <div ref={round5Ref} className="round round5"></div>
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
