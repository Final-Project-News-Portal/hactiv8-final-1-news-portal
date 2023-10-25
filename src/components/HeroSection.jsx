import { useEffect, useState } from "react";
import Headline from "./Headline";
import Card from "./Card";
import axios from "axios";

const Hero = () => {
  const [newsData, setNewsData] = useState([]);
  const [headline, setHeadline] = useState({
    title: "",
    url: "",
    urlToImage: "",
    description: "",
  });

  useEffect(() => {
    const apiKey = "04a789c791974fec8efcabd0ab880136";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        if (response.data.articles && response.data.articles.length > 0) {
          const filteredArticles = response.data.articles.filter(
            (article) =>
              article.title &&
              article.url &&
              article.urlToImage &&
              article.description
          );
          setNewsData(filteredArticles.slice(1));
          setHeadline({
            title: filteredArticles[0].title,
            url: filteredArticles[0].url,
            urlToImage: filteredArticles[0].urlToImage,
            description: filteredArticles[0].description,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Headline hotTopic={headline} />

      <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
        {newsData.slice(1, 5).map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
