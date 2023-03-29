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
      <div className="flex flex-col justify-center gap-16 w-full items-center xl:flex-row ">
        <div>        
        <iframe
          data-aos="zoom-in"
          height="315"
          src="https://www.youtube.com/embed/MwuSLfqTbuo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div>
        <iframe
          data-aos="zoom-in"
          height="315"
          src="https://www.youtube.com/embed/cpmQtzpaOwQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Interview;
