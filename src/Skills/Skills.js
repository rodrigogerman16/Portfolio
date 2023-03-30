import classes from './Skills.module.css'
import 'aos/dist/aos.css';

   
const Skills = () =>{
    return(
        <div className={classes.SkillsContainer}>
            <div data-aos='zoom-in-up'>
            <h2 className="mt-20 mb-14 text-white font-sans font-bold text-center text-2xl">MY TOP 3 SKILLS</h2>
            </div>
            <div className={classes.SkillsItemsContainer}>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/leader.png' alt='Leaderpng'/>
                    <p className='font-bold text-xl'>Collaboration</p>
                    <p className='text-justify'>Web development is a team effort, and I need to work effectively with others to achieve our shared goals. This involves being open to feedback, adapting to different work styles, and communicating effectively with my colleagues.</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/speaker.png' alt='speakerpng'/>
                    <p className='font-bold text-xl'>Communication</p>
                    <p className='text-justify'>As a developer, I often need to explain technical concepts to non-technical clients and stakeholders. It's important for me to be able to communicate complex ideas in a clear and concise manner that can be easily understood by anyone.</p>
                </div>
                <div data-aos="zoom-in-up" className={classes.SkillItem}>
                    <img src='/autodidact.png' alt='autodidactpng'/>
                    <p className='font-bold text-xl'>Problem Solving</p>
                    <p className='text-justify'>
                    Whether it's debugging code or troubleshooting technical issues, I need to be able to think critically and creatively to find effective solutions to complex problems.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills