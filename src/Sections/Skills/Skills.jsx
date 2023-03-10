import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const t1 = useRef(null)
  const sectionTitle = useRef(null)

  const pg1 = useRef(null)
  const pg2 = useRef(null)
  const pg3 = useRef(null)
  const pg4 = useRef(null)
  const pg5 = useRef(null)

  useEffect(() => {
    const el1 = t1.current
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(el1, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  document.addEventListener("scroll", () => {
    if (window.scrollY > 3500) {
      pg1.current.style.animation = "pg1Anim 1.5s forwards ease-out"
      pg2.current.style.animation = "pg2Anim 1.5s forwards ease-out"
      pg3.current.style.animation = "pg3Anim 1.5s forwards ease-out"
      pg4.current.style.animation = "pg4Anim 1.5s forwards ease-out"
      pg5.current.style.animation = "pg5Anim 1.5s forwards ease-out"
    }
  })

  return (
   <section className="skills-container" ref={t1} id="skills">
            <div className="section-name-container" style={{left: "-150px"}} ref={sectionTitle}>
              <h1 >Skills</h1>
            </div>
    <div className="skills-container__left">
      <h2>Nam ultrices ultrices nec<br />tortor pulvinar esteras<br />loremips estorem ipusm</h2>
      <p>Mauris volutpat estera phasellus. Varius nec<br />orcina quam augue loremes lines rester<br />pellentesque non estar identiqum pere<br />setarra nunc vulputate id in nullam lorem<br />ipsum dolor setarra nunc vulputateester.</p>
      <p>Tristique amet volutpat nunc euismod<br />mauris nonce ollicitudin est sempe vulputate<br />id in nullam. Purusat tincidunt maga ut turpis<br />eu, eu enim. Nisl porttitor elit risus velit urnase<br />morbit mauris at proin laoreet est lobortis<br />urna aliquame setera fermentum sit iaculis</p>
    </div>
    <div className="skills-container__right">
      <div className="skills-container__right__item">
        <div className="skills-container__right__item__left">
          <h3>75%</h3>
        </div>
        <div className="skills-container__right__item__right">
          <p>Creativity</p>
          <div className="skills-container__right__item__right__progress-bar">
          <div className="skills-container__right__item__right__progress-bar__purple pg-1" ref={pg1}></div>
            <div className="skills-container__right__item__right__progress-bar__white"></div>
          </div>
        </div>
      </div>
      <div className="skills-container__right__item">
      <div className="skills-container__right__item__left">
      <h3>45%</h3>
      </div>
        <div className="skills-container__right__item__right">
          <p>Cooking</p>
          <div className="skills-container__right__item__right__progress-bar">
          <div className="skills-container__right__item__right__progress-bar__purple pg-2" ref={pg2}></div>
            <div className="skills-container__right__item__right__progress-bar__white"></div>
          </div>
        </div>
      </div>
      <div className="skills-container__right__item">
      <div className="skills-container__right__item__left">
      <h3>90%</h3>
      </div>
        <div className="skills-container__right__item__right">
          <p>PHP</p>
          <div className="skills-container__right__item__right__progress-bar">
          <div className="skills-container__right__item__right__progress-bar__purple pg-3" ref={pg3}></div>
            <div className="skills-container__right__item__right__progress-bar__white"></div>
          </div>
        </div>
      </div>
      <div className="skills-container__right__item">
      <div className="skills-container__right__item__left">
      <h3>65%</h3>
      </div>
        <div className="skills-container__right__item__right">
          <p>Marketing</p>
          <div className="skills-container__right__item__right__progress-bar">
          <div className="skills-container__right__item__right__progress-bar__purple pg-4" ref={pg4}></div>
            <div className="skills-container__right__item__right__progress-bar__white"></div>
          </div>
        </div>
      </div>
      <div className="skills-container__right__item">
      <div className="skills-container__right__item__left">
      <h3>85%</h3>
      </div>
        <div className="skills-container__right__item__right">
          <p>Design</p>
          <div className="skills-container__right__item__right__progress-bar">
            <div className="skills-container__right__item__right__progress-bar__purple pg-5" ref={pg5}></div>
            <div className="skills-container__right__item__right__progress-bar__white"></div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
