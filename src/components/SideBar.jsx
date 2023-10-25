import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
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

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex justify-between items-center mr-0">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer mr-10"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-[360px] h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute  text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul  
        onClick={() => setOpenMenu(false)}
        className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/indonesia"}>Indonesia</Link>
          </li>
          <li>
            <Link to={"/covid"}>Covid</Link>
          </li>
          <li>
            <Link to={"/programming"}>Programming</Link>
          </li>
          <li>
            <Link to={"/saved"}>Saved</Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SideBar;
