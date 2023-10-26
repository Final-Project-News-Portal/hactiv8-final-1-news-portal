import ButtonSave from "./ButtonSave";
import PropTypes from 'prop-types';
import ImgNotFound from "../assets/ImgNot.png";

function Card({ article }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
      <div>
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover"
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
          <p className="text-gray-700 hidden md:hidden lg:block text-lg">
            {/* Konten teks */}
          </p>
        </div>
      </div>
      <div className="flex flex-row px-6 py-4 justify-between">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Baca lebih lanjut
        </a>
        <ButtonSave article={article} />
      </div>
    </div>
  );
}

Card.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string,
    // tambahkan validasi prop lain yang diperlukan
  }),
};

export default Card;

