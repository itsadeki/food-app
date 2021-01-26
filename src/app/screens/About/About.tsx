import { FC } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/img/about.jpg";

interface Props {}
const About: FC<Props> = () => {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container  bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">About us</span>
          <h2 className="section-title about__initial">
            We cook the best <br /> tasty food
          </h2>
          <p className="about__description">
            We cook the best food in the entire city, with excellent customer
            service, the best meals and at the best price, visit us.
          </p>
          <Link to="/menu" className="button">
            View Menu
          </Link>
        </div>

        <img src={aboutImg} alt="" className="about__img" />
      </div>
    </section>
  );
};

export default About;
