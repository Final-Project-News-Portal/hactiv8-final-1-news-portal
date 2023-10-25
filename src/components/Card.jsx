import ButtonSave from "./buttonSave";

/* eslint-disable react/prop-types */
function Card({ article }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
      <div>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-gray-700">{article.description}</p>
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

export default Card;
