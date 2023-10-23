import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const Header = () => {
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
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary fixed top-0 w-full">
      <div className="flex flex-row w-full h-14 justify-end items-center pr-5 absolute gap-x-3 bg-white shadow-lg">
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
        {/* bar icon */}
        <div
          onClick={() => setOpenMenu(true)}
          className="text-3xl cursor-pointer"
        >
          <CgMenuRight />
        </div>
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-[360px] h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-6 top-5 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/"}>Indonesia</Link>
          </li>
          <li>
            <Link to={"/covid"}>Covid</Link>
          </li>
          <li>
            <Link to={"/programming"}>Programming</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Header;
