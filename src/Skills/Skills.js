import classes from './Skills.module.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

   
const Skills = () =>{
    useEffect(() =>{
        AOS.init({duration: 1000})
      }, [])
    return(
        <div className={classes.SkillsContainer}>
            <div data-aos='fade-right'>
            <h2 className="mt-20 mb-14 text-white font-sans font-bold text-center text-2xl">SKILLS</h2>
            </div>
            <div className={classes.SkillsItemsContainer}>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/leader.png' alt='Leaderpng'/>
                    <p>Leader</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/energetic.png' alt='energeticpng'/>
                    <p>Energetic</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/optimistic.png' alt='optimisticpng'/>
                    <p>Optimistic</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/speaker.png' alt='speakerpng'/>
                    <p>Good Speaker</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/friendly.png' alt='friendlypng'/>
                    <p>Friendly</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/autodidact.png' alt='autodidactpng'/>
                    <p>Autodidact</p>
                </div>
            </div>
        </div>
    )
}

export default Skills