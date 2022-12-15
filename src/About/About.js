import classes from "./About.module.css"


const About = () =>{
    return(
        <div className={classes.AboutContainer}>
            <div className={classes.AboutImg}>
                <img src="profile.png" alt='profilepng'/>
            </div>
            <div className={classes.AboutDescription}>
                <p>
                    I’m a Front-End Developer located in Madrid managing a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p>
                <p>
                    Well-organised person, problem solver, independent employee with attention to detail but also a teamplayer with high communication skills and leadership. Fan of strategic games, Electronic music, TV series and Camping in the mountain.
                </p>
                <p>
                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                </p>
            </div>
        </div>
    )
}

export default About