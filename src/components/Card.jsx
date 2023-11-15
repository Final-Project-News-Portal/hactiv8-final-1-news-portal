/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import ImgNotFound from "../assets/ImgNot.png";
import { useDispatch, useSelector } from "react-redux";
import { addNews, removeNews } from "../store/reducers/save";

function Card({ article }) {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.savedNews.news);
  const isSaved = savedNews.some(
    (savedArticle) => savedArticle.title === article.title
  );

  const handleSave = () => {
    isSaved ? dispatch(removeNews(article)) : dispatch(addNews(article));
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
      <div>
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="image-not-available">
            <img src={ImgNotFound} alt="" />
          </div>
        )}
        <div className="px-6 py-4">
          <h2 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-light">
            {article.title}
          </h2>
          <p className="text-gray-700 hidden md:hidden lg:block text-lg"></p>
        </div>
      </div>
      <div className="flex flex-row px-6 py-4 justify-between">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 font-bold hover:scale-110 transition duration-300"
        >
          Read More
        </a>
        <button
          onClick={handleSave}
          className={`ml-2 ${
            isSaved
              ? "bg-red-500 text-white rounded items-center h-auto w-14 hover:bg-red-800"
              : "bg-blue-500 text-white rounded items-center h-auto w-12 hover:bg-blue-800"
          } transition-all duration-300`}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Card;
