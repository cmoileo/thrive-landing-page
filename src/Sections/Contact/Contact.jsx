import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {  
  const sectionTitle = useRef(null)

  useEffect(() => {
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="contact-container" id="contact">
                        <div ref={sectionTitle} className="section-name-container" style={{left: "-140px"}}>
              <h1 >Hello</h1>
            </div>
      <div className="contact-container__left">
        <form action="sumbit">
          <div className="input-container">
            <p>Name</p>
            <input type="text" name="name" placeholder=""/>
          </div>
          <div className="input-container">
            <p>Email</p>
            <input type="email" name="email" placeholder=""/>
          </div>
          <div className="input-container">
            <p>Subject</p>
            <input type="text" name="subject" placeholder="" />
          </div>
          <div className="input-container">
            <p>Message</p>
            <textarea name="message" placeholder=""></textarea>
          </div>
          <button name="submit" onClick={(e) => { e.preventDefault()}}>Send Message</button>
        </form>
      </div>
      <div className="contact-container__right">
        <h2>Nam ultrices ultrices nec tortor<br />pulvinar esteras loremips est<br />orem ipusm mupolis tetoros.</h2>
        <p>Mauris volutpat estera phasellus varius nec orcina quam<br />augue loremes lines rester pellentesque non estar<br />identiqum pere setarra nunc vulputate id in nullam<br />polo lorem ipsum dolor setarra nunc vulputa teestertuos.</p>
        <p>Nunc mollis lectus sed tellus aliquet, eu molestie mi<br />venenatis aliquam id nisi efficitur, tincidunt dui a, rhomi<br />sed felis nisi, varius eu porta ut, rutrum nonipus turos eto.</p>
          <p><b>Name</b>: Jacob Hawkins<br />
             <b>Address</b>: New York, USA<br />
             <b>Phone</b>: +1 234-567-890<br />
             <b>Hours</b>: 6:00 am – 2:00 am</p>
        <div className="contact-container__right__logos">
           <i aria-hidden="true" class="fab fa-behance"></i>
           <i aria-hidden="true" class="fab fa-twitter"></i>
           <i aria-hidden="true" class="fab fa-facebook-f"></i>
           <i aria-hidden="true" class="fab fa-youtube"></i>
        </div>
      </div>
    </section>
  )
}
