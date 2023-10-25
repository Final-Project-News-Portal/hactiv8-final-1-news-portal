import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

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
    <div className="ml-10 mr-10 mx-auto p-4 mt-24">
      <div className="flex mt-5 mb-9 justify-center items-center md:hidden lg:hidden">
        <SearchBar />
      </div>
      <h1 className="text-3xl font-semibold mb-4">{query}</h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {searchResults.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      ) : (
        <p>Searching...</p>
      )}
    </div>
  );
}

export default Search;
