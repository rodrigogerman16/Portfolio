import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useReducedMotion } from "framer-motion";
import myCV from '../Assets/Rodrigo German CV English.pdf';
import { Link } from "react-scroll";
import { Link as Redirect} from "react-router-dom";

const socialLinks = [
  { icon: faLinkedin, href: "https://www.linkedin.com/in/rodrigo-german-8408a5127/", label: "LinkedIn" },
  { icon: faGithub, href: "https://github.com/rodrigogerman16", label: "GitHub" },
];

const techStack = ["React", "Node.js", "JavaScript", "PostgreSQL", "Tailwind CSS"];

const Header = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className={classes.HeaderInitial} id="header">
      <div className={classes.HeroBackground} aria-hidden="true">
        <div className={classes.Orb1} />
        <div className={classes.Orb2} />
        <div className={classes.Grid} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-8">
        <motion.div
          {...fadeUp(0.05)}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-ink-800/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Madrid, Spain
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-ink-800/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            2+ Years Experience
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-time roles
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.1)}
          className="font-display text-xl font-semibold text-brand-400 sm:text-2xl"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-1 font-display text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        >
          Rodrigo German
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 font-display text-2xl font-semibold text-text-primary sm:text-3xl"
        >
          Full Stack Developer &amp; QA Engineer
        </motion.p>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary"
        >
          I build reliable, end-to-end products — from React front-ends to the
          APIs behind them — and I test everything I ship, including QA for
          games.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-ink-800/50 px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.35)}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-400 hover:shadow-glow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            Download CV
          </a>
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-ink-700/60 active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            See My Work
          </Link>
          <Redirect
            to="/contact"
            className="cursor-pointer rounded-lg border border-transparent px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-200 ease-premium hover:text-text-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            Contact Me →
          </Redirect>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
