import Logo from "../../assets/logo_fabius_02.png"

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={Logo} alt="" />
      <p>HOME</p>
      <p>ABOUT</p>
      <p>SERVICES</p>
      <p>PORTFOLIO</p>
      <p>SKILLS</p>
      <p>EXPERIENCE</p>
      <p>BLOG</p>
      <p>TESTIMONIAL</p>
      <p>CONTACT</p>
      <div className="navbar-container__extra">
        <span></span>
        <p>EXTRA PAGES</p>
      </div>
    </nav>
  )
}
