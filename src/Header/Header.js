import classes from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Header = () => {

  const [isActive, setIsActive] = useState(true);

  const handleClick = event => {
    setIsActive(current => !current);
    console.log(handleClick)
  };

    return(
      
        <div className={classes.HeaderInitial}>
          {isActive && <div className={classes.HeaderTitle}>
            <div><h2>Hi,</h2></div>
            <div><h2>I'm Rodrigo,</h2></div>
            <div><p>Front End Developer</p></div> 
          </div>
          }

          {!isActive && <div className={classes.HeaderTitle}>
            <div><h2>I like,</h2></div>
            <div><h2>To create,</h2></div>
            <div><p>Amazing experiences</p></div> 
          </div>}
          
          <div className={classes.HeaderBtn} onClick={handleClick}>
                {isActive && <button><FontAwesomeIcon icon={faPlay}/></button>}
                {!isActive && <button><FontAwesomeIcon icon={faRotateBack}/></button>}
            </div>
        </div>
      
    )
}

export default Header