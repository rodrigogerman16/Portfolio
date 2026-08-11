import classes from './Skills.module.css'

const skills = [
    {
        icon: '/leader.png',
        title: 'Collaboration',
        description: 'Web development is a team effort, and I need to work effectively with others to achieve our shared goals. This involves being open to feedback, adapting to different work styles, and communicating effectively with my colleagues.',
    },
    {
        icon: '/speaker.png',
        title: 'Communication',
        description: "As a developer, I often need to explain technical concepts to non-technical clients and stakeholders. It's important for me to be able to communicate complex ideas in a clear and concise manner that can be easily understood by anyone.",
    },
    {
        icon: '/autodidact.png',
        title: 'Problem Solving',
        description: "Whether it's debugging code or troubleshooting technical issues, I need to be able to think critically and creatively to find effective solutions to complex problems.",
    },
];

const Skills = () =>{
    return(
        <div className={classes.SkillsContainer}>
            <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Soft Skills</p>
                <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">My Top 3 Skills</h2>
            </div>
            <div className={classes.SkillsItemsContainer}>
                {skills.map((skill, index) => (
                    <div
                        key={skill.title}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-once="true"
                        className={classes.SkillItem}
                    >
                        <div className={classes.SkillIcon}>
                            <img src={skill.icon} alt='' loading='lazy'/>
                        </div>
                        <p className={classes.SkillTitle}>{skill.title}</p>
                        <p className={classes.SkillDescription}>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
