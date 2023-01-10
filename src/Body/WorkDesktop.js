import classes from "./Work.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkDesktop = () =>
{
  useEffect(() =>{
    AOS.init({duration: 1000})
  }, [])
    return(
        <div className={classes.Body}>
        <h2 data-aos='fade-right' className={classes.WorkTitle}>Some of my latest work</h2>
        <div className={classes.Work}>
          <a data-aos='zoom-in' className={classes.WorkCard} href='https://dogs-app-sandy.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='dogapp.png' alt='dogapp'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Dog finder (In Process)</h3>
            </div>
          </a>
          
          <a data-aos='zoom-in' className={classes.WorkCard} href='https://belentejedor.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Belen Tejedor Landing Page</h3>
            </div>
          </a>          

          <a data-aos='zoom-in' className={classes.WorkCard} href='https://weather-app-mocha-alpha.vercel.app/' target="_blank" rel="noreferrer"> 
            <div className={classes.WorkImg}>
              <img src='myweatherapp.png' alt='weatherapp-img'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Weather App</h3>
            </div>
          </a>

          <a data-aos='zoom-in' className={classes.WorkCard} href='https://timer-app-eight.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src="timerapp.png" alt="timerapp-img"/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Timer App</h3>
            </div>
          </a>
       </div>
       </div>
    )
}

export default WorkDesktop