import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <nav className="ml-6 mr-6 mt-5 flex flex-wrap justify-between p-4">
      <div className="flex items-center">
        <div className="flex bg-black rounded md:cursor-pointer">
          <Link to="/">
            <h1 className="text-3xl font-bold text-white p-2">News</h1>
          </Link>
        </div>
        <div className="flex text-2xl font-bold items-center cursor-pointer">
          <Link to="/">
            <h1 className="ml-4">Portal</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <SearchBar className="mr-4" />
        <SideBar/>
      </div>
    </nav>
  );
}





export default Navbar;