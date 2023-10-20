import { Routes, Route } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Covid from "../pages/Covid";
import Programming from "../pages/programming";
import Search from "../pages/Search";

const AnimRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Indonesia />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AnimRouter;
