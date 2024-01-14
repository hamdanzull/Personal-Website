import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectList from "../components/Projects/ProjectList";
import Thumbnail from "../components/Projects/Thumbnail";
import ProjectDetails from "../components/Projects/ProjectDetails";
import OpenLink from "../components/Projects/OpenLink";
// project image:
import snakeAmazon from '../assets/snake-amazon.png'
import amikomKantin from '../assets/amikom-kantin.png'
import reactOpenai from '../assets/react-openai.png'

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
        id: 2,
        title: 'Amikom Kantin',
        image: amikomKantin,
        stacks: 'PHP, CSS, JavaScript & MySQL',
        description: "Amikom Kantin represents the culmination of my semester's final project—a user-friendly web app streamlining cafeteria interactions, from menu exploration to online ordering and payments.",
        link: '/'
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

export default function ProjectPage() {
    return (
        <>
            <Header />
            <section >
                <div className='pt-5 pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <h2 className='font-bold text-xl tracking-wide'>My Projects</h2>
                    <p className='mt-3 text-gray-600 dark:text-gray-400'>
                        My projects reflect my journey in exploring various technologies and problem-solving. From web development to experimenting with data, each project is a step in my learning process. I enjoy creating user-friendly solutions that make a positive impact.
                    </p>

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
                </div>
            </section>
            <Footer />
        </>
    )
}