import "../styles/charactersPage.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharactersCommicsPage from "./CharactersComicsPage";

const CharactersPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--4j598vz4fhlc.code.run/characters"
        );

        console.log("data charactersPage >>>", response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error CharactersPage catch>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <main>
        <div className="container Characters">
          {data.results.map((character) => {
            return (
              <div className="characters-bloc">
                <div key={character._id}>
                  <Link
                    to="/characterComics"
                    element={
                      <CharactersCommicsPage characterId={character._id} />
                    }
                  >
                    <img
                      src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                      alt="preview"
                    />
                  </Link>

                  <h2> {character.name}</h2>

                  <p>{character.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CharactersPage;
