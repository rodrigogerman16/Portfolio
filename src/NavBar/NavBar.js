import Navigation from "./Navigation";
import classes from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={classes.NavBar}>
            <Navigation/>
        </div>
    )
}

export default NavBar;