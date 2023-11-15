import Card from "../components/Card";
import { useSelector } from "react-redux";

const Saved = () => {
  const savedNews = useSelector((state) => state.savedNews.news);
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-20">
      {savedNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {savedNews.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      ) : (
        <p>No News Saved...</p>
      )}
    </div>
  );
};

export default Saved;
