import Hero from "../components/HeroSection";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-0">
      <div className="flex mt-24 justify-center items-center md:hidden lg:hidden">
        <SearchBar />
      </div>
      <Hero />
    </div>
  );
}
export default Home;
