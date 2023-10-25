/* eslint-disable react/prop-types */
function Headline({ hotTopic }) {
  return (
    <div className="flex gap-2">
      <div
        className="flex mr-0 ml-0 rounded-xl relative"
        style={{ width: "400rem", height: "500px" }}
      >
        <img
          src={hotTopic.urlToImage}
          alt={hotTopic.url}
          className="absolute rounded-xl w-full h-full bg-center object-cover z-0 "
        />
        <div className="flex h-full w-full bg-fixed bg-[hsla(0,0%,0%,0.75)] z-10 rounded-xl">
          <h1 className="px-6 self-end text-white md:px-12 mt-6 ml-0 mb-3 text-3xl font-semibold tracking-tight md:text-4xl xl:text-5xl text-left">
            <a href={hotTopic.url}>{hotTopic.title}</a>
          </h1>
        </div>
      </div>
      <div className="font-extrabold text-black self-center">
        <p>{hotTopic.description}</p>
      </div>
    </div>
  );
}

export default Headline;
