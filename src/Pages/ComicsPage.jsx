import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="books">
      {data.results.map((comic) => {
        return (
          <div className="comics">
            <article key={comic._id}>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="comic"
              />
              <h2>{comic.title}</h2>
              <p>{comic.description}</p>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default ComicsPage;
