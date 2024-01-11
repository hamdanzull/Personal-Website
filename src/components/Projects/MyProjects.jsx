import { useNavigate } from 'react-router-dom'
import OpenLink from './OpenLink'
import ProjectDetails from './ProjectDetails'
import ProjectList from './ProjectList'
import Thumbnail from './Thumbnail'
// project image:
import snakeAmazon from '../../assets/snake-amazon.png'
import reactOpenai from '../../assets/react-openai.png'

const projects = [
    {
        id: 1,
        title: 'Snake Amazon',
        image: snakeAmazon,
        stacks: 'Pure HTML, CSS and Vanilla JS',
        description: 'A classic arcade-style game where you guide a snake through a grid, eating apples to grow longer while avoiding collisions. Simple and challenging, it revives the timeless joy of classic games.',
        link: 'https://wdp-12.github.io/Finalproject1_Kelompok1/',
    },
    {
        id: 3,
        title: 'React OpenAI',
        image: reactOpenai,
        stacks: 'React & Tailwind CSS',
        description: "This project marks my introduction to React as I develop a chatbot application to interact with OpenAI. It represents my first step in mastering React and enhancing my programming skills.",
        link: 'https://openai.hamdanzull.my.id'
    }
]

export default function MyProjects() {
    const direct = useNavigate();
    return (
        <section className='bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)]'>
            <div className='py-5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                <h2 className='font-bold text-xl tracking-wide'>My Projects</h2>

                {projects.map(project => (
                    <ProjectList key={project.id} >
                        <Thumbnail
                            image={project.image}
                            title={project.title}
                        />
                        <ProjectDetails project={project}>
                            <OpenLink link={project.link} />
                        </ProjectDetails>
                    </ProjectList>
                ))}

                <button onClick={() => direct('/projects')} className='mt-5 relative left-1/2 -translate-x-1/2 font-semibold flex items-center gap-1.5 text-red-500 dark:text-sky-500  border-b-2 border-transparent hover:border-red-400 hover:dark:border-sky-500 transition'>
                    View more projects
                    <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                </button>
            </div>
        </section>
    )
}