import classes from "./About.module.css";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Stack from "../Stack/Stack";

const jobs = [
  {
    title: "Full Stack Developer",
    company: "Mypiroska",
    location: "Remote",
    dates: "2020-2022 & 2024",
    highlights: [
      "Designed and implemented custom web solutions using React, Node.js, and Tailwind, reducing load times by 30%",
      "Developed scalable applications with Express and PostgreSQL",
      "Reduced bug reports by 25% through production maintenance & optimization",
      "Implemented responsive and accessible designs across devices",
    ],
  },
];

const education = [
  {
    school: "Henry Bootcamp",
    field: "Full Stack Web Developer",
    dates: "2022-2023",
  },
  {
    school: "freeCodeCamp",
    field: "Front End Libraries · JavaScript Algorithms · Responsive Web Design",
    dates: "2020-2021",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const slideIn = (direction, delay) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 } }
      : {
          initial: { opacity: 0, x: direction === "left" ? -20 : 20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay, x: { duration: 1 } },
        };

  return (
    <div className="flex flex-col justify-center pb-4 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Get to know me</p>
        <h1 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">About Me</h1>
      </div>
      <div className={classes.AboutContainer}>
        <div className={classes.AboutImg}>
          <motion.div
            {...slideIn("left", 0.5)}
            className={classes.AboutImgFrame}
          >
            <img src="profile.webp" alt="Portrait of Rodrigo German" />
          </motion.div>
        </div>

        <div className={classes.AboutDescription}>
          <motion.div {...slideIn("right", 1)}>
            <p>
              I’m Rodrigo German, a Full Stack Developer &amp; QA Engineer based in
              Madrid with 2+ years of experience building scalable web
              applications, specialized in React, Node.js, and modern
              testing practices.
            </p>
          </motion.div>

          <motion.div {...slideIn("right", 1.5)}>
            <p>
              Well-organised, a problem solver, and an independent worker who's
              also a strong teamplayer with solid communication and leadership
              skills. Outside of code: strategic games, electronic music, TV
              series, and camping in the mountains.
            </p>
          </motion.div>

          <motion.div {...slideIn("right", 2)}>
            <p>
              Interested in the entire product lifecycle, from writing the
              code to verifying it actually works, and I enjoy working on
              ambitious projects with positive people.
            </p>
          </motion.div>

          <motion.div {...slideIn("right", 2.5)}>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Career</p>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Experience</h2>
        </div>
        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <div
              key={job.company}
              data-aos="fade-up"
              className="rounded-2xl border border-border bg-ink-800/50 p-6 shadow-soft sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-ink-700/60 px-3 py-1 text-xs font-medium text-text-tertiary">
                  {job.dates}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
                    <span className="mt-0.5 text-brand-400">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Background</p>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Education</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((ed, index) => (
            <div
              key={ed.school}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-border bg-ink-800/50 p-6 shadow-soft"
            >
              <h3 className="font-display text-lg font-semibold text-text-primary">{ed.school}</h3>
              <p className="mt-1 text-sm text-text-secondary">{ed.field}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-text-tertiary">{ed.dates}</p>
            </div>
          ))}
        </div>
      </div>

      <Stack />
    </div>
  );
};

export default About;
