import { FC } from "react";
import plate1Img from "../../assets/img/plate1.png";
import plate2Img from "../../assets/img/plate2.png";
import plate3Img from "../../assets/img/plate3.png";

interface Props {}
const Menu: FC<Props> = () => {
  return (
    <section className="menu section bd-container" id="menu">
      <span className="section-subtitle">Special</span>
      <h2 className="section-title">Menu of the week</h2>

      <div className="menu__container bd-grid">
        <div className="menu__content">
          <img src={plate1Img} alt="plate 1" className="menu__img" />
          <h3 className="menu__name">Barbecue salad</h3>
          <span className="menu__detail">Delicious dish</span>
          <span className="menu__preci">$22.00</span>
          <a href="/" className="button menu__button">
            <i className="bx bx-cart-alt"></i>
          </a>
        </div>

        <div className="menu__content">
          <img src={plate2Img} alt="plate 2" className="menu__img" />
          <h3 className="menu__name">Salad with fish</h3>
          <span className="menu__detail">Delicious dish</span>
          <span className="menu__preci">$12.00</span>
          <a href="/" className="button menu__button">
            <i className="bx bx-cart-alt"></i>
          </a>
        </div>

        <div className="menu__content">
          <img src={plate3Img} alt="plate 3" className="menu__img" />
          <h3 className="menu__name">Spinach salad</h3>
          <span className="menu__detail">Delicious dish</span>
          <span className="menu__preci">$9.50</span>
          <a href="/" className="button menu__button">
            <i className="bx bx-cart-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
