import { Routes, Route } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Covid from "../pages/Covid";
<<<<<<< HEAD
import Programming from "../pages/programming";
import Search from "../pages/Search";
=======
import Search from "../pages/Search";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
>>>>>>> 9062451 (Updated HeroSection, added Headline component)

const AnimRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Indonesia />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
=======
      <Route path="/" element={<Home />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
      <Route path="/indonesia" element={<Indonesia />} />
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
    </Routes>
  );
};

export default AnimRouter;
