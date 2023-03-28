import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Interview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <h2
        className="mt-20 mb-14 text-white font-sans font-bold text-center text-2xl"
        data-aos="zoom-in"
      >
        Interviews
      </h2>
      <div className="flex justify-center w-full">
        <iframe
          data-aos="zoom-in"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MwuSLfqTbuo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="flex justify-center w-full">
        <iframe
          data-aos="zoom-in"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MwuSLfqTbuo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default Interview;
