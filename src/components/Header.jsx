import { Link } from "react-router-dom";
import Logo from "../assets/LogoMarvel.png";
import Hero from "./Hero";

import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="container ">
        <div className="header-bloc">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo Marvel" />
            </Link>
          </div>

          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
