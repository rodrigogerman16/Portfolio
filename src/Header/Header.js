import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import myCV from '../Assets/Rodrigo German CV English.pdf';
import { Link } from "react-scroll";
import { Link as Redirect} from "react-router-dom";

const Header = () => {
  const animateFrom = { opacity: 0, x: -20 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <div className={classes.HeaderInitial} id="header">
      <div className={classes.HeaderTitle}>
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
        >
          <h2>Hi</h2>
        </motion.div>

        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{
            delay: 1,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
        >
          <h2>I'm Rodrigo</h2>
        </motion.div>

        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{
            delay: 1.5,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
        >
          <p>Front End Developer</p>
        </motion.div>

        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{
            delay: 2,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
        >
          <p>I like to create amazing experiences</p>
        </motion.div>

        <div className="Social-icons">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.5,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <a
              href="https://www.instagram.com/rodrigogerman2/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.6,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <a
              href="https://twitter.com/RodriiGerman"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.7,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <a
              href="https://github.com/rodrigogerman16"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.8,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <a
              href="https://www.linkedin.com/in/rodrigo-german-8408a5127/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </motion.div>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
        className="flex flex-wrap justify-left gap-4 mt-4">
          <motion.div>
            <a
              href={myCV} target="_blank" rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-white text-sm text-white font-bold py-2 px-4 rounded"
            >
              Download CV
            </a>
          </motion.div>
          <motion.div>
            <Redirect
              to="/about"
              className="bg-blue-500 hover:bg-white text-sm text-white font-bold py-2 px-4 rounded"
            >
              About Me
            </Redirect>
          </motion.div>
          <motion.div>
            <Link
              to="work" smooth={true} duration={500} offset={-100}
              className="bg-blue-500 hover:bg-white text-sm text-white font-bold py-2 px-4 rounded"
            >
              Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
