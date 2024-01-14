import SocialIcon from './SocialIcon'
import Copyright from './Copyright'

export default function Footer() {
    return (
        <footer className='mt-auto bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)] text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:dark:text-gray-300 transition-colors duration-300 ease-in-out'>
            <div className='flex flex-col items-center gap-2 py-5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                <SocialIcon />
                <Copyright />
            </div>
        </footer >
    )
}