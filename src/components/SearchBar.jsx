import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
      window.location.reload();
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (


<div className="">
        {/* search border */}
        <div className="text-xl cursor-pointer flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleKeyPress}
            className="text-base pr-2 h-8 w-64 rounded-lg pl-3 border"
          />

          {/* search icon*/}
          <button
            onClick={handleSearch}
            className="px-2 text-2xl items-center "
          >
            <FiSearch />
          </button>
        </div>
      </div>
  )
}

export default SearchBar