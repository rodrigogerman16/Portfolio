import classes from "./Work.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectModal from "./ProjectModal";
import { badge, primaryLink, secondaryLink } from "./workStyles";

const projects = [
  {
    key: "mercado",
    featured: true,
    img: "mercado.webp",
    alt: "Mercado Solidario initiatives marketplace screenshot",
    title: "Mercado Solidario",
    role: "Full Stack Developer",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "MongoDB", "APIs"],
    description: "Platform for donating, volunteering, creating initiatives and finding workers.",
    what: "Mercado Solidario connects people who want to help, through donations or volunteering, with community initiatives and job opportunities. The goal was to make it simple for anyone to find a cause worth supporting or a way to lend a hand, all in one place.",
    challenges: "Coordinating with collaborators across different timezones was a real challenge. On top of that, I ended up picking up backend work, an area outside my usual strength, after the timeline got tight and no one else was available to take it on.",
    live: "https://mercadosolidario.vercel.app/",
    code: "https://github.com/rodrigogerman16/mercadosolidario",
  },
  {
    key: "bugforge",
    featured: true,
    img: "bugforge.jpg",
    alt: "BugForge QA dashboard showing quality score, bug metrics, and trends for a game build",
    title: "BugForge",
    role: "Full Stack Developer",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    description: "QA intelligence platform for tracking bugs, builds, and quality metrics on game testing projects.",
    what: "BugForge centralizes QA data for game development testing: bug tracking with severity triage, build management, test case and session logging, and dashboard analytics showing quality scores and regression trends over time. It grew out of my own game QA work as a way to keep bug reports, builds, and test coverage organized in one place.",
    live: "https://bugforge-seven.vercel.app/",
    code: "https://github.com/rodrigogerman16/bugforge",
  },
  {
    key: "nexus",
    featured: true,
    img: "nexus.svg",
    imgClass: classes.LogoOnly,
    imgContain: true,
    alt: "Nexus logo",
    title: "Nexus",
    role: "Full Stack Developer",
    tags: ["Next.js", "TypeScript", "Supabase", "Claude API"],
    description: "Full-stack starter app with authentication and AI chat, built on Supabase and Anthropic's Claude API.",
    what: "Nexus is a Next.js application boilerplate wired up with Supabase for authentication and data, and Anthropic's Claude API for AI chat features (with a mock provider for local development). It includes CI checks for linting, type checking, testing, and build verification.",
    code: "https://github.com/rodrigogerman16/nexus",
  },
  {
    key: "sleeveit",
    img: "sleeveit.webp",
    alt: "Sleeve It game sleeve search screenshot",
    title: "Sleeve It",
    role: "Full Stack Developer",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    description: "Find the perfect sleeves for any board game, just search the title and get the sleeve sizes you need.",
    what: "Board gamers often waste time hunting down the right card-sleeve dimensions for their games. Sleeve It solves that by letting users search for a game title and instantly get the exact sleeve sizes they need, so they can protect their cards without the guesswork.",
    live: "https://sleeve-it.vercel.app/",
    code: "https://github.com/rodrigogerman16/sleeve-it",
  },
];

const WorkDesktop = ({ featuredOnly = false }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = featuredOnly ? projects.filter((project) => project.featured) : projects;

  return (
    <div className={classes.Body} id="work">
      <div className={classes.Work}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.key}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={classes.WorkCard}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`${classes.WorkImg} block w-full cursor-pointer border-0 bg-transparent p-0 text-left`}
              aria-label={`View case study for ${project.title}`}
            >
              <img
                src={project.img}
                className={project.imgClass}
                alt={project.alt}
                loading="lazy"
              />
            </button>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-400/80">
                {project.role}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className={badge}>{tag}</span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="-mx-1 mt-4 inline-flex min-h-[44px] w-fit items-center gap-1 rounded border-0 bg-transparent px-1 py-2 text-sm font-semibold text-brand-400 transition-colors duration-200 hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                View case study →
              </button>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.live && (
                  <a href={project.live} className={primaryLink} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                )}
                <a href={project.code} className={secondaryLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default WorkDesktop;
