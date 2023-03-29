import classes from "./Stack.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stack = () =>{
    useEffect(() =>{
        AOS.init({duration: 3000})
      }, [])
    return(
        <div className={classes.StackContainer}>
            <div className={classes.StackImgContainer}>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/html.png' alt='htmlpng'/>
                </div>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/css.png' alt='csspng'/>
                </div>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/javascript.png' alt='javascriptpng'/>
                </div>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/git.png' alt='gitpng'/>
                </div>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/react.png' alt='reactpng'/>
                </div>
                
                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/redux.png' alt='reduxpng'/>
                </div>
                
                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/nodejs.png' alt='nodejspng'/>
                </div>
                
                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/postgresql.png' alt='postgresqlpng'/>
                </div>

                <div data-aos="zoom-in-up" className="bg-white rounded-full">
                    <img src='/sequelize.png' alt='sequelizepng'/>
                </div>
                               
            </div>
        </div>
   
    )
}

export default Stack;