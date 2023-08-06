import axios from "axios";
import { useEffect, useState } from "react";

import "../styles/comicsPage.css";

const ComicsPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--4j598vz4fhlc.code.run/comics"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <main>
      <div className="container comics">
        {data.results.map((comic) => {
          return (
            <div>
              <div className="comics-bloc">
                <div key={comic._id}>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt="comic"
                  />
                </div>

                <h2>{comic.title}</h2>

                <p>{comic.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ComicsPage;
