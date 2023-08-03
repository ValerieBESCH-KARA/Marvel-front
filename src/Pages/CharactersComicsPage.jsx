import axios from "axios";
import { useState, useEffect } from "react";

const CharactersCommicsPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://site--marvel-backend--4j598vz4fhlc.code.run/comics/:characterId"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("charactersComics error>>>", error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ....</p>
  ) : (
    <main>
      <div>
        {data.results.map((characterId) => {
          return (
            <div key={characterId._id}>
              <div>{characterId.comics}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default CharactersCommicsPage;
