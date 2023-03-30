import classes from "./Stack.module.css"
import {motion} from 'framer-motion';

const Stack = () =>{

    const animateFrom = {opacity: 0, x: -20}
    const animateTo = {opacity: 1, x: 0}

    return(
        <div className="lg:px-40 lg:pt-24 p-10">
            <motion.div
                initial={animateFrom}
                animate={animateTo}
                transition={{
                    delay: 3,
                    x: { duration: 1 },
                }}
                className={classes.StackImgContainer}
                >    
                <div  className="bg-white rounded-full">
                    <img src='/html.png' alt='htmlpng'/>
                </div>   

                <div  className="bg-white rounded-full">
                    <img src='/css.png' alt='csspng'/>
                </div>

                <div  className="bg-white rounded-full">
                    <img src='/javascript.png' alt='javascriptpng'/>
                </div>

                <div  className="bg-white rounded-full">
                    <img src='/git.png' alt='gitpng'/>
                </div>

                <div  className="bg-white rounded-full">
                    <img src='/react.png' alt='reactpng'/>
                </div>
                
                <div  className="bg-white rounded-full">
                    <img src='/redux.png' alt='reduxpng'/>
                </div>
                
                <div  className="bg-white rounded-full">
                    <img src='/tailwind.png' alt='tailwindpng'/>
                </div>

                <div  className="bg-white rounded-full">
                    <img src='/nodejs.png' alt='nodejspng'/>
                </div>
                
                <div  className="bg-white rounded-full">
                    <img src='/postgresql.png' alt='postgresqlpng'/>
                </div>

                <div  className="bg-white rounded-full">
                    <img src='/sequelize.png' alt='sequelizepng'/>
                </div>    
                </motion.div>  
            </div>   
    )
}

export default Stack;