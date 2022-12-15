import classes from './Skills.module.css'

const Skills = () =>{
    return(
        <div className={classes.SkillsContainer}>
            <div className={classes.SkillsTitle}>
                <h2>SKILLS</h2>
            </div>
            <div className={classes.SkillsItemsContainer}>
                <div className={classes.SkillItem}>
                    <img src='/leader.png' alt='Leaderpng'/>
                    <p>Leader</p>
                </div>
                <div className={classes.SkillItem}>
                    <img src='/energetic.png' alt='energeticpng'/>
                    <p>Energetic</p>
                </div>
                <div className={classes.SkillItem}>
                    <img src='/optimistic.png' alt='optimisticpng'/>
                    <p>Optimistic</p>
                </div>
                <div className={classes.SkillItem}>
                    <img src='/orator.png' alt='oratorpng'/>
                    <p>Good Communicator</p>
                </div>
                <div className={classes.SkillItem}>
                    <img src='/friendly.png' alt='friendlypng'/>
                    <p>Friendly</p>
                </div>
                <div className={classes.SkillItem}>
                    <img src='/autodidact.png' alt='autodidactpng'/>
                    <p>Autodidact</p>
                </div>
            </div>
        </div>
    )
}

export default Skills