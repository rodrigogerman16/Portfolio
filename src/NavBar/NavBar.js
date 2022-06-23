import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import classes from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={classes.NavBar}>
            <Navigation/>
            <MobileNavigation/>
        </div>
    )
}

export default NavBar;