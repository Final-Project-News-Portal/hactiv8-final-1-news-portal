import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/reducers/home";

function Headline() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

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

  const heroStyle = {
    width: "100%",
    height: heroHeight,
  };

  return (
    <section className="w-full flex flex-col md:flex-row mt-0">
      <div className=" relative overflow-hidden w-full rounded-lg ">
        <a href={data[0].url} target="blank">
          <img src={data[0].urlToImage} alt="" style={heroStyle} />
        </a>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.50)]">
          <div className="flex h-full items-end">
            <div className="px-6 text-center text-white md:px-12">
              <a href={data[0].url} target="_blank" rel="noopener noreferrer">
                {" "}
                <h1 className="mt-6 ml-0 mb-3 text-lg font-semibold tracking-tight md:text-2xl xl:text-5xl text-left">
                  {data[0].title}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] cursor-pointer text-xl">
        <p className="ml-6 text-2xl hidden sm:block  text-gray-600">
          {data[0].description}
        </p>
      </div>
    </section>
  );
}

export default Headline;
