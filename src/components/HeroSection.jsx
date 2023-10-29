import Headline from "./Headline";

const Hero = () => {
  return (
    <div className="flex flex-col mt-0 md:mt-8">
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
        Hot Topic
      </h1>
      <Headline />
    </div>
  );
};

export default Hero;
