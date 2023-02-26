import PFItem1 from '../../assets/portfolio_item_01.jpg'
import PFItem2 from '../../assets/portfolio_item_02.jpg'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const sectionTitle = useRef(null)
  const t1 = useRef(null)
  const t2 = useRef(null)

  useEffect(() => {
    const el1 = t1.current
    const el2 = t2.current
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(el1, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el2, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el2
    }} )
    gsap.fromTo(sectionTitleEl, {x: -50}, {x: 130, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )


  }, [])

  return (
    <section className="portfolio-container">
            <div className="section-name-container" ref={sectionTitle} style={{marginTop: "270px", left: "-290px"}}>
              <h1 style={{position: "relative"}}>Portfolio</h1>
            </div>
      <div className="portfolio-container__item"  ref={t1}>
        <div className='portfolio-container__item__img'><img src={PFItem1} alt="" /></div>
        <div className='portfolio-container__item__left'>
          <h3>Web design</h3>
          <p>Mauris volutpat estera phasellus<br />varius nec orci, quam augue se<br />loremes lines pellentesque non</p>
          <h4 className="link portfolio-container__item__link">VIEW MORE</h4>
        </div>
      </div>
      <div className="portfolio-container__item"  ref={t2}>
        <div className='portfolio-container__item__img'><img src={PFItem2} alt="" /></div>
        <div className='portfolio-container__item__left'>
          <h3>Grid</h3>
          <p>Volutpat estera phasellus varius<br />nec orci, quam augue se loremes<br />lines pellentesque non mareque</p>
          <h4 className="link portfolio-container__item__link">VIEW MORE</h4>
        </div>
      </div>
      <h4 className="link portfolio-container__load-more">LOAD MORE</h4>
    </section>
  )
}
