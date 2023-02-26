import MainImage from "../../assets/main_img.jpg"

export default function Header() {
  return (
    <section className="header-container" id="header">
      <div className="header-container__left">
        <h1>Hello<br />I’m<br />Jenn<br />Walkers</h1>
        <p>UI designer, photographer<br />and travel enthusiast</p>
        <div className="header-container__left__icon-scroll">
        </div>
      </div>
      <div className="header-container__right">
        <img src={MainImage} alt="" />
      </div>
    </section>
  )
}
