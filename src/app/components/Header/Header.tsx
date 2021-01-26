import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}
const Header: FC<Props> = () => {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const refHeader = useRef<HTMLElement | null>(null);
  const refMenu = useRef<HTMLDivElement | null>(null);
  const refThemeBtn = useRef<HTMLElement | null>(null);

  const getActiveClassName = (idActive: number) => {
    refMenu.current?.classList.remove("show-menu");
    window.scrollTo({
      top: 0,
    });
    return active === idActive ? "nav__link active-link" : "nav__link";
  };

  const scrollActive = () => {
    if (window.scrollY > 60) {
      refHeader.current?.classList.add("scroll-header");
    } else {
      refHeader.current?.classList.remove("scroll-header");
    }

    refMenu.current?.classList.remove("show-menu");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      refThemeBtn.current?.classList.add("bx-sun");
    } else {
      document.body.classList.remove("dark-theme");
      refThemeBtn.current?.classList.remove("bx-sun");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="l-header" id="header" ref={refHeader}>
      <nav className="nav bd-container">
        <Link to="/" className="nav__logo">
          Tasty
        </Link>

        <div className="nav__menu" ref={refMenu} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className={getActiveClassName(0)}
                onClick={() => setActive(0)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                className={getActiveClassName(1)}
                onClick={() => setActive(1)}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className={getActiveClassName(2)}
                onClick={() => setActive(2)}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/menu"
                className={getActiveClassName(3)}
                onClick={() => setActive(3)}
              >
                Menu
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className={getActiveClassName(4)}
                onClick={() => setActive(4)}
              >
                Contact us
              </Link>
            </li>

            <li>
              <i
                className="bx bx-moon change-theme"
                ref={refThemeBtn}
                id="theme-button"
                onClick={() => {
                  document.body.classList.toggle("dark-theme");
                  refThemeBtn.current?.classList.toggle("bx-sun");
                  setTheme((current) =>
                    current === "dark" ? "light" : "dark"
                  );
                }}
              ></i>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i
            className="bx bx-menu"
            onClick={() => {
              refMenu.current?.classList.toggle("show-menu");
            }}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
