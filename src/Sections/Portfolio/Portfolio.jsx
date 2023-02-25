import PFItem1 from '../../assets/portfolio_item_01.jpg'
import PFItem2 from '../../assets/portfolio_item_02.jpg'

export default function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="portfolio-container__item">
        <div><img src={PFItem1} alt="" /></div>
        <div className='portfolio-container__item__left'>
          <h3>Web design</h3>
          <p>Mauris volutpat estera phasellus<br />varius nec orci, quam augue se<br />loremes lines pellentesque non</p>
          <h4 className="link portfolio-container__item__link">VIEW MORE</h4>
        </div>
      </div>
      <div className="portfolio-container__item">
        <div><img src={PFItem2} alt="" /></div>
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
