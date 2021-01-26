import { FC } from "react";
import dishSvg from "../../assets/img/dish.svg";
import pizzaSvg from "../../assets/img/pizza.svg";
import truckSvg from "../../assets/img/truck.svg";

interface Props {}
const Services: FC<Props> = () => {
  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">Offering</span>
      <h2 className="section-title">Our amazing services</h2>

      <div className="services__container  bd-grid">
        <div className="services__content">
          <img src={dishSvg} className="services__img" alt="dish" />
          <h3 className="services__title">Excellent food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>

        <div className="services__content">
          <img src={pizzaSvg} className="services__img" alt="pizza" />

          <h3 className="services__title">Fast food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>

        <div className="services__content">
          <img src={truckSvg} className="services__img" alt="truck" />
          <h3 className="services__title">Delivery</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
