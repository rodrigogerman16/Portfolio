import classes from "./Work.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkDesktop = () =>
{
  useEffect(() =>{
    AOS.init({duration: 11500})
  }, [])
    return(
        <div className={classes.Body}>
        <h2 data-aos='fade-down'
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
             data-aos-duration="500" className={classes.WorkTitle}>Some of my latest work</h2>
        <div className={classes.Work}>
          
          <a data-aos='fade-right'
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
             data-aos-duration="500" className={classes.WorkCard} href='https://belentejedor.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Belen Tejedor Landing Page</h3>
            </div>
          </a>          

          <a data-aos='fade-right'
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
             data-aos-duration="500" className={classes.WorkCard} href='https://weather-app-mocha-alpha.vercel.app/' target="_blank" rel="noreferrer"> 
            <div className={classes.WorkImg}>
              <img src='myweatherapp.png' alt='weatherapp-img'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Weather App</h3>
            </div>
          </a>

          <a data-aos='fade-right'
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
             data-aos-duration="500" className={classes.WorkCard} href='https://timer-app-eight.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src="timerapp.png" alt="timerapp-img"/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Timer App</h3>
            </div>
          </a>          

          <div data-aos='fade-right'
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"
             data-aos-duration="500" className={classes.WorkCard} href='https://geoquiz-mpgsgymel-rodrigogerman16.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='quizapp.png' alt='geoquizz'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>GeoQuiz (In Process)</h3>
            </div>
          </div>
       </div>
       </div>
    )
}

export default WorkDesktop