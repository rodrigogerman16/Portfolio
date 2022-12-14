import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return(
        <ul>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.05}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/"><a href="#header">Home</a></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.10}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/about"><a href='about'>About</a></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.15}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/work"><a href='#work'>Work</a></Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.20}}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/contact"><a href="#footer">Contact</a></Link>
            </motion.li>      
        </ul>
        )
}

export default NavLinks;