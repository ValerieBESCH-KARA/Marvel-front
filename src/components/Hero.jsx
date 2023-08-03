import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [search, setSearch] = useState("");
  return (
    <hero>
      <div>
        <Link to="/characters">Personnages</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favoris">Favoris</Link>

        <button>Se connecter</button>
        <Link to="/signup">S'inscrire</Link>
        <div>
          <input
            className="search"
            value={search}
            type="text"
            placeholder="Entre le nom de ton Personnage / Comics "
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

      <div />
    </hero>
  );
};
export default Hero;
