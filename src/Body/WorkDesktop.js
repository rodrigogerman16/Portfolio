import classes from "./Work.module.css";

const WorkDesktop = () =>
{
    return(
        <div className={classes.Body} id="work">
        <div className={classes.Work}>
          <a className={classes.WorkCard} href='https://mypiroska.com/index.html'>
            <div className={classes.WorkImg}>
              <img src='mypiroska.png' alt='mypiroska'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>My Piroska</h3>
              <p>Lore ipsum</p>
            </div>
          </a>
          <a className={classes.WorkCard} href='https://belentejedor.vercel.app/'>
            <div className={classes.WorkImg}>
              <img src='belenpage.png' alt='belenpage'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>Belen Tejedor Landing Page</h3>
              <p>Lore ipsum</p>
            </div>
          </a>
          <div className={classes.WorkCard}>
            <div className={classes.WorkImg}>
              <img src='quizapp.png' alt='geoquizz'/>
            </div>
            <div className={classes.WorkDescription}>
              <h3>GeoQuiz</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
          <div className={classes.WorkCard}>
            <div className={classes.WorkImg}>
              <img src='weatherapp.png' />
            </div>
            <div className={classes.WorkDescription}>
              <h3>Weather App</h3>
              <p>Lore ipsum</p>
            </div>
          </div>
       </div>
       </div>
    )
}

export default WorkDesktop