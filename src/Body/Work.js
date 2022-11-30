import WorkDesktop from "./WorkDesktop"
import WorkMobile from "./WorkMobile"
import classes from "./Work.module.css"

const Work = () =>{
    return(
        <div>
            
            <h2 className={classes.WorkTitle} id='work'>WORK</h2>
            <WorkDesktop/>
            <WorkMobile/>
        </div>
    )
}

export default Work