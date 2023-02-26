import Quotes from "../../assets/quotes_demo2.png"
import CompagnyLogo1 from "../../assets/company_logo_01@2x.png"
import CompagnyLogo2 from "../../assets/company_logo_02@2x.png"
import CompagnyLogo3 from "../../assets/company_logo_03@2x.png"
import CompagnyLogo4 from "../../assets/company_logo_04@2x.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionTitle = useRef(null)

  useEffect(() => {
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="testimonials-container">
            <div className="section-name-container" ref={sectionTitle}>
              <h1 >Refs</h1>
            </div>
      <div className="testimonials-container__texts">
        <div className="testimonials-container__item testimonials-container__item__right" style={{height: "265px"}}>
          <img src={Quotes} alt="" />
          <p>Duis iaculis vulputate mauris, vitae<br />ultricies nunc sodales et. Nunc at pin<br />laoreet est lobortis est report.placerat<br />vulputate malesuad tempus erat si</p>
          <p><b>Jenny Stone</b></p>
          <p style={{marginBottom: "0px"}}>www.somesite.com</p>
          <div className="testimonials-container__item__right__circle"></div>
        </div>
        <div className="testimonials-container__item testimonials-container__item__left" style={{height: "290px"}}>
          <img src={Quotes} alt="" />
          <p>Vivamus tortor nunc, pulvinar maximus<br />rutrum eget, commodo eu elit. Vivamus<br />in tellus ante. In sed vestibulum dolor.<br />Integer ornare mollis purus, aliquam<br />rutrum diam finibus necius lorem ipsum.</p>
          <p><b>Anna Wilson</b></p>
          <p style={{marginBottom: "0px"}}>www.somesite.com</p>
          <div className="testimonials-container__item__left__circle"></div>
        </div>
        <div className="testimonials-container__item testimonials-container__item__right" style={{height: "245px"}}>
          <img src={Quotes} alt="" />
          <p>Aenean molestie vehicula nisl, sit amet<br />pharetra ex ultricies et. Sed sapien diam,<br />efficitur a orci nec, imperdiet accumsan.</p>
          <p><b>Oliver Smith</b></p>
          <p style={{marginBottom: "0px"}}>www.somesite.com</p>
          <div className="testimonials-container__item__right__circle"></div>
        </div>
        <div className="testimonials-container__item  testimonials-container__item__left" style={{height: "265px"}}>
        <img src={Quotes} alt="" />
        <p>Quisque vitae augue lorem. Duis dapibus<br />auctor dui et aliquet. Nullam scelerisque<br />justo et libero malesuada venenatis.<br />Quisque tincidunt dignissim turpis vitae.</p>
        <p><b>Petra Who</b></p>
        <p style={{marginBottom: "0px"}}>www.somesite.com</p>
        <div className="testimonials-container__item__left__circle"></div>
        </div>
      </div>
      <div className="testimonials-container__compagnies">
        <img src={CompagnyLogo1} alt="" />
        <img src={CompagnyLogo2} alt="" />
        <img src={CompagnyLogo3} alt="" />
        <img src={CompagnyLogo4} alt="" />
    </div>
    </section>
  )
}
