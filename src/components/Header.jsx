import Logo from "../assets/LogoMarvel.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="container ">
        <div className="header-bloc">
          <div>
            <img src={Logo} alt="logo Marvel" />
            {/* <input type="search" placeholder="Recherche" /> */}
          </div>

          <div>
            <div className="header-button">
              <button>Personnages</button>
              <button>Comics</button>
              <button>Favoris</button>

              <button>Se connecter</button>
              <button>S'inscrire</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
