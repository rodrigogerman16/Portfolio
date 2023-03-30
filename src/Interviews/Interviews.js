import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Interview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-10 mt-10">
      <h2
        className="mb-14 text-white font-sans font-bold text-center text-3xl"
        data-aos="zoom-in"
      >
        Interviews
      </h2>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>        
        <iframe
          data-aos="zoom-in"
          src="https://www.youtube.com/embed/MwuSLfqTbuo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
        />
      </div>
      <div>
        <iframe
          data-aos="zoom-in"
          src="https://www.youtube.com/embed/cpmQtzpaOwQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Interview;
