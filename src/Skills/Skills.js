import classes from "./Skills.module.css"

const Skills = () =>{
    return(
        <div className={classes.SkillsContainer}>
            <div className={classes.SkillsTitle}>
                <h2>SKILLS</h2>
            </div>
            <div className={classes.SkillsImgContainer}>
                <img src='/html.png' alt='htmlpng' />
                <img src='/css.png' alt='csspng'/>
                <img src='/javascript.png' alt='javascriptpng'/>
                <img src='/react.png' alt='reactpng'/>
                <img src='/redux.png' alt='reduxpng'/>
                <img src='/nodejs.png' alt='nodejspng'/>
                <img src='/sequelize.png' alt='sequelizepng'/>
            </div>
        </div>
   
    )
}

export default Skills;