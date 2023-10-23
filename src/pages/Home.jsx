import { NavLink } from "react-router-dom";
import Hero from "../components/HeroSection";

const Home = () =>{
    return(
        <div className=" ml-10 mr-10 mx-auto p-4 mt-0">
            <h1 className="mt-6 mb-5 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-left">Hot Topic</h1>
                <Hero/>
                <NavLink/>
        </div>
    )
}
export default Home;

