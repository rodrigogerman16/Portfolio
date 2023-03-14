import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <nav class="px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-end mx-auto">
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col pt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold">
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.05 }}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 font-bold" aria-current="page"
            >
              <Link to="/">
                <a href="#header">Home</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className="block py-2 pl-3 pr-4 text-white font-bold rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
            >
              <Link to="/about">
                <a href="about">About</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.15 }}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className="block py-2 pl-3 pr-4 text-white font-bold rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
            >
              <Link to="/work">
                <a href="#work">Work</a>
              </Link>
            </motion.li>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.2 }}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className="block py-2 pl-3 pr-4 text-white font-bold rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
            >
              <Link to="/contact">
                <a href="#footer">Contact</a>
              </Link>
            </motion.li>
          </ul>          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;