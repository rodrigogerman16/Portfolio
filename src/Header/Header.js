import classes from "./Header.module.css"

const Header = () => {
    return(      
        <div className={classes.HeaderInitial}>
          <div className={classes.HeaderTitle}>
            <h2>Hi</h2>
            <h2>I'm Rodrigo</h2>
            <p>Front End Developer</p>
            <h6>I like to create amazing experiences</h6>
          </div>            
        </div>      
    )
}

export default Header