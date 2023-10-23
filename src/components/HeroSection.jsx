import { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [headline, setHeadline] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const apiKey = '04a789c791974fec8efcabd0ab880136';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        if (response.data.articles && response.data.articles.length > 0) {
          setHeadline(response.data.articles[0].title);
          setBackgroundImage(response.data.articles[0].urlToImage);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '500px',
  };

  return (
    <div className="flex mr-0 ml-0 relative overflow-hidden" style={heroStyle}>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
        <div className="flex h-full items-end justify-start">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-6 ml-0 mb-3 text-3xl font-semibold tracking-tight md:text-4xl xl:text-5xl text-left">
              {headline}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
