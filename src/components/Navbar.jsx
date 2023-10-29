import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="mr-0 ml-0 mb-2 mt-0 flex justify-between p-4 fixed top-0 left-0 right-0 z-50 shadow-md bg-white ">
      <div className="flex items-center ml-10 mr-10">
        <div className="flex bg-black rounded md:cursor-pointer">
          <Link to="/">
            <h1 className="text-1xl md:text-3xl lg:text-3xl font-bold text-white p-2">
              News
            </h1>
          </Link>
        </div>
        <div className="flex text-1xl md:text-3xl lg:text-3xl font-bold items-center cursor-pointer">
          <Link to="/">
            <h1 className="ml-3">Portal</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-0 md:mt-0">
        <div className="hidden md:flex mr-4">
          <SearchBar />
        </div>
        <div className="md:hidden cursor-pointer">
          <Link to="/search">
            <FiSearch className="text-2xl" />
          </Link>
        </div>
        <SideBar />
      </div>
    </nav>
  );
};

export default Navbar;
