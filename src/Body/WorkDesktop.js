import classes from "./Work.module.css";

const WorkDesktop = () =>
{
    return(
        <div className={classes.Body}>
        <h2 className={classes.WorkTitle}>Some of my latest work...</h2>
        <div className={classes.Work}>

          <a className={classes.WorkCard} href='https://belentejedor.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Belen Tejedor Landing Page</h3>
            </div>
          </a>

          <div className={classes.WorkCard} href='https://geoquiz-mpgsgymel-rodrigogerman16.vercel.app/' target="_blank" rel="noreferrer">
            <div className={classes.WorkImg}>
              <img src='quizapp.png' alt='geoquizz'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>GeoQuiz (In Process)</h3>
            </div>
          </div>

          <a className={classes.WorkCard} href='https://weather-app-mocha-alpha.vercel.app/' target="_blank" rel="noreferrer"> 
            <div className={classes.WorkImg}>
              <img src='myweatherapp.png' alt='weatherapp-img'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Weather App</h3>
            </div>
          </a>

          <a className={classes.WorkCard} href='https://timer-app-eight.vercel.app/' target="_blank" rel="noreferrer">
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