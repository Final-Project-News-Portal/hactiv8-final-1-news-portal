import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import PropTypes from 'prop-types';

const FetchData = ({ cat,title }) => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          cat
            ? `https://newsapi.org/v2/everything?q=${cat}&apiKey=04a789c791974fec8efcabd0ab880136`
            : "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=04a789c791974fec8efcabd0ab880136"
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newsData ? (
          newsData.map((article, index) => (
            <Card key={index} article={article} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

FetchData.propTypes = {
  cat: PropTypes.string,
  title : PropTypes.string,
  country: PropTypes.string
};

export default FetchData;
