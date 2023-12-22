import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/reducers/home";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [heroHeight, setHeroHeight] = useState(
    windowWidth > 767 ? "100%" : "350px"
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setHeroHeight(window.innerWidth > 767 ? "600px" : "300px");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headline = data && data.length > 0 ? data[0] : null;
  const heroStyle = {
    width: "100%",
    height: heroHeight ? "600px" : "300px",
  };

  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      {headline && (
        <section className="w-full flex flex-col md:flex-row mt-10">
          <div className=" relative overflow-hidden w-full rounded-lg ">
            <a href={headline.url} target="blank">
              <img src={headline.urlToImage} alt="" style={heroStyle} />
            </a>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)]">
              <div className="flex h-full items-end">
                <div className="px-6 text-center text-white md:px-12">
                  <a
                    href={headline.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="mt-6 ml-0 mb-3 text-lg font-semibold tracking-tight md:text-2xl xl:text-5xl text-left">
                      {headline.title}
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] cursor-pointer text-xl">
            <p className="ml-6 text-2xl hidden sm:block text-gray-600">
              {headline.description}
            </p>
          </div>
        </section>
      )}
      <div className="ml-10 mr-10 mx-auto p-4 mt-20">
        <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
          Hot Topic
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            data.map((article, index) => <Card key={index} article={article} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
