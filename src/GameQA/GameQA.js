import classes from "./GameQA.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faGamepad,
  faVolumeHigh,
  faDisplay,
  faBug,
  faMagnifyingGlass,
  faListCheck,
  faTags,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { badge } from "../Body/workStyles";

const games = [
  {
    key: "hll-vietnam",
    title: "Hell Let Loose: Vietnam",
    img: "hell-let-loose-vietnam.webp",
    alt: "Hell Let Loose: Vietnam official cover art",
    testingType: "Beta Testing",
    findings: [
      { category: "Visual", text: "Spotted an oversized pixel artifact rendering in the sky." },
      { category: "Visual", text: "Water surface bug: instead of staying calm, it animated as if constantly rippling in place." },
      { category: "Gameplay", text: "Found multiple wall locations where player collision let you clip through geometry." },
      { category: "Audio", text: "Climbing a tree looped the jump sound effect continuously, even while standing still." },
    ],
  },
  {
    key: "king-of-meat",
    title: "King of Meat",
    img: "king-of-meat.webp",
    alt: "King of Meat official cover art",
    testingType: "Stress Testing",
    note: "Took part in 3 stress-test sessions (~3 hours each) focused on server load. Only got into the game itself during the 3rd session, which is where testing happened.",
    findings: [
      { category: "Audio", text: "Attack sound effects played with a noticeable delay after pressing the attack button, instead of triggering in sync with the action." },
    ],
  },
];

const bugCategories = [
  { icon: faEye, label: "Visual" },
  { icon: faGamepad, label: "Gameplay" },
  { icon: faVolumeHigh, label: "Audio" },
  { icon: faDisplay, label: "UX" },
  { icon: faBug, label: "Other" },
];

const methodology = [
  {
    icon: faMagnifyingGlass,
    title: "Systematic Exploration",
    text: "Working through builds methodically rather than randomly, to make sure every area gets covered.",
  },
  {
    icon: faListCheck,
    title: "Clear Reproduction Steps",
    text: "Every issue is documented with exact steps, so the dev team can reproduce it without guesswork.",
  },
  {
    icon: faBug,
    title: "Severity Triage",
    text: "Classifying issues by impact and priority, so critical problems get attention first.",
  },
  {
    icon: faTags,
    title: "Cross-Category Coverage",
    text: "Testing beyond \"does it crash\": visuals, gameplay, audio and UX are all in scope.",
  },
];

const categoryIcon = Object.fromEntries(bugCategories.map((cat) => [cat.label, cat.icon]));

const severityLevels = [
  { label: "Critical", color: "bg-red-500" },
  { label: "High", color: "bg-orange-400" },
  { label: "Medium", color: "bg-amber-300" },
  { label: "Low", color: "bg-sky-400" },
];

const GameQA = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-4 sm:px-8 sm:pt-24" id="game-qa">
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Game QA</p>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Game Testing &amp; QA Experience</h2>
        <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
          Beyond web development, I've worked as a beta tester on live game builds, looking past
          "does it crash" to whether a game looks right, plays right, sounds right, and feels
          intuitive to use.
        </p>
      </div>

      {/* Bug category legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {bugCategories.map((cat) => (
          <span key={cat.label} className={`${badge} inline-flex items-center gap-1.5`}>
            <FontAwesomeIcon icon={cat.icon} className="text-brand-400/80" />
            {cat.label}
          </span>
        ))}
      </div>

      {/* Game cards */}
      <div className={`${classes.Grid} mt-12`}>
        {games.map((game, index) => (
          <div
            key={game.key}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={classes.GameCard}
          >
            {game.img ? (
              <div className={classes.GameMedia}>
                <img src={game.img} alt={game.alt} loading="lazy" />
              </div>
            ) : (
              <div className={classes.MediaPlaceholder}>
                <FontAwesomeIcon icon={faImage} className="text-2xl" />
                <span className="text-xs font-medium">Add cover art</span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6 pt-2">
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {game.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className={badge}>{game.testingType}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(game.findings
                  ? [...new Set(game.findings.map((f) => f.category))]
                  : bugCategories.slice(0, 4).map((cat) => cat.label)
                ).map((label) => (
                  <span key={label} className={`${badge} inline-flex items-center gap-1.5`}>
                    <FontAwesomeIcon icon={categoryIcon[label]} className="text-[10px] text-brand-400/80" />
                    {label}
                  </span>
                ))}
              </div>
              {game.note && (
                <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
                  {game.note}
                </p>
              )}
              {game.findings ? (
                <ul className="mt-4 flex-1 space-y-2.5">
                  {game.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
                      <FontAwesomeIcon icon={categoryIcon[finding.category]} className="mt-1 shrink-0 text-xs text-brand-400/80" />
                      <span>{finding.text}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-text-tertiary">
                  Add specific findings, build details or standout catches from this beta here.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Methodology */}
      <div className="mt-16">
        <h3 className="text-center font-display text-xl font-semibold text-text-primary">
          How I Approach QA Testing
        </h3>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {methodology.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-border bg-ink-800/50 p-5 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <p className="mt-3 font-display text-base font-semibold text-text-primary">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample bug report */}
      <div className="mt-16">
        <h3 className="text-center font-display text-xl font-semibold text-text-primary">
          Sample Bug Report Format
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-text-tertiary">
          This is a template showing how I document issues, not an actual bug from either build above.
        </p>

        <div
          data-aos="fade-up"
          className={`${classes.BugCard} mx-auto mt-8 max-w-2xl p-6 sm:p-8`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="font-display text-lg font-semibold text-text-primary sm:pr-28">
              [Short, descriptive bug title]
            </p>
            <span className="shrink-0 rounded-full border border-border bg-ink-700/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-tertiary sm:absolute sm:right-6 sm:top-6">
              Example format
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className={badge}>Category: [Visual / Gameplay / Audio / UX]</span>
            <span className={badge}>Platform: [Build / version]</span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Severity</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {severityLevels.map((level) => (
                <span key={level.label} className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className={`h-2 w-2 rounded-full ${level.color}`} />
                  {level.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Steps to reproduce</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-text-secondary">
              <li>[Step one]</li>
              <li>[Step two]</li>
              <li>[Step three]</li>
            </ol>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Expected result</p>
              <p className="mt-1 text-sm text-text-secondary">[What should happen]</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">Actual result</p>
              <p className="mt-1 text-sm text-text-secondary">[What actually happens]</p>
            </div>
          </div>

          <div className={`${classes.MediaPlaceholder} mt-6 !m-0`}>
            <FontAwesomeIcon icon={faImage} className="text-xl" />
            <span className="text-xs font-medium">Attach screenshot / clip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameQA;
