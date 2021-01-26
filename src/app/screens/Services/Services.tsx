import { FC } from "react";
import { ReactComponent as DishSVG } from "../../assets/img/dish.svg";
import { ReactComponent as PizzaSVG } from "../../assets/img/pizza.svg";
import { ReactComponent as TruckSVG } from "../../assets/img/truck.svg";

interface Props {}
const Services: FC<Props> = () => {
  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">Offering</span>
      <h2 className="section-title">Our amazing services</h2>

      <div className="services__container  bd-grid">
        <div className="services__content">
          <DishSVG className="services__img" />
          <h3 className="services__title">Excellent food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>

        <div className="services__content">
          <PizzaSVG className="services__img" />
          <h3 className="services__title">Fast food</h3>
          <p className="services__description">
            We offer our clients excellent quality services for many years, with
            the best and delicious food in the city.
          </p>
        </div>

        <div className="services__content">
          <TruckSVG className="services__img" />
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
