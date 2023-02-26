
export default function About() {

  return (
    <section className="about-container">
      <div className="section-name-container" style={{left: "-160px", marginTop: "150px"}}>
        <h1 >About</h1>
      </div>
      <div className="about-container__left">
        <div>
          <h3>NAME</h3>
          <p>Jacob Hawkings</p>
        </div>
        <div>
          <h3>BIRTHDAY</h3>
          <p>25. 03. 1987.</p>
        </div>
        <div>
        <h3>ROLE</h3>
          <p>Lead Designer</p>
        </div>
        <div>
        <h3>EMAIL</h3>
          <p>stone@example.com</p>
        </div>
        <div>
        <h3>PHONE</h3>
          <p>(+987) 987 654 321</p>
        </div>
        <div>
        <h3>WEBSITE</h3>
          <p>www.somewebsite.com</p>
        </div>
        <div>
        <h3>LOCATION</h3>
          <p>New York, USA</p>
        </div>
        <div>
        <h3>INTERESTS</h3>
          <p>Games, Books, Movies</p>
        </div>
        <div>
          <h3>SOCIAL</h3>
          <div className="about-container__left__icons">
           <i aria-hidden="true" class="fab fa-behance"></i>
           <i aria-hidden="true" class="fab fa-twitter"></i>
           <i aria-hidden="true" class="fab fa-facebook-f"></i>
           <i aria-hidden="true" class="fab fa-youtube"></i>
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
            <h3>12+</h3>
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
