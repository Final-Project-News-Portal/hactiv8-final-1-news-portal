import { BrowserRouter as Router } from "react-router-dom";
import AnimRouter from "./components/AnimRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
