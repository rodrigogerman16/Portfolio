import classes from "./Stack.module.css"
import {motion} from 'framer-motion';

const technologies = [
    { src: '/html.png', alt: 'HTML' },
    { src: '/css.png', alt: 'CSS' },
    { src: '/javascript.png', alt: 'JavaScript' },
    { src: '/git.png', alt: 'Git' },
    { src: '/react.png', alt: 'React' },
    { src: '/redux.png', alt: 'Redux' },
    { src: '/tailwind.png', alt: 'Tailwind CSS' },
    { src: '/nodejs.webp', alt: 'Node.js' },
    { src: '/postgresql.png', alt: 'PostgreSQL' },
    { src: '/sequelize.png', alt: 'Sequelize' },
];

const Stack = () =>{
    return(
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-4 sm:px-8 sm:pt-24">
            <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Toolbox</p>
                <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Tech Stack</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={classes.StackImgContainer}
                >
                {technologies.map((tech) => (
                    <div key={tech.alt} className={classes.StackTile} title={tech.alt}>
                        <img src={tech.src} alt={tech.alt} loading='lazy'/>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Stack;
