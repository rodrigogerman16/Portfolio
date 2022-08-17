import classes from "./Work.module.css"
import Work from './WorkImages'
import React from 'react'  
import { motion } from 'framer-motion'

const WorkMobile = () =>{
    const workTitle = ["My Piroska", "Belen Tejedor Page", "QuizApp", "Weather App"]
    return(
    <motion.div className={classes.WorkSliderContainer}>
      <motion.div className={classes.WorkSliderFlex} drag='x' dragConstraints={{right: 0, left: -550}}>
        {Work.map(Work => (
          <motion.div className={classes.WorkSlider}>
            <motion.div className={classes.WorkImg}>
              <img src={Work} alt=''/>
            </motion.div>            
            <motion.div className={classes.WorkDescription}>
              <h3>Lore ipsum</h3>
              <p>Lore ipsum</p>
            </motion.div>
          </motion.div>
          
        ))}
      </motion.div>
    </motion.div>
    )
}

export default WorkMobile