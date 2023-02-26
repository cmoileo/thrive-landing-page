import BlogItem1 from "../../assets/blog_item_01.jpg"
import BlogItem2 from "../../assets/blog_item_02.jpg"
import BlogItem3 from "../../assets/blog_item_03.jpg"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const t1 = useRef(null)
  const t2 = useRef(null)
  const t3 = useRef(null)
  const sectionTitle = useRef(null)

  useEffect(() => {
    const el1 = t1.current
    const el2 = t2.current
    const el3 = t3.current
    const sectionTitleEl = sectionTitle.current

    gsap.fromTo(el1, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el2, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger: {
      trigger: el2
    }} )
    gsap.fromTo(el3, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger: {
      trigger: el3
    }} )
    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="blog-container" id="blog">
            <div className="section-name-container" ref={sectionTitle}>
              <h1>Blog</h1>
            </div>
      <div className="blog-container__item" ref={t1}>
        <div className="blog-container__item__left">
         <div className="blog-container__item__left__img">
          <img src={BlogItem1} alt="" />
         </div>
        </div>
        <div className="blog-container__item__right">
          <h2>Hundreds of thousands a still<br />more glorious nights around art</h2>
          <p>Bearable only through love hydrogen atoms bits of moving fluff<br />culture shores of the cosmic ocean paroxysm of global death<br />rich in heavy atoms with pretty stories for which ...</p>
          <h3 className="link">READ FULL STORY</h3>
        </div>
      </div>
      <div className="blog-container__item" ref={t2}>
        <div className="blog-container__item__left">
        <div className="blog-container__item__left__img">
          <img src={BlogItem2} alt="" />
         </div>
        </div>
        <div className="blog-container__item__right">
        <h2>Preserve and cherish that pale<br />blue dot are light years</h2>
        <p>Bearable only through love hydrogen atoms bits of moving fluff<br />culture shores of the cosmic ocean paroxysm of global death<br />rich in heavy atoms with pretty stories for which ...</p>
        <h3 className="link">READ FULL STORY</h3>
        </div>
      </div>
      <div className="blog-container__item" ref={t3}>
        <div className="blog-container__item__left">
        <div className="blog-container__item__left__img">
          <img src={BlogItem3} alt="" />
         </div>
        </div>
        <div className="blog-container__item__right">
        <h2>Great turbulent clouds hearts of<br />the stars stirred by starlight sky</h2>
        <p>Bearable only through love hydrogen atoms bits of moving fluff<br />culture shores of the cosmic ocean paroxysm of global death<br />rich in heavy atoms with pretty stories for which ...</p>
        <h3 className="link">READ FULL STORY</h3>
        </div>
      </div>
    </section>
  )
}
