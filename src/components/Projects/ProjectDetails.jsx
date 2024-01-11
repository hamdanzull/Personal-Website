/* eslint-disable react/prop-types */
export default function ProjectDetails({ project, children }) {
    return (
        <div className='p-5 md:w-[40%] dark:bg-gray-800'>
            <h3 className='font-semibold text-lg'>{project.title}</h3>
            <p className='text-sm my-1'>Stacks: {project.stacks}</p>
            <p className='mt-3 mb-5'>{project.description}</p>
            {children}
        </div>
    )
}