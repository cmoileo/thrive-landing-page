import BlogItem1 from "../../assets/blog_item_01.jpg"
import BlogItem2 from "../../assets/blog_item_02.jpg"
import BlogItem3 from "../../assets/blog_item_03.jpg"

export default function Blog() {
  return (
    <section className="blog-container">
      <div className="blog-container__item">
        <div className="blog-container__item__left">
          <img src={BlogItem1} alt="" />
        </div>
        <div className="blog-container__item__right">
          <h2>Hundreds of thousands a still<br />more glorious nights around art</h2>
          <p>Bearable only through love hydrogen atoms bits of moving fluff<br />culture shores of the cosmic ocean paroxysm of global death<br />rich in heavy atoms with pretty stories for which ...</p>
          <h3 className="link">READ FULL STORY</h3>
        </div>
      </div>
      <div className="blog-container__item">
        <div className="blog-container__item__left">
        <img src={BlogItem2} alt="" />
        </div>
        <div className="blog-container__item__right">
        <h2>Preserve and cherish that pale<br />blue dot are light years</h2>
        <p>Bearable only through love hydrogen atoms bits of moving fluff<br />culture shores of the cosmic ocean paroxysm of global death<br />rich in heavy atoms with pretty stories for which ...</p>
        <h3 className="link">READ FULL STORY</h3>
        </div>
      </div>
      <div className="blog-container__item">
        <div className="blog-container__item__left">
        <img src={BlogItem3} alt="" />
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
