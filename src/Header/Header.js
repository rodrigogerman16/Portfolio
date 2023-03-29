import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Stack from "../Stack/Stack";

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
          <h6>I like to create amazing experiences</h6>
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
      </div>
        <Stack/>
    </div>
  );
};

export default Header;
