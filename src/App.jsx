import { BrowserRouter as Router } from "react-router-dom";
import AnimRouter from "./components/AnimRouter";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRouter />
      </Router>
    </>
  );
};

export default App;
