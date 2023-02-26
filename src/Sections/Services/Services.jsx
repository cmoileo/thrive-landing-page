import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const t1 = useRef(null)
  const t2 = useRef(null)
  const t3 = useRef(null)
  const t4 = useRef(null)
  const t5 = useRef(null)
  const t6 = useRef(null)
  const sectionTitle = useRef(null)

  useEffect(() => {
    const el1 = t1.current
    const el2 = t2.current
    const el3 = t3.current
    const el4 = t4.current
    const el5 = t5.current
    const sectionTitleEl = sectionTitle.current
    const el6 = t6.current

    gsap.fromTo(el1, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el2, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el2
    }} )
    gsap.fromTo(el3, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el3
    }} )
    gsap.fromTo(el4, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el4
    }} )
    gsap.fromTo(el5, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el5
    }} )
    gsap.fromTo(el6, {y: 100}, {y: 0, duration: 1, scrollTrigger: {
      trigger: el6
    }} )
    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="services-container">
            <span className="section-name-container" ref={sectionTitle}>
              <h1 >Svcs</h1>
            </span>
      <div ref={t1}><p>Design</p></div>
      <div ref={t2}><p>Code</p></div>
      <div ref={t3}><p>Video</p></div>
      <div ref={t4}><p>Music</p></div>
      <div ref={t5}><p>Photos</p></div>
      <div ref={t6}><p>Graphics</p></div>
    </section>
  )
}
