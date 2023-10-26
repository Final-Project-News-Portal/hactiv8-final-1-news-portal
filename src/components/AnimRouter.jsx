import { Routes, Route } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Covid from "../pages/Covid";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";

const AnimRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />}  />
      <Route path="/search" element={<Search />} />
      <Route path="/indonesia" element={<Indonesia />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  );
};

export default AnimRouter;
