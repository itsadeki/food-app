import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}
const Footer: FC<Props> = () => {
  return (
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content">
          <Link to="/" className="footer__logo">
            Tasty Food
          </Link>
          <span className="footer__description">Restaurant</span>
          <div>
            <Link to="/" className="footer__social">
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link to="/" className="footer__social">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link to="/" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </Link>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Services</h3>
          <ul>
            <li>
              <Link to="/" className="footer__link">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Fast food
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Reserve your spot
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul>
            <li>
              <Link to="/" className="footer__link">
                Event
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/" className="footer__link">
                Terms of services
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Adress</h3>
          <ul>
            <li>Xxxx - Xxxx</li>
            <li>Xx xxxx xx</li>
            <li>XXX - XXX - XXX</li>
            <li>itsadeki@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">@Copyright 2021 - by itsadeki@gmail.com</p>
    </footer>
  );
};

export default Footer;
