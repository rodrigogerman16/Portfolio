import NavLinks from "./NavLinks"
import classes from "./NavBar.module.css"
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import { useState } from "react"

const MobileNavigation = () => {

    const[open, setOpen] = useState(false);

    const hamburguerIcon = <CgMenuRound className={classes.Hamburguer} 
    size='40px' color='white'
    onClick={() => setOpen(!open)}/>;

    const closeIcon = <CgCloseO className={classes.Hamburguer} 
    size='40px' color='white'
    onClick={() => setOpen(!open)}/>;

    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
     );
}

export default MobileNavigation;