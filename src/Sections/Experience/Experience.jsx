import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const sectionTitle = useRef(null)

  useEffect(() => {
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="experience-container" id="experience">
                        <div className="section-name-container" ref={sectionTitle}>
              <h1 >Exp.</h1>
            </div>
      <div className="experience-container__item">
        <div className="experience-container__item__left">
          <p>September, 2016 – May, 2017</p>
        </div>
        <div className="experience-container__item__right">
          <p>Junior Developer</p>
          <p>Sed quia consequuntur magni dolores eos quira tione estera<br />voluptatem sequi nesciunt nuncera permano nence of the<br />stars from which we spring.</p>
          <p>Lobrissa / Chicago</p>
        </div>
      </div>
      <div className="experience-container__item">
      <div className="experience-container__item__left">
        <p>May, 2017 – Jun, 2018</p>
      </div>
        <div className="experience-container__item__right">
          <p>Senior Developer</p>
          <p>Consequuntur magni dolores eos quira tione estera<br />voluptatem sequi nesciunt nuncera permanotesa.</p>
          <p>Faucibuse / Seattle</p>
        </div>
      </div>
      <div className="experience-container__item">
      <div className="experience-container__item__left">
        <p>Jun, 2018 – December, 2019</p>
      </div>
        <div className="experience-container__item__right">
          <p>Senior Developer</p>
          <p>Magni dolores eos quira tione estera voluptatem sequi<br />nesciunt nuncera permano nence of the stars from<br />voluptatem sequi nesciunt nuncera polimos kokolos etc.</p>
          <p>Reesturato / New York</p>
        </div>
      </div>
      <div className="experience-container__item experience-container__item__last">
      <div className="experience-container__item__left">
        <p>December, 2019 – Current</p>
      </div>
        <div className="experience-container__item__right">
         <p>CEO</p>
          <p>Tristique amet volutpat nunc euismod mauris nonce<br />ollicitudin est sempe vulputate id in nullam. Purusat tincidunt<br />maga ut turpis eu, eu enim. Nisl porttitor elit koteros musico.</p>
          <p>Ercussa / San Francisco</p>
        </div>
      </div>
    </section>
  )
}
