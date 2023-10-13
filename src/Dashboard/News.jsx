import React, { useState, useEffect } from "react";
import newsimg from "../assets/background.jpg";
import axios from "axios";

const News = () => {
  const [discription, setDiscription] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://newsdata.io/api/1/news?apikey=pub_30784d012a138da16c23555c406769efee9b3&q=tech`
        );
        setDiscription(res.data.results);
      } catch (error) {
        setError(true);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {error ? (
       <h2>Failed to fetch news data</h2>
      ) : discription.length > 0 ? (
        <div className="news">
          <div
            className="news-image"
            style={{backgroundImage: discription[0].image_url!==null
              ?( `url(${discription[0].image_url})`)
              : discription[0].image_url===null||undefined?(`url(${newsimg})`):{}}}
          >
            <h1>{discription[0].title}</h1>
            <p>{discription[0].pubDate}</p>
          </div>
          <div className="news-content">
            <p>{discription[0].content}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default News;
