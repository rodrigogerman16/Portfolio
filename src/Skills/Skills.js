import classes from "./Skills.module.css"

const Skills = () =>{
    return(
        <div className={classes.SkillsContainer}>
            <div className={classes.SkillsTitle}>
                <h2>STACK</h2>
            </div>
            <div className={classes.SkillsImgContainer}>

                <div>
                    <img src='/html.png' alt='htmlpng' />
                    <p>HTML</p>
                </div>

                <div>
                    <img src='/css.png' alt='csspng'/>
                    <p>CSS</p>
                </div>

                <div>
                    <img src='/javascript.png' alt='javascriptpng'/>
                    <p>JavaScript</p>
                </div>

                <div>
                    <img src='/git.png' alt='gitpng'/>
                    <p>Git</p>
                </div>

                <div>
                    <img src='/react.png' alt='reactpng'/>
                    <p>React</p>
                </div>
                
                <div>
                    <img src='/redux.png' alt='reduxpng'/>
                    <p>Redux</p>
                </div>
                
                <div>
                    <img src='/nodejs.png' alt='nodejspng'/>
                    <p>NodeJs</p>
                </div>
                
                <div>
                    <img src='/postgresql.png' alt='postgresqlpng'/>
                    <p>PostgreSql</p>
                </div>

                <div>
                    <img src='/sequelize.png' alt='sequelizepng'/>
                    <p>Sequelize</p>
                </div>
                               
            </div>
        </div>
   
    )
}

export default Skills;