import classes from "./About.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Stack from "../Stack/Stack";

const About = () => {
  const animateFrom = { opacity: 0, x: -20 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className={classes.AboutContainer}>
        <div className={classes.AboutImg}>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{
              delay: 0.5,
              x: { duration: 1 },
            }}
          >
            <img src="profile.png" alt="profilepng" />
          </motion.div>
        </div>

        <div className={classes.AboutDescription}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={animateTo}
            transition={{
              delay: 1,
              x: { duration: 1 },
            }}
          >
            <p>
              I’m Rodrigo German, a Front-End Developer located in Madrid managing a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={animateTo}
            transition={{
              delay: 1.5,
              x: { duration: 1 },
            }}
          >
            <p>
              Well-organised person, problem solver, independent employee with
              attention to detail but also a teamplayer with high communication
              skills and leadership. Fan of strategic games, Electronic music,
              TV series and Camping in the mountain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={animateTo}
            transition={{
              delay: 2,
              x: { duration: 1 },
            }}
          >
            <p>
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={animateTo}
            transition={{
              delay: 2.5,
              x: { duration: 1 },
            }}
          >
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded">Start new adventure</Link>
          </motion.div>
        </div>
      </div>
      <Stack />
    </div>
  );
};

export default About;
