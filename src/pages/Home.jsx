import Hero from "../components/HeroSection";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../store/reducers/home";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <Hero />
      <div className="ml-10 mr-10 mx-auto p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            data.map((articles, index) => (
              <Card key={index} article={articles} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
