import { FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Services from "./screens/Services";
import Menu from "./screens/Menu";
import Contact from "./screens/Contact";

interface Props {}
const App: FC<Props> = () => {
  return (
    <Router>
      <Header />
      <main className="l-main">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
