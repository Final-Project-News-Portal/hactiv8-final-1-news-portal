import { Routes, Route } from "react-router-dom";
import Indonesia from "../pages/Indonesia";
import Covid from "../pages/Covid";
<<<<<<< HEAD
<<<<<<< HEAD
import Programming from "../pages/programming";
import Search from "../pages/Search";
=======
import Search from "../pages/Search";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
=======
import Search from "../pages/Search";
import Home from "../pages/Home";
import Programming from "../pages/Programming";
>>>>>>> 95d94721239a0d9fc72ce217f8d75d419f1f0c37

const AnimRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path="/" element={<Indonesia />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
=======
=======
>>>>>>> 95d94721239a0d9fc72ce217f8d75d419f1f0c37
      <Route path="/" element={<Home />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/search" element={<Search />} />
      <Route path="/indonesia" element={<Indonesia />} />
<<<<<<< HEAD
>>>>>>> 9062451 (Updated HeroSection, added Headline component)
=======
>>>>>>> 95d94721239a0d9fc72ce217f8d75d419f1f0c37
    </Routes>
  );
};

export default AnimRouter;
