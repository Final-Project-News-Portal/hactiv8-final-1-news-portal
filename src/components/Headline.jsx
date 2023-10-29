import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Headline() {
  const [Latest, setLatest] = useState({
    title: "",
    url: "",
    urlToImage: "",
    description: "",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [heroHeight, setHeroHeight] = useState(
    windowWidth > 767 ? "100%" : "350px"
  );

  useEffect(() => {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    const from = oneMonthAgo.toISOString().slice(0, 10);
    const to = today.toISOString().slice(0, 10);

    const apiKey = "04a789c791974fec8efcabd0ab880136";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&from=${from}&to=${to}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.articles && response.data.articles.length > 0) {
          const filteredArticles = response.data.articles.filter(
            (article) =>
              article.title &&
              article.url &&
              article.urlToImage &&
              article.description
          );
          setLatest({
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setHeroHeight(window.innerWidth > 767 ? "600px" : "300px");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heroStyle = {
    width: "100%",
    height: heroHeight,
  };

  return (
    <section className="w-full flex flex-col md:flex-row mt-0">
      <div className=" relative overflow-hidden w-full rounded-lg ">
        <a href={Latest.url} target="blank">
          <img src={Latest.urlToImage} alt="" style={heroStyle} />
        </a>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)]">
          <div className="flex h-full items-end">
            <div className="px-6 text-center text-white md:px-12">
              <a href={Latest.url} target="_blank" rel="noopener noreferrer">
                {" "}
                <h1 className="mt-6 ml-0 mb-3 text-lg font-semibold tracking-tight md:text-2xl xl:text-5xl text-left">
                  {Latest.title}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] cursor-pointer text-xl">
        <p className="ml-6 text-2xl hidden sm:block  text-gray-600">
          {Latest.description}
        </p>
      </div>
    </section>
  );
}

Headline.propTypes = {
  Latest: PropTypes.shape({
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Headline;
