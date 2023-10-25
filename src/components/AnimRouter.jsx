import { Routes, Route } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Covid from "../pages/Covid";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Programming from "../pages/Programming";

const AnimRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/indonesia" element={<Indonesia />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AnimRouter;
