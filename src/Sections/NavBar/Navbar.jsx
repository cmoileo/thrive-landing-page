import { useState } from "react"
import Logo from "../../assets/logo_fabius_02.png"

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState()

  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('section');
    const options = {
      rootMargin: '10px 10px 10px 10px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);
    
    sections.forEach(section => {
      observer.observe(section);
    });  
  })

  return (
    <nav className="navbar-container">
      <img src={Logo} alt="" />
      <p className={currentSection === "header" ? "active-section" : ""}><a href="/#header">HOME</a></p>
      <p className={currentSection === "about" ? "active-section" : ""}><a href="/#about">ABOUT</a></p>
      <p className={currentSection === "services" ? "active-section" : ""}><a href="/#services">SERVICES</a> </p>
      <p className={currentSection === "portfolio" ? "active-section" : ""}><a href="/#portfolio">PORTFOLIO</a></p>
      <p className={currentSection === "skills" ? "active-section" : ""}><a href="/#skills">SKILLS</a></p>
      <p className={currentSection === "experience" ? "active-section" : ""}><a href="/#experience">EXPERIENCE</a></p>
      <p className={currentSection === "blog" ? "active-section" : ""}> <a href="/#blog">BLOG</a></p>
      <p className={currentSection === "testimonial" ? "active-section" : ""}> <a href="/#testimonial">TESTIMONIAL</a></p>
      <p className={currentSection === "contact" ? "active-section" : ""}> <a href="/#contact">CONTACT</a></p>
      <div className="navbar-container__extra">
        <span></span>
        <p>EXTRA PAGES</p>
      </div>
    </nav>
  )
}
