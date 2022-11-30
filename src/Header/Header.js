import classes from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return(      
        <div className={classes.HeaderInitial} id='header'>
          <div className={classes.HeaderTitle}>
            <h2>Hi</h2>
            <h2>I'm Rodrigo</h2>
            <p>Front End Developer</p>
            <h6>I like to create amazing experiences</h6>
            <div className='Social-icons'>
        <a href="https://www.instagram.com/rodrigogerman2/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://twitter.com/RodriiGerman"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/rodrigo-german-8408a5127/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
          </div>            
        </div>      
    )
}

export default Header