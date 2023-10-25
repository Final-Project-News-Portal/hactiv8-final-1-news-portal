import { BrowserRouter as Router } from "react-router-dom";
import AnimRouter from "./components/AnimRouter";

const App = () => {
  return (
    <>
      <Router>
        <AnimRouter />
      </Router>
    </>
  );
};

export default App;
