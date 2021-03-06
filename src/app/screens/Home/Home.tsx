import { FC } from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/img/home.png";

interface Props {}
const Home: FC<Props> = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Tasty food</h1>
          <h2 className="home__subtitle">
            Try the best food of <br /> the week.
          </h2>
          <Link to="/menu" className="button">
            View Menu
          </Link>
        </div>

        <img src={homeImg} alt="food plate" className="home__img" />
      </div>
    </section>
  );
};

export default Home;
