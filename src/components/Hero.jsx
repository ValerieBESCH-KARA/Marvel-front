import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [search, setSearch] = useState("");
  return (
    <hero>
      <div>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favoris">Favoris</Link>

        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>

        <div>
          <input
            className="search"
            value={search}
            type="text"
            placeholder={"Search"}
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
