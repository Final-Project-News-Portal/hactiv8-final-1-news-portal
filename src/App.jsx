import { BrowserRouter as Router } from "react-router-dom";
import AnimRouter from "./components/AnimRouter";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimRouter />
      </Router>
    </>
  );
};

export default App;
