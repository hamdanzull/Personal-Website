/* eslint-disable react/prop-types */
export default function ProjectList({ children }) {
    return (
        <>
            <div className='mt-5 w-full flex flex-col md:flex-row rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-700'>
                {children}
            </div>
        </>
    )
}