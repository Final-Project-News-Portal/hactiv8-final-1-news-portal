import { useEffect, useState } from "react";
import Headline from "./Headline";
import Card from "./Card";
import axios from "axios";
import ButtonSave from "./ButtonSave";

const Hero = () => {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const from = oneMonthAgo.toISOString().slice(0, 10);
  const to = today.toISOString().slice(0, 10);

  const [newsData, setNewsData] = useState([]);
  const [headline, setHeadline] = useState({
    title: "",
    url: "",
    urlToImage: "",
    description: "",
  });

  useEffect(() => {
    const apiKey = "04a789c791974fec8efcabd0ab880136";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&from=${from}&to=${to}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data.articles);
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
    <div className="flex flex-col mt-0 md:mt-8">
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
        Hot Topic
      </h1>
      <Headline hotTopic={headline} />
      <h1 className="mt-6 mb-5 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-left">
        Latest Release
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newsData.slice(0, 20).map((article, index) => (
          <Card
            key={index}
            article={article}
            button={<ButtonSave article={article} />}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
