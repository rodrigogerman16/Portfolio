import classes from "./Stack.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stack = () =>{
    useEffect(() =>{
        AOS.init({duration: 1000})
      }, [])
    return(
        <div className={classes.StackContainer}>
            <div data-aos='fade-left' className={classes.StackTitle}>
                <h2>STACK</h2>
            </div>
            <div className={classes.StackImgContainer}>

                <div data-aos="zoom-in-up">
                    <img src='/html.png' alt='htmlpng' />
                    <p>HTML5</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src='/css.png' alt='csspng'/>
                    <p>CSS</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src='/javascript.png' alt='javascriptpng'/>
                    <p>JavaScript</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src='/git.png' alt='gitpng'/>
                    <p>Git</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src='/react.png' alt='reactpng'/>
                    <p>React</p>
                </div>
                
                <div data-aos="zoom-in-up">
                    <img src='/redux.png' alt='reduxpng'/>
                    <p>Redux</p>
                </div>
                
                <div data-aos="zoom-in-up">
                    <img src='/nodejs.png' alt='nodejspng'/>
                    <p>NodeJs</p>
                </div>
                
                <div data-aos="zoom-in-up">
                    <img src='/postgresql.png' alt='postgresqlpng'/>
                    <p>PostgreSql</p>
                </div>

                <div data-aos="zoom-in-up">
                    <img src='/sequelize.png' alt='sequelizepng'/>
                    <p>Sequelize</p>
                </div>
                               
            </div>
        </div>
   
    )
}

export default Stack;