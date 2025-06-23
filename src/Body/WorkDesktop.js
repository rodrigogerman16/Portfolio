import classes from "./Work.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkDesktop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.Body} id="work">
      <div className={classes.Work}>
        {/*Woffinder*/}
        <div data-aos="zoom-in" className={classes.WorkCard}>
          <div className={classes.WorkImg}>
            <img
              src="mercado.png"
              className={classes.MercadoSolidario}
              alt="Mercado Solidario Logo"
            />
          </div>
          <div className="p-5">
            <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
              Mercado Solidario
            </h5>
            <div className="flex flex-wrap gap-x-1 gap-y-2 pb-3">
              <span className="bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">React</span>
              <span className="bg-yellow-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
              <span className="bg-white text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded">NextJs</span>
              <span className="bg-cyan-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Tailwind</span>
              <span className="bg-white text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded">MongoDb</span>
              <span className="bg-white text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded">APIs Integrations</span>
              <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
            </div>
            <p className="font-normal text-gray-400 mb-3 md:h-20">
              Platform for donating, volunteering, creating initiatives and finding workers.
            </p>
            <a
              href="https://mercadosolidario.vercel.app/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              See more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/*Belen Tejedor*/}
        <div data-aos="zoom-in" className={classes.WorkCard}>
          <div className={classes.WorkImg}>
            <img src="belenpage.png" alt="belenpage" />
          </div>
          <div className="p-5">
            <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
              Belen Tejedor
            </h5>
            <div className="flex flex-wrap gap-x-1 gap-y-2 pb-3 md:pb-10">
              <span className="bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">React</span>
              <span className="bg-yellow-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
              <span className="bg-cyan-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Tailwind</span>
              <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
            </div>
            <p className="font-normal text-gray-400 mb-3 md:h-20">
            Personal website for two times bachata world champion.
            </p>
            <a
              href="https://belentejedor.vercel.app/"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              See more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/*Weather App*/}
        <div data-aos="zoom-in" className={classes.WorkCard}>
          <div className={classes.WorkImg}>
            <img src="myweatherapp.png" alt="weatherapp-img" />
          </div>
          <div className="p-5">
            <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
              Weather App
            </h5>
            <div className="flex flex-wrap gap-x-1 gap-y-2 pb-3 md:pb-10">
              <span className="bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">React</span>
              <span className="bg-violet-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Redux</span>
              <span className="bg-yellow-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
              <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">CSS</span>
              <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
              <span className="bg-white text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded">APIs Integrations</span>
            </div>
            <p className="font-normal text-gray-400 mb-3 md:h-20">
              Search cities and find out their current temperatures.
            </p>
            <a
              href="https://weather-app-mocha-alpha.vercel.app/"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              See more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/*Timer App*/}
        <div data-aos="zoom-in" className={classes.WorkCard}>
          <div className={classes.WorkImg}>
            <img src="timerapp.png" alt="timerapp-img" />
          </div>
          <div className="p-5">
            <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
              Timer App
            </h5>
            <div className="flex flex-wrap gap-x-1 gap-y-2 pb-3 md:pb-10">
              <span className="bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">React</span>
              <span className="bg-yellow-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
              <span className="bg-blue-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">CSS</span>
              <span className="bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
            </div>
            <p className="font-normal text-gray-400 mb-3 md:h-20">
            Application to perform countdown and count forward.
            </p>
            <a
              href="https://timer-app-eight.vercel.app/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              See more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDesktop;
