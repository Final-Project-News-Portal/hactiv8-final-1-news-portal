import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (query) {
          const apiKey = "50fb6c33c92b4a5a9932ecd5e8916d18";
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
          );
          setSearchResults(response.data.articles);
        }
      } catch (error) {
        console.error("Error fetching search results: ", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="container mx-auto p-4 mt-14">
=======
    <div className="flex ml-10 mr-10 mx-auto p-4 mt-0">
    <div className="mx-auto p-4 mt-14">
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
=======
    <div className="flex ml-10 mr-10 mx-auto p-4 mt-0">
    <div className="mx-auto p-4 mt-14">
>>>>>>> 95d94721239a0d9fc72ce217f8d75d419f1f0c37
      <h1 className="text-3xl font-semibold mb-4">{query}</h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      ) : (
        <p>Searching...</p>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </div>
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
=======
    </div>
>>>>>>> 95d94721239a0d9fc72ce217f8d75d419f1f0c37
  );
}

export default Search;
