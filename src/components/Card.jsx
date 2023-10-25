/* eslint-disable react/prop-types */
function Card({ article }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
<<<<<<< HEAD
        <p className="text-gray-700">{article.description}</p>
=======
        <p className="text-gray-700">{article.description.slice(0, 100)}...</p>
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
      </div>
      <div className="flex flex-row px-6 py-4">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Baca lebih lanjut
        </a>
        <button className="ml-5">
          <p>Save</p>
        </button>
      </div>
    </div>
  );
}
<<<<<<< HEAD
//Contoh pr 2
=======

>>>>>>> 9062451 (Updated HeroSection, added Headline component)
export default Card;
