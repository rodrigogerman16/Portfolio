import WorkDesktop from "./WorkDesktop"

const Work = ({ isPageHeading = false }) => {
  const Heading = isPageHeading ? "h1" : "h2"
  return (
    <div className="pt-20 pb-4 sm:pt-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Portfolio</p>
        <Heading className="font-display text-3xl font-bold text-text-primary sm:text-4xl">My Work</Heading>
        <p className="mx-auto mt-3 max-w-xl text-text-secondary">
          A selection of projects I've built end-to-end, from UI to backend.
        </p>
      </div>
      <WorkDesktop featuredOnly={!isPageHeading}/>
    </div>
  )
}

export default Work
