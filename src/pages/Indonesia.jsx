import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

function Indonesia() {
  const [newsData, setNewsData] = useState([]);
  

  useEffect(() => {
    // const apiKey = "04a789c791974fec8efcabd0ab880136";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=04a789c791974fec8efcabd0ab880136`;

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
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-0 md:mt-14 lg:mt-lg-14">
      <div className="flex mt-24 justify-center items-center md:hidden lg:hidden">
        <SearchBar />
      </div>
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">Indonesia</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {newsData.map((article, index) => (
        <Card key={index} article={article}/>
      ))}
    </div>
    </div>
  );
}

export default Indonesia;
