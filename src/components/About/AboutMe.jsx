/* eslint-disable react/prop-types */
import { AboutContent } from './AboutContent';
import Card from './Card';
import SkillsContent from './SkillsContent';

export default function AboutMe({ aboutToggle }) {
    return (
        <section className={`overflow-hidden transition-[max-height] duration-500 ease-linear ${!aboutToggle ? 'max-h-0' : 'max-h-[700px]'}`}>
            <div className='pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                <h2 className='mb-3 font-bold text-xl tracking-wide'>
                    About Me
                </h2>
                <div className='flex flex-col gap-5 lg:flex-row'>
                    <Card title={"aboutMe.js"}>
                        <AboutContent aboutToggle={aboutToggle} />
                    </Card>

                    <Card title={"Skills"}>
                        <SkillsContent />
                    </Card>
                </div>
            </div>
        </section >
    )
}