import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionTitle = useRef(null)
  const t1 = useRef(null)
  const t2 = useRef(null)
  const t3 = useRef(null)
  const t4 = useRef(null)
  const t5 = useRef(null)
  const t6 = useRef(null)
  const t7 = useRef(null)
  const t8 = useRef(null)
  const t9 = useRef(null)
  const t10 = useRef(null)
  const t11 = useRef(null)
  const t12 = useRef(null)
  const t13 = useRef(null)
  const t14 = useRef(null)
  const t15 = useRef(null)
  const t16 = useRef(null)
  const t17 = useRef(null)
  const t18 = useRef(null)
  const t19 = useRef(null)
  const t20 = useRef(null)
  const t21 = useRef(null)

  useEffect(() => {
    const sectionTitleEl = sectionTitle.current
    const el1 = t1.current
    const el2 = t2.current
    const el3 = t3.current
    const el4 = t4.current
    const el5 = t5.current
    const el6 = t6.current
    const el7 = t7.current
    const el8 = t8.current
    const el9 = t9.current
    const el10 = t10.current
    const el11 = t11.current
    const el12 = t12.current
    const el13 = t13.current
    const el14 = t14.current
    const el15 = t15.current
    const el16 = t16.current
    const el17 = t17.current
    const el18 = t18.current
    const el19 = t19.current
    const el20 = t20.current
    const el21 = t21.current

    gsap.fromTo(el1, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el2, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el2
    }} )
    gsap.fromTo(el3, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el3
    }} )
    gsap.fromTo(el4, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el4
    }} )
    gsap.fromTo(el5, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el5
    }} )
    gsap.fromTo(el6, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el6
    }} )
    gsap.fromTo(el7, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el7
    }} )
    gsap.fromTo(el8, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el8
    }} )
    gsap.fromTo(el9, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el9
    }} )
    gsap.fromTo(el10, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el10
    }} )
    gsap.fromTo(el11, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el11
    }} )
    gsap.fromTo(el12, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el12
    }} )
    gsap.fromTo(el13, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el13
    }} )
    gsap.fromTo(el14, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el14
    }} )
    gsap.fromTo(el15, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el15
    }} )
    gsap.fromTo(el16, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el16
    }} )
    gsap.fromTo(el17, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el17
    }} )
    gsap.fromTo(el18, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el18
    }} )
    gsap.fromTo(el19, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el19, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el1
    }} )
    gsap.fromTo(el20, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el20
    }} )
    gsap.fromTo(el21, {y: 20}, {y: 0, duration: .2, scrollTrigger: {
      trigger: el20
    }} )
    gsap.fromTo(sectionTitleEl, {x: 50}, {x: 0, duration: .7, scrollTrigger: {
      trigger: sectionTitleEl
    }} )

  }, [])

  return (
    <section className="about-container">
      <div className="section-name-container" style={{left: "-160px", marginTop: "150px"}}>
        <h1 ref={sectionTitle}>About</h1>
      </div>
      <div className="about-container__left">
        <div>
          <h3 ref={t1}>NAME</h3>
          <p ref={t2}>Jacob Hawkings</p>
        </div>
        <div>
          <h3 ref={t3}>BIRTHDAY</h3>
          <p ref={t4}>25. 03. 1987.</p>
        </div>
        <div>
        <h3 ref={t5}>ROLE</h3>
          <p ref={t6}>Lead Designer</p>
        </div>
        <div>
        <h3 ref={t7}>EMAIL</h3>
          <p ref={t8}>stone@example.com</p>
        </div>
        <div>
        <h3 ref={t9}>PHONE</h3>
          <p ref={t10}>(+987) 987 654 321</p>
        </div>
        <div>
        <h3 ref={t11}>WEBSITE</h3>
          <p ref={t12}>www.somewebsite.com</p>
        </div>
        <div>
        <h3 ref={t13}>LOCATION</h3>
          <p ref={t14}>New York, USA</p>
        </div>
        <div>
        <h3  ref={t15}>INTERESTS</h3>
          <p ref={t16}>Games, Books, Movies</p>
        </div>
        <div>
          <h3  ref={t17} className='gsap-anim-bottomToTop'>SOCIAL</h3>
          <div className="about-container__left__icons">
           <i ref={t18} aria-hidden="true" class="fab fa-behance"></i>
           <i ref={t19} aria-hidden="true" class="fab fa-twitter"></i>
           <i ref={t20} aria-hidden="true" class="fab fa-facebook-f"></i>
           <i ref={t21} aria-hidden="true" class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="about-container__right">
        <div className="about-container__right__bullet-points">
          <div className="about-container__right__bullet-points__item">
            <p>AWARDS</p>
            <h3>38</h3>
          </div>
          <div className="about-container__right__bullet-points__item">
            <p>XP YEARS</p>
            <h3>12 +</h3>
          </div>
          <div className="about-container__right__bullet-points__item">
            <p>CLIENTS</p>
            <h3>54</h3>
          </div>
          <div className="about-container__right__bullet-points__item">
            <p>PROJECTS</p>
            <h3>76</h3>
          </div>
        </div>
        <h2>Nam ultrices ultrices nec tortor<br />pulvinar esteras loremips est</h2>
        <p>Mauris volutpat estera phasellus. Varius nec orci, quam<br />augue loremes lines pellentesque non identiqum pere.</p>
        <p>Tristique amet volutpat nunc euismod mauris ollicitudin<br />est sempe vulputate id in nullam. Purus tincidunt maga<br />ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase<br />morbit mauris at proin laoreet lobortis urna aliquame.</p>
        <div className="about-container__right__button">
         <h4>Download CV</h4>
          <i aria-hidden="true" class="fas fa-download"></i>
          </div>
      </div>
    </section>
  )
}
